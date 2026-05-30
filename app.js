const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const MONGO_URL="mongodb://127.0.0.1:27017/wanderhome";
const Listing=require("./models/listing.js");
const path=require("path");
const methodOverride = require('method-override');
const ejsMate=require("ejs-mate");

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

// app.get("/testListing",async (req,res)=>{
//     let sampleListing=new Listing({
//         title:"My new Villa",
//         description: "By the beach",
//         price:1200,
//         location:"Om Beach, Gokarna",
//         country: "India"
//     }); 

//     await sampleListing.save();
//     console.log("Sample was saved");
//     res.send("Saved Successfully");    
// });

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.urlencoded({extended : true})); 
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

app.get('/', (req, res) =>{
    res.send('Hello World!');
});

//INDEX ROUTE
app.get("/listings",async (req,res)=>{
    const allListings=await Listing.find();
    // console.log(allListings);
    res.render("listing/index.ejs",{allListings});
});

//NEW ROUTE
app.get("/listings/new",(req,res)=>{
    res.render("listing/new.ejs");
});

//CREATE ROUTE
app.post("/listings",async(req,res)=>{
    let newlisting=req.body.listing;
    await Listing.insertOne(newlisting);
    res.redirect("/listings");
});

//SHOW ROUTE
app.get("/listings/:id",async (req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    res.render("listing/show.ejs",{listing});
});

//EDIT ROUTE
app.get("/listings/:id/edit",async (req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    // console.log(listing);
    res.render("listing/edit.ejs",{listing});
});

app.delete("/listings/:id", async(req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
})
//UPDATE ROUTE
app.put("/listings/:id",async(req,res)=>{
    let {id}=req.params;
    let updateListing={...req.body.listing};
    await Listing.findByIdAndUpdate(id,updateListing);
    res.redirect(`/listings/${id}`);
});


app.get("/listings/new",(req,res)=>{
    res.render("listing/new.ejs");
});

app.listen(port, () =>{
    console.log(`Server is  listening on port ${port}!`);
});