const mongoose = require("mongoose");

/**
     * Konek ke database mongodb
     * isikan kolom @param uri
*/
const connectDB = (uri) => {
    mongoose.connect(uri, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });

    //CEK STATUS DATABASE
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log(`Succefully Connected to database: ${uri}`);
    });
}

module.exports = {
    connectDB
}