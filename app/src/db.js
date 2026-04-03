const { MongoClient } = require("mongodb");
const config = require("./config");

let client;
let db;

async function connectToMongo() {
  if (db) {
    return db;
  }

  client = new MongoClient(config.mongoUri);
  await client.connect();
  db = client.db(config.dbName);

  console.log("Connected to MongoDB");
  return db;
}

async function getApplesQty() {
  const database = await connectToMongo();
  const collection = database.collection(config.collectionName);

  const applesDoc = await collection.findOne({ name: "apples" });

  if (!applesDoc) {
    throw new Error("Could not find apples document in MongoDB");
  }

  return applesDoc.qty;
}

module.exports = {
  connectToMongo,
  getApplesQty,
};