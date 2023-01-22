const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/indianHeritages";

const connectTOMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connection Successfully.");
    })
}

module.exports = connectTOMongo;