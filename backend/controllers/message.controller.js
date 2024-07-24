import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';
import { getReceiverSocketId, io } from '../socket/socket.js';
export const sendMessage=async(req,res)=>{
    try {
        const {message}=req.body;
        const {id:receiverId}=req.params;
        const senderId=req.user._id;

        let conversation=await Conversation.findOne({
            participants:{$all:[senderId,receiverId],}
        });
        if(!conversation){
            conversation=await Conversation.create({
                participants:[senderId,receiverId],
            });
        }

        const newMessage=new Message({
            senderId,
            receiverId,
            message,
        });

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([conversation.save(),newMessage.save()]);

        const receiverSocketId=getReceiverSocketId(receiverId);
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage",newMessage);
        }


        res.status(201).json(newMessage);
    } catch (error) {
        console.log("Error in sendMessage controller: ",error.message);
        res.status(500).json({error:"Internal server error"});
    }
}; 

export const getMessages=async(req,res)=>{
    try{
        const {id:userToChatId}=req.params;
        const senderId=req.user._id;

        const conversation=await Conversation.findOne({
            participants:{$all:[senderId,userToChatId]},
        }).populate("messages");
        
        if(!conversation) return res.status(200).json([]);

        const messages=conversation.messages;

        res.status(200).json(messages);
    }
    catch (error) {
        console.log("Error in sendMessage controller: ",error.message);
        res.status(500).json({error:"Internal server error"});
    }
}

export const deleteMessage=async(req,res)=>{
    try {
        const {message}=req.body;
        
        // const receiverId=message.receiverId;
        // const senderId=req.user._id;
        let receiverId;

        let del1=0;
        if(message.flag1)
            {
                del1=1;
            }

        let del2=0;
        if(message.flag2)
            {
                del2=1;
            }
        if (message.receiverId ==req.user._id) {
            del2=1;
            receiverId = message.senderId;
        } else {
            del1=1;
            receiverId = message.receiverId;
        }


        const updatedMessage = await Message.findOneAndUpdate(
            { _id: message._id },
            { $set: {  flag1: del1,flag2:del2} },
            { new: true } // To return the updated document
        );
       //let see later checks
       console.log(receiverId===req.user._id)
       console.log(receiverId===message.senderId)

       
       const receiverSocketId=getReceiverSocketId(receiverId);
       if(receiverSocketId){
           io.to(receiverSocketId).emit("delmessage",updatedMessage);
       }

          console.log(updatedMessage);
                res.status(201).json(updatedMessage);
        


        
    } catch (error) {
        
        console.log("Error in deleteMessage controller: ",error.message);
        res.status(500).json({error:"Internal server error"});
    }

}