// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true, // a flag required for SQlite specifically
    connection: {
      filename: "./data/car-dealer.db3"
    }
  }
};
