import mongoose from "mongoose";

const messageSchema=new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    message:{
        type:String,
        required:true,
    },
    flag1:{
        type:Boolean,
        default: false,
    },
    flag2:{
        type:Boolean,
        default: false,
    }
},
    {timestamps:true}
);

const Message=mongoose.model("Message",messageSchema);
export default Message;