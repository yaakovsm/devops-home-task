const express = require("express");
const config = require("./config");
const { getApplesQty } = require("./db");

const app = express();

app.get("/", async (req, res) => {
  try {
    const applesQty = await getApplesQty();
    const appleIcons = "🍎".repeat(applesQty);

    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Hello World</title>
        </head>
        <body>
          <h1>Hello World</h1>
          <p>Apples count in database: <strong>${applesQty}</strong></p>
          <p style="font-size: 2rem;">${appleIcons}</p>
        </body>
      </html>
    `);
  } catch (error) {
    console.error("Failed to load apples count:", error.message);

    res.status(500).send(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Error</title>
        </head>
        <body>
          <h1>Application Error</h1>
          <p>Could not retrieve apples count from the database.</p>
        </body>
      </html>
    `);
  }
});

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});