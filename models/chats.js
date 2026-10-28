const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from:{
        type:String,
        required:true,
    },
    to:{
        type:String,
        required:true,
    },
    msg:{
        type:String,
        maxlength: 50,
    },
    created_at:{
        type:Date,
        required:true,
    },
    updated_at:{
        type:Date,
        default: Date.now,
    }
});

const chat = mongoose.model("chat",chatSchema);

module.exports = chat;