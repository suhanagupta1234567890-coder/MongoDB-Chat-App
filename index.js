const express = require("express");
const app =  express();
const mongoose = require("mongoose");
const path = require("path");
const chat = require("./models/chats.js");
const methodOverride = require("method-override");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatapp");
}

// index route
app.get("/chats", async (req, res) => {
    let chats = await chat.find();
    // console.log(chats);
    // res.send("working");
    res.render("index.ejs", { chats });
});

// New route
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
});

// create route

app.post("/chats", (req, res) => {
    let {from , to, msg} = req.body;
    let newChat = new chat({
        from:from,
        to:to,
        msg:msg,
        created_at: new Date(),   
    });
    newChat
        .save()
        .then(() => {
            console.log("chat was saved")
        })
        .catch((err) => {
            console.log(err)
        });  

    res.redirect("/chats");
});

// EDIT route
app.get("/chats/:id/edit",async(req,res) => {
    let {id} = req.params;
    let cha = await chat.findById(id);
    res.render("edit.ejs",{chat: cha});
});


// UPDATE route
app.put("/chats/:id", async (req, res) => {
    let {id} = req.params;
    let{ msg: newMsg} = req.body;
    let updatedchat = await chat.findByIdAndUpdate(id,{msg:newMsg,updated_at:new Date()},{runValidators:true,new:true});

    console.log(updatedchat);
    res.redirect("/chats");
});

// delete route
app.delete("/chats/:id", async (req,res) =>{
    let {id} = req.params;
    let Deletedchat = await chat.findByIdAndDelete(id);
    console.log(Deletedchat);
    res.redirect("/chats");
});

app.get("/",(req,res) => {
    res.send("root is working");
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});