module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "tristate@123",
  DB: "jwt_refresh",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
