use(posts_db);

db.posts.insertMany([
  {
    caption: "Beautiful sunset at the beach",
    createdAt: new Date("2023-04-05T15:27:14Z"),
    image:
      "https://images.unsplash.com/photo-1566241832378-917a0f30db2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
  {
    caption: "Exploring the city streets of Aarhus",
    createdAt: new Date("2023-04-06T10:45:30Z"),
    image:
      "https://images.unsplash.com/photo-1559070169-a3077159ee16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
  {
    caption: "Delicious food at the restaurant",
    createdAt: new Date("2023-04-04T20:57:24Z"),
    image:
      "https://images.unsplash.com/photo-1548940740-204726a19be3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
  {
    caption: "Morning coffee at the café",
    createdAt: new Date("2023-04-07T08:30:00Z"),
    image:
      "https://images.unsplash.com/photo-1559526323-4fe2f7e767c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
  {
    caption: "Hiking in the mountains",
    createdAt: new Date("2023-04-03T13:10:45Z"),
    image:
      "https://images.unsplash.com/photo-1566241832378-917a0f30db2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
  {
    caption: "Relaxing day at the spa",
    createdAt: new Date("2023-04-02T14:45:30Z"),
    image:
      "https://images.unsplash.com/photo-1559070169-a3077159ee16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
  },
]);

db.posts.find();

use("posts_db");

//users

db.users.insertMany([
  {
    image:
      "https://www.baaa.dk/media/b5ahrlra/maria-louise-bendixen.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921650330000&format=webp",
    mail: "mlbe@eaaa.dk",
    name: "Maria Louise Bendixen",
    title: "Senior Lecturer",
  },
  {
    image: "https://share.cederdorff.dk/images/race.jpg",
    mail: "race@eaaa.dk",
    name: "Rasmus Cederdorff",
    title: "Senior Lecturer",
  },
  {
    image:
      "https://www.baaa.dk/media/5buh1xeo/anne-kirketerp.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921531600000&format=webp",
    mail: "anki@eaaa.dk",
    name: "Anne Kirketerp",
    title: "Head of Department",
  },
  {
    image:
      "https://www.eaaa.dk/media/14qpfeq4/line-skjodt.jpg?width=800&height=450&rnd=133178433559770000",
    mail: "lskj@eaaa.dk",
    name: "Line Skjødt",
    title: "Senior Lecturer & Internship Coordinator",
  },
  {
    image:
      "https://www.eaaa.dk/media/bdojel41/dan-okkels-brendstrup.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921559630000&format=webp",
    mail: "dob@eaaa.dk",
    name: "Dan Okkels Brendstrup",
    title: "Lecturer",
  },
]);

// posts

db.posts.insertMany([
  {
    caption: "Beautiful sunset at the beach",
    createdAt: new Date("2023-04-05T15:27:14Z"),
    image:
      "https://images.unsplash.com/photo-1566241832378-917a0f30db2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    uid: db.users.findOne({ name: "Anne Kirketerp" })._id,
  },
  {
    caption: "Exploring the city streets of Aarhus",
    createdAt: new Date("2023-04-06T10:45:30Z"),
    image:
      "https://images.unsplash.com/photo-1559070169-a3077159ee16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    uid: db.users.findOne({ name: "Rasmus Cederdorff" })._id,
  },
  {
    caption: "Delicious food at the restaurant",
    createdAt: new Date("2023-04-04T20:57:24Z"),
    image:
      "https://images.unsplash.com/photo-1548940740-204726a19be3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    uid: db.users.findOne({ name: "Anne Kirketerp" })._id,
  },
  {
    caption: "Exploring the city center of Aarhus",
    createdAt: new Date("2023-04-06T10:58:24Z"),
    image:
      "https://images.unsplash.com/photo-1612624629424-ddde915d3dc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    uid: db.users.findOne({ name: "Dan Okkels Brendstrup" })._id,
  },
  {
    caption: "A cozy morning with coffee",
    createdAt: new Date("2023-04-03T08:21:04Z"),
    image:
      "https://images.unsplash.com/photo-1545319261-f3760f9dd64d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    uid: db.users.findOne({ name: "Maria Louise Bendixen" })._id,
  },
  {
    caption: "Serenity of the forest",
    createdAt: new Date("2023-04-05T14:34:04Z"),
    image:
      "https://images.unsplash.com/photo-1661505216710-32316e7b5bb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    uid: db.users.findOne({ name: "Maria Louise Bendixen" })._id,
  },
  {
    caption: "A beautiful morning in Aarhus",
    createdAt: new Date("2023-04-06T09:10:54Z"),
    image:
      "https://images.unsplash.com/photo-1573997953524-efed43db70a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    uid: db.users.findOne({ name: "Line Skjødt" })._id,
  },
  {
    caption: "Rainbow reflections of the city of Aarhus",
    createdAt: new Date("2023-04-02T20:25:34Z"),
    image:
      "https://images.unsplash.com/photo-1558443336-dbb3de50b8b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    uid: db.users.findOne({ name: "Dan Okkels Brendstrup" })._id,
  },
]);

db.users.updateOne(
  // Specify the user you want to update
  { _id: ObjectId("65b2199e9064f6ef7069dace") },
  {
    $set: {
      // Update the name field with the new value
      name: "New Name",
      // Update the title field with the new value
      title: "New Title",
      // Add more fields to update as needed
    },
  }
);
db.users.updateMany(
  // Specify the criteria for the documents you want to update
  { title: "Senior Lecturer" },
  {
    $set: {
      // Update the title field with the new value
      title: "Updated Title",
      // Add more fields to update as needed
    },
  }
);

db.users.replaceOne(
  // Specify the user you want to replace
  { _id: ObjectId("65b2199e9064f6ef7069dace") },
  // Specify the new user
  {
    image: "https://new-image-url.com",
    mail: "new-email@example.com",
    // Add more fields as needed
  }
);
db.users.deleteOne(
  // Specify the user you want to delete
  { _id: ObjectId("65b2199e9064f6ef7069dace") }
);
db.users.deleteMany(
  // Specify the criteria for the
  // documents you want to delete
  { title: "Senior Lecturer" }
);

// Insert users with embedded posts
db.users.insertMany([
  {
    image:
      "https://www.baaa.dk/media/b5ahrlra/maria-louise-bendixen.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921650330000&format=webp",
    mail: "mlbe@eaaa.dk",
    name: "Maria Louise Bendixen",
    title: "Senior Lecturer",
    posts: [
      {
        caption: "Beautiful sunset at the beach",
        createdAt: new Date("2023-04-05T15:27:14Z"),
        image:
          "https://images.unsplash.com/photo-1566241832378-917a0f30db2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      },
      // ... other posts for this user
    ],
  },
  // ... other user documents
]);
// Insert more users with embedded posts
db.users.insertMany([
  {
    image: "https://example.com/image1.jpg",
    mail: "user1@example.com",
    name: "User One",
    title: "Lecturer",
    posts: [
      {
        caption: "A day in the park",
        createdAt: new Date("2023-04-01T10:00:00Z"),
        image:
          "https://images.unsplash.com/photo-1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
      {
        caption: "Evening walk by the river",
        createdAt: new Date("2023-04-02T18:30:00Z"),
        image:
          "https://images.unsplash.com/photo-2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
    ],
  },
  {
    image: "https://example.com/image2.jpg",
    mail: "user2@example.com",
    name: "User Two",
    title: "Assistant Professor",
    posts: [
      {
        caption: "Mountain adventure",
        createdAt: new Date("2023-04-03T08:00:00Z"),
        image:
          "https://images.unsplash.com/photo-3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
      {
        caption: "City skyline at night",
        createdAt: new Date("2023-04-04T21:00:00Z"),
        image:
          "https://images.unsplash.com/photo-4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
    ],
  },
  {
    image: "https://example.com/image3.jpg",
    mail: "user3@example.com",
    name: "User Three",
    title: "Professor",
    posts: [
      {
        caption: "Sunny beach day",
        createdAt: new Date("2023-04-05T12:00:00Z"),
        image:
          "https://images.unsplash.com/photo-5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
      {
        caption: "Hiking trail",
        createdAt: new Date("2023-04-06T09:00:00Z"),
        image:
          "https://images.unsplash.com/photo-6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      },
    ],
  },
]);

// Read all data from users collection
db.users.find().forEach(printjson);

// Retrieve all posts from the user documents
db.users.find({}, { _id: 0, posts: 1 }).forEach(printjson);
