const mongoose=require("mongoose");


const connectDb=async ()=>{
    mongoose.connect("mongodb+srv://akshayrp:root@cluster.ar9cvdc.mongodb.net/").then(()=>{
        console.log("DataBase Connected...");
    })
}

module.exports=connectDb;