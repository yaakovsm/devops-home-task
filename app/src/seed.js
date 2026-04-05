const { connectToMongo } = require("./db");
const config = require("./config");

const requiredDocuments = [
  { _id: 1, name: "apples", qty: 5, rating: 3 },
  { _id: 2, name: "bananas", qty: 7, rating: 1, microsieverts: 0.1 },
  { _id: 3, name: "oranges", qty: 6, rating: 2 },
  { _id: 4, name: "avocados", qty: 3, rating: 5 },
];

async function seedDatabase() {
  const db = await connectToMongo();
  const collection = db.collection(config.collectionName);

  for (const doc of requiredDocuments) {
    await collection.updateOne(
      { _id: doc._id },
      { $set: doc },
      { upsert: true }
    );
  }

  console.log("Database seed check completed");
}

module.exports = { seedDatabase };