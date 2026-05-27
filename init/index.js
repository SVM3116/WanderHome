const mongoose = require('mongoose');
const MONGO_URL="mongodb://127.0.0.1:27017/wanderhome";
const Listing=require("../models/listing.js");
const initData=require("./data.js");

main()
    .then(()=>{
        console.log("Database connection Successfull!!!");
    })
    .catch((err)=>{
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDb=async ()=>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    // let newData=await Listing.find();
    console.log("Data is initiated");
    // console.log(newData);
}

initDb();