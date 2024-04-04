const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/gym_data";

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");
        const registrationCollection = mongoose.connection.db.collection("registrations");

        registrationCollection.find({}).toArray((err, data) => {
            if (err) {
                console.error("Error fetching data from 'registration' collection:", err);
            } else {
                console.log("Data fetched from 'registration' collection:", data);
            }
        });
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = mongoDB;
