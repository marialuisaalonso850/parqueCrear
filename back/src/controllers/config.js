// config.js
module.exports = {
    mongoUri: process.env.BD_CONNECTION_STRING,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL || "admin@localhost",
    ADMIN_USERNAME: process.env.ADMIN_USERNAME || "admin",
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD || "admin",
};


const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/apicompany";
const SECRET = "yoursecretkey";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@localhost";
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin";

