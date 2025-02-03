// Imports
import express from "express";
import cors from "cors";
import db from "./database.js";

// ========== Setup ========== //

// Create Express app
const server = express();
const PORT = process.env.PORT || 3000;

// Configure middleware
server.use(express.json()); // to parse JSON bodies
server.use(cors()); // Enable CORS for all routes

// ========== Routes ========== //

// Root route
server.get("/", async (req, res) => {
  // Check database connection
  const result = await db.ping();

  if (result) {
    res.send("Node.js REST API with Express.js - connected to database ✨");
  } else {
    res.status(500).send("Error connecting to database");
  }
});

// Start server on port 3000
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// Users route
server.get("/users", async (req, res) => {
  try {
    const query = "SELECT * FROM users"; // SQL-query til at hente alle brugere
    const [users] = await db.query(query); // Kører SQL-forespørgslen
    res.json(users); // Returnerer brugerne som JSON
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching users");
  }
});

server.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  const query = "SELECT * FROM users WHERE id = ?";
  const values = [id];
  const [users] = await db.query(query, values);
  console.log(users);
  res.json(users[0]);
});

app.post("/users", async (req, res) => {
  const user = request.body;
  const query =
    "INSERT INTO users (name, mail, title, image) VALUES (?, ?, ?, ?);";
  const values = [user.name, user.mail, user.title, user.image];
  const [result] = await db.query(query, values);
  response.json(result);
});

server.delete("/users/:id", async (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM users WHERE id = ?";
  const values = [id];
  const [result] = await db.query(query, values);
  res.json(result);
});
