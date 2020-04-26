const express = require("express");

const db = require("../data/config");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const cars = await db("cars");

    res.json(cars);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const car = await db("cars")
      .where({ id })
      .first();

    res.json(car);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const payload = {
      vin: req.body.vin,
      make: req.body.make,
      model: req.body.model,
      mileage: req.body.mileage,
      transmission: req.body.transmission,
      title: req.body.title
    };

    await db("cars")
      .where("id", req.params.id)
      .update(payload);
    const updatedCar = await db("cars")
      .where("id", req.params.id)
      .first();
    res.json(updatedCar);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const carData = req.body;
    const [id] = await db("cars").insert(carData);
    const newCar = await db("cars").where({ id });

    res.status(201).json(newCar);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
