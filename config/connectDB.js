const mongoose = require('mongoose');
const colors = require('colors');

const uri = "mongodb+srv://thanushan:thanushan@e-smart.wl1g3bh.mongodb.net/?retryWrites=true&w=majority"

const connectDB = async () =>{
    try{
        await mongoose.connect(uri);        
        console.log(`Server Running On ${mongoose.connection.host}`.bgCyan.white);
    }catch (error){
        console.log(`${error}`.bgRed);  
    }
}

module.exports = connectDB