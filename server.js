require('dotenv').config()
const express = require('express');
const mongoKey = process.env.DB_KEY;
const optionRoutes = require('./routes/options');
const ritualRoutes = require('./routes/ritual');
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const cors = require('cors');
//uncomment below to seed mongo
// const InitData = require('./models/seedData/InitData')

// Server
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use('/ritual', ritualRoutes);
app.use('/options', optionRoutes);
// Connect to MongoDB
const uri = `mongodb+srv://brittanybartges:${mongoKey}@mernlist.zg7wekf.mongodb.net/RitualBuild?retryWrites=true&w=majority`;


mongoose.connect(uri)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});


// Define routes and middleware
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


