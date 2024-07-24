import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
	const {messages,loading}=useGetMessages();
	useListenMessages();
	

	const lastMessageRef=useRef();
	useEffect(()=>{
		setTimeout(()=>{
			lastMessageRef.current?.scrollIntoView({behavior:"smooth"});
		},100);
	},[messages]);
	return (
		<div className='px-4 flex-1 overflow-auto'>
			{!loading && 
			messages.length>0 && messages.map((message)=>
			<div key={message._id} ref={lastMessageRef}>

            <Message message={message} />
			</div>
			)}


			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

			{!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
		</div>
	);
};
export default Messages;

// import { useEffect, useRef, useState } from "react";
// import useGetMessages from "../../hooks/useGetMessages";
// import MessageSkeleton from "../skeletons/MessageSkeleton";
// import Message from "./Message";
// import useListenMessages from "../../hooks/useListenMessages";

// const Messages = () => {
//   const { messages, loading } = useGetMessages();
//   useListenMessages();
//   const lastMessageRef = useRef();
//   const [activeMessageId, setActiveMessageId] = useState(null);

//   const handleShowEmojis = (messageId) => {
//     setActiveMessageId(messageId === activeMessageId ? null : messageId);
//   };

//   useEffect(() => {
//     setTimeout(() => {
//       lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
//     }, 100);
//   }, [messages]);

//   return (
//     <div className='px-4 flex-1 overflow-auto'>
//       {!loading &&
//         messages.length > 0 &&
//         messages.map((message) => (
//           <div key={message._id} ref={lastMessageRef}>
//             <Message
//               message={message}
//               isActive={message._id === activeMessageId}
//               onShowEmojis={() => handleShowEmojis(message._id)}
//             />
//           </div>
//         ))}

//       {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

//       {!loading && messages.length === 0 && (
//         <p className='text-center'>Send a message to start the conversation</p>
//       )}
//     </div>
//   );
// };

// export default Messages;
