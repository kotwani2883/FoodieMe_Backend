const express=require('express');
const mongoose=require('mongoose');
const app=express();

app.get("/",(req,res)=>{
    res.send("Hello from root api end point!!");
})

app.listen(5000,()=>{
 console.log("Server is up and Running")
})
