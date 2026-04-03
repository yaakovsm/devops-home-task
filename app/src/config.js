const config = {
    port: process.env.PORT || 3000,
    mongoUri: process.env.MONGO_URI || "mongodb://localhost:27017",
    dbName: process.env.DB_NAME || "fruitdb",
    collectionName: process.env.COLLECTION_NAME || "fruits",
  };
  
  module.exports = config;