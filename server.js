// Imports
import express from "express";
import db from "./database.js";
import cors from "cors";
import { ObjectId } from "mongodb";

// ========== Setup ========== //

// Create Express app
const server = express();
const PORT = process.env.PORT || 3000;

// Configure middleware
server.use(express.json());
server.use(cors());

// ========== Routes ========== //

// Root route
server.get("/", async (req, res) => {
  const adminDb = db.admin();
  const result = await adminDb.command({ ping: 1 });
  console.log("✅ MongoDB Ping Successful:", result);
  res.send(
    "Node.js REST API with Express.js successfully connected to MongoDB!"
  );
});
// ========== CRUD ========== //

// GET “/contacts” - read all contacts
server.get("/contacts", async (req, res) => {
  const contacts = await db
    .collection("contacts")
    .find()
    .sort({ first: 1, last: 1 })
    .toArray();
  res.json(contacts);
});

// GET “/contacts/:id” - read one contact by id
server.get("/contacts/:id", async (req, res) => {
  const contactId = req.params.id;

  // Check if the ObjectId is valid
  if (!ObjectId.isValid(contactId)) {
    return res.status(400).json({ error: "Invalid contact ID format" });
  }

  const contact = await db
    .collection("contacts")
    .findOne({ _id: new ObjectId(contactId) });

  if (!contact) {
    return res.status(404).json({ error: "Contact not found" });
  }
  res.json(contact);
});

// POST “/contacts” - create a new contact
server.post("/contacts", async (req, res) => {
  const { avatar, first, last, twitter } = req.body;
  const result = await db
    .collection("contacts")
    .insertOne({ avatar, first, last, twitter });
  res.json({ _id: result.insertedId });
});

// PUT “/contacts/:id” - update existing contact by id
server.put("/contacts/:id", async (req, res) => {
  const contactId = req.params.id;

  // Check if the ObjectId is valid
  if (!ObjectId.isValid(contactId)) {
    return res.status(400).json({ error: "Invalid contact ID format" });
  }

  const { avatar, first, last, twitter } = req.body;
  const result = await db
    .collection("contacts")
    .updateOne(
      { _id: new ObjectId(contactId) },
      { $set: { avatar, first, last, twitter } }
    );

  if (result.matchedCount === 0) {
    return res.status(404).json({ error: "Contact not found" });
  }

  res.json({ _id: contactId });
});

// DELETE “/contacts/:id” - delete existing contact by id
server.delete("/contacts/:id", async (req, res) => {
  const contactId = req.params.id;

  // Check if the ObjectId is valid
  if (!ObjectId.isValid(contactId)) {
    return res.status(400).json({ error: "Invalid contact ID format" });
  }

  const result = await db
    .collection("contacts")
    .deleteOne({ _id: new ObjectId(contactId) });

  if (result.deletedCount === 0) {
    return res.status(404).json({ error: "Contact not found" });
  }
  res.json({ _id: contactId });
});

// GET “contacts/search” - search contacts
server.get("/contacts/search", async (req, res) => {
  const searchQuery = new RegExp(req.query.q, "i");
  const contacts = await db
    .collection("contacts")
    .find({
      $or: [
        { first: searchQuery },
        { last: searchQuery },
        { twitter: searchQuery },
      ],
    })
    .toArray();
  res.json(contacts);
});

// PUT “/contacts/:id/favorite” - toggle favorite status
server.put("/contacts/:id/favorite", async (req, res) => {
  const contactId = req.params.id;

  // Check if the ObjectId is valid
  if (!ObjectId.isValid(contactId)) {
    return res.status(400).json({ error: "Invalid contact ID format" });
  }

  try {
    const contact = await db
      .collection("contacts")
      .findOne({ _id: new ObjectId(contactId) });

    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }

    // Toggle the favorite status
    const newFavorite = !contact.favorite;

    // Update the favorite status in the database
    await db
      .collection("contacts")
      .updateOne(
        { _id: new ObjectId(contactId) },
        { $set: { favorite: newFavorite } }
      );

    res.json({
      message: `Contact ${contactId} favorite status toggled to ${newFavorite}`,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while toggling the favorite status" });
  }
});

// GET “/contacts/favorites” - get all favorite contacts
server.get("/contacts/favorites", async (_, res) => {
  try {
    const contacts = await db
      .collection("contacts")
      .find({ favorite: true })
      .toArray();

    if (contacts.length === 0) {
      return res.status(404).json({ message: "No favorite contacts found" });
    }

    res.json(contacts);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching favorite contacts" });
  }
});

// ========== Start server ========== //

// Start server on PORT
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
