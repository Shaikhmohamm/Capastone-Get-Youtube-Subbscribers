const express = require('express');
const app = express()
const subscriberModel = require('./models/subscribers'); // Import your Mongoose model
const path = require('path')


// This is home page
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})


// GET request to get all the details
app.get('/subscribers', async (req, res) => {
    try {
      const subscribers = await subscriberModel.find(); // Fetch all subscribers from MongoDB
      res.status(200).json(subscribers); // Send the subscribers as JSON response
    } catch (err) {
      console.error("Error fetching subscribers:", err);
      res.status(500).send("Internal Server Error");
    }
  });

 // GET request for getting names and subscriberChannel

  app.get('/subscribers/names', async (req, res) => {
    try {
        const subscribers = await subscriberModel.find({},{ name: 1, subscribedChannel: 1, _id: 0 }); // Fetch only name and subscribedChannel fields
        res.status(200).json(subscribers); // Send the subscribers as JSON response
    } catch (err) {
        console.error("Error fetching subscribers:", err);
        res.status(500).send("Internal Server Error");
    }
})


// GET request to get the details with given ID
app.get("/subscribers/:id", async (req, res) => {
  try {
    const id = req.params.id; 
    if (!id) {
      res.status(400).json({ message: "No ID provided" }); 
      return;
    }
    const subscriber = await subscriberModel.findById(id); 
    if (!subscriber) {
      res.status(404).json({ message: "Subscriber not found" });
      return;
    }
    res.send(subscriber); 
  } catch (error) {
    res.status(400).json({ message: "Invali ID" }); 
  }
});



module.exports = app;
