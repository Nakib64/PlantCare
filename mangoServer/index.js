require("dotenv").config();
const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@cluster0.rcnlifl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const plantsCollection = client.db("plantsdb").collection("allPlants");

    app.post("/plants", async (req, res) => {
      const newPlant = req.body;
      
      const result = await plantsCollection.insertOne(newPlant);
      res.send(result);
    });


    app.delete("/plants/:_id", async(req, res)=>{
        const id = req.params._id;
        const query = {_id: new ObjectId(id)}
        const result = await plantsCollection.deleteOne(query)
        res.send(result)
    })

    app.put("/plants/:_id", async(req, res)=>{
        const id = req.params._id;
        const query = {_id: new ObjectId(id)}
        const updatedPlant = req.body
        
        const updatedDoc = {
            $set: updatedPlant
        }
        const result = await plantsCollection.updateOne(query, updatedDoc)
        res.send(result)
    })

    app.get("/plants", async (req, res) => {
     
      const result = await plantsCollection.find().toArray();
      res.send(result);
    });





    app.get("/", (req, res) => {
      res.send("asdflkjasdlfjsadlkfjsaldfj");
    });

    app.listen(port, () => {
      console.log("app runnign on the port ", port);
    });

    

    await client.db(`${process.env.DBUSER}`).command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);
