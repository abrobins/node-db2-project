exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("cars").truncate();

  await knex("cars").insert([
    {
      vin: "1XA2345234",
      make: "Ford",
      model: "Fiesta",
      mileage: 100345,
      transmission: "automatic",
      title: "clean"
    },
    {
      vin: "1XA2345235",
      make: "Chevrolet",
      model: "Blazer",
      mileage: 10035,
      transmission: "manual",
      title: "salvage"
    },
    {
      vin: "1XA2345236",
      make: "Toyota",
      model: "Tacoma",
      mileage: 120345,
      transmission: "automatic",
      title: "clean"
    },
    {
      vin: "1XA2345237",
      make: "Honda",
      model: "Accord",
      mileage: 98345,
      transmission: "manual",
      title: "clean"
    }
  ]);
};
