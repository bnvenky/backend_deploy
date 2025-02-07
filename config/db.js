const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB connected`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB;
//mongodb+srv://smb:smb123@candidatetable.wewzvjo.mongodb.net/testdb?retryWrites=true&w=majority&appName=CandidateTable

