import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext"
import useConversation from "../zustand/useConversation";
import notificationSound from "../assets/sounds/notification.mp3";
const useListenMessages = () => {
  const {socket}=useSocketContext();
  const {messages,setMessages}=useConversation();

  useEffect(()=>{
    socket?.on("newMessage",(newMessage)=>{
        newMessage.shouldShake=true;
        const sound=new Audio(notificationSound);
        sound.play();
        setMessages([...messages,newMessage]);
    });
    socket?.on("delmessage",(updatedmessage)=>{
        console.log("pahuch gaye")
      setMessages(
        messages.map((message) =>
            message._id === updatedmessage._id ? updatedmessage : message
          ));
           
    })
 
  return ()=>socket?.off("newMessage");
},[socket,setMessages,messages]);
}

export default useListenMessages