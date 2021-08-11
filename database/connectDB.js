const mongoose=require('mongoose');
var dotenv = require('dotenv');
dotenv.config();
const URL=process.env.MONGO_URL;
const connectDB=async()=>{
    try{
        await mongoose.connect(
            URL,
            {
                useNewUrlParser:true,
                useUnifiedTopology:true,
                useCreateIndex:true
            }
        );
        console.log("Database Connected Successfully!!");
    }
    catch(err){
        console.log("Database Connected Successfully!!");
    }
};

module.exports=connectDB;

