const mongoose = require("mongoose");
const chat = require("./models/chats.js");

main()
    .then(() => {
      console.log("Connected successfully to MongoDB");
    })
    .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatapp");
};

let allchats = [
    {
        from: "neha",
        to: "preeti",
        msg: "send me notes for the exam",
        created_at: new Date(),
    },
    {
        from: "priya",
        to: "neha",
        msg: "I'm doing great! How about you?",
        created_at: new Date(),
    },
    {
        from:"rohit",
        to: "mohit",
        msg: " teach me js callback",
        created_at: new Date(),
    },
    {
        from: "amit",
        to: "sumit",
        msg: "all the best!",
        created_at: new Date(),
    },
    {
        from: "tony",
        to: "peter",
        msg: "love you 3000",
        created_at: new Date(),
    },
    {
        from: "anita",
        to: "ramesh",
        msg: "bring me some fruits",
        created_at: new Date(),
    },
];

chat.insertMany(allchats);