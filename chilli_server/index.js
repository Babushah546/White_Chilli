const express = require("express");
const app = express();
const port = process.env.PORT || 6001;
const cors = require("cors");
require("dotenv").config();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB configuration
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.atp53lo.mongodb.net/myDatabase?retryWrites=true&w=majority`;

// Debugging: Log URI without password for verification
console.log(
  `Connecting to MongoDB with URI: ${uri.replace(
    process.env.DB_PASSWORD,
    "******"
  )}`
);

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  useNewUrlParser: true, // Ensure new URL parser is used
  useUnifiedTopology: true, // Ensure the use of the new connection management engine
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.error("Connection failed:", error);
  } finally {
    // Optionally, you may choose to comment out this line if you want to keep the connection open
    // await client.close();
  }
}

// Ensure MongoDB connection is established before starting the server
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
