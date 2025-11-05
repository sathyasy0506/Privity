// src/config/api.js

// Automatically pick base URL depending on environment
const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost/backend/"
    : "https://privity.in/backend/";

export const API = {
  sendMail: `${BASE_URL}sendMail.php`,
  contact: `${BASE_URL}contact.php`,
  // add more here if needed
};
