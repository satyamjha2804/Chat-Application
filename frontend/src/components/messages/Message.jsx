// // // import { useAuthContext } from "../../context/AuthContext";
// // // import { extractTime } from "../../utils/extractTime";
// // // import useConversation from "../../zustand/useConversation";

// // // const Message = ({ message }) => {
// // // 	const { authUser } = useAuthContext();
// // // 	const { selectedConversation } = useConversation();
// // // 	const fromMe = message.senderId === authUser._id;
// // // 	const formattedTime = extractTime(message.createdAt);
// // // 	const chatClassName = fromMe ? "chat-end" : "chat-start";
// // // 	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
// // // 	const bubbleBgColor = fromMe ? "bg-blue-500" : "";

// // // 	const shakeClass = message.shouldShake ? "shake" : "";

// // // 	return (
// // // 		<div className={`chat ${chatClassName}`}>
// // // 			<div className='chat-image avatar'>
// // // 				<div className='w-10 rounded-full'>
// // // 					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
// // // 				</div>
// // // 			</div>
// // // 			<div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
// // // 			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
// // // 		</div>
// // // 	);
// // // };
// // // export default Message;

// // import { useState } from 'react';
// // import { FiX } from 'react-icons/fi'; // Importing the FiX icon
// // import { useAuthContext } from '../../context/AuthContext';
// // import { extractTime } from '../../utils/extractTime';
// // import useConversation from '../../zustand/useConversation';

// // const Message = ({ message }) => {
// //   const { authUser } = useAuthContext();
// //   const { selectedConversation,setMessages,messages } = useConversation();
// //   const [showDeleteIcon, setShowDeleteIcon] = useState(false);
// //   const fromMe = message.senderId === authUser._id;
// //   const formattedTime = extractTime(message.createdAt);
// //   const chatClassName = fromMe ? 'chat-end' : 'chat-start';
// //   const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
// //   const bubbleBgColor = fromMe ? 'bg-blue-500' : '';
// //   const shakeClass = message.shouldShake ? 'shake' : '';
// // //will come back
// //   const handleDelete=async()=>{
// // 	   console.log(messages)
// // 	const res = await fetch(`/api/messages/update`, {
// // 		method: "PUT", // Change method to PUT
// // 		headers: {
// // 			"Content-Type": "application/json",
// // 		},
// // 		body: JSON.stringify({ message }), // Send the message object in the body
// // 	});
// // 	const data = await res.json();
// //     console.log(data);

// // 			setMessages(
// // 			messages.map((message) =>
// // 					message._id === data._id ? data : message
// // 				));
	  
	
	
// //   }
// //   return (
// //     <div
// //       className={`relative chat ${chatClassName}`}
// //       onMouseEnter={() => setShowDeleteIcon(true)}
// //       onMouseLeave={() => setShowDeleteIcon(false)}
// //     >
// //       <div className="chat-image avatar">
// //         <div className="w-10 rounded-full">
// //           <img alt="Profile Pic" src={profilePic} />
// //         </div>
// //       </div>
// //       <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2 relative`}>
// //         {message.message}
// //         {showDeleteIcon && (
// //           <button
// //             className="absolute top-1 right--0.5 transform -translate-y-1/2 bg-white rounded-full p-0.5"
// //             onClick={handleDelete}
// //           >
// //             <FiX className="text-red-600 w-3 h-3" />
// //           </button>
// //         )}
// //       </div>
// //       <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formattedTime}</div>
// //     </div>
// //   );
// // };

// // export default Message;


// import { useState } from 'react';
// import { FiX } from 'react-icons/fi'; // Importing the FiX icon
// import { useAuthContext } from '../../context/AuthContext';
// import { extractTime } from '../../utils/extractTime';
// import useConversation from '../../zustand/useConversation';

// const Message = ({ message }) => {
//   const { authUser } = useAuthContext();
//   const { selectedConversation, setMessages, messages } = useConversation();
//   const [showDeleteIcon, setShowDeleteIcon] = useState(false);
//   const fromMe = message.senderId === authUser._id;
//   const formattedTime = extractTime(message.createdAt);
//   const chatClassName = fromMe ? 'chat-end' : 'chat-start';
//   const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
//   const bubbleBgColor = fromMe ? 'bg-blue-500' : '';
//   const shakeClass = message.shouldShake ? 'shake' : '';

//   const handleDelete = async () => {
//     console.log(messages);
//     const res = await fetch(`/api/messages/update`, {
//       method: "PUT", // Change method to PUT
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ message }), // Send the message object in the body
//     });
//     const data = await res.json();
//     console.log(data);

//     setMessages(
//       messages.map((msg) =>
//         msg._id === data._id ? data : msg
//       )
//     );
//   };

//   return (
//     <div
//       className={`relative chat ${chatClassName}`}
//       onMouseEnter={() => setShowDeleteIcon(true)}
//       onMouseLeave={() => setShowDeleteIcon(false)}
//     >
//       <div className="chat-image avatar">
//         <div className="w-10 rounded-full">
//           <img alt="Profile Pic" src={profilePic} />
//         </div>
//       </div>
//       <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2 relative`}>
//         {message.message}
//         {showDeleteIcon && !message.deleted && (
//           <button
//             className="absolute top-1 right--0.5 transform -translate-y-1/2 bg-white rounded-full p-0.5"
//             onClick={handleDelete}
//           >
//             <FiX className="text-red-600 w-3 h-3" />
//           </button>
//         )}
//       </div>
//       <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formattedTime}</div>
//     </div>
//   );
// };

// export default Message;


import { useState } from 'react';
import { FiX } from 'react-icons/fi'; // Importing the FiX icon
import { useAuthContext } from '../../context/AuthContext';
import { extractTime } from '../../utils/extractTime';
import useConversation from '../../zustand/useConversation';
import { MdBlock } from "react-icons/md";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation, setMessages, messages } = useConversation();
  const [showDeleteIcon, setShowDeleteIcon] = useState(false);
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? 'bg-blue-500' : '';
  const shakeClass = message.shouldShake ? 'shake' : '';
      let a=0;
      if(authUser._id==message.senderId)
        {
          if(message.flag1)
            {
              a=1;
            }
            else{
            a=0;
            }
            console.log("i am sender",a);

        }
        else
        {
          if(message.flag1)
            {
              a=1;
            }
            else if(message.flag2)
              {
            a=1;
            }
            else
            {

              a=0;
            }
            
            console.log("i am receiver",a);
        }
        console.log(message.flag1,message.flag2)
        console.log(a);

  const handleDelete = async () => {

    const res = await fetch(`/api/messages/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({message}), // Mark the message as deleted
    });
    const data = await res.json();

    setMessages(
      messages.map((msg) =>
        msg._id === data._id ? data : msg
      )
    );
  };

  return (
    <div
      className={`relative chat ${chatClassName}`}
      onMouseEnter={() => setShowDeleteIcon(true)}
      onMouseLeave={() => setShowDeleteIcon(false)}
    >
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Profile Pic" src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2 relative`}>
        { a===1 ? (
          <span className="text-gray-500 italic flex items-center">
            <span className="material-icons-outlined"><MdBlock /></span>
            This message was deleted
          </span>
        ) : (
          <>
            {message.message}
            {showDeleteIcon  && (
              <button
                className="absolute top-1 right--0.5 transform -translate-y-1/2 bg-white rounded-full p-0.5"
                onClick={handleDelete}
              >
                <FiX className="text-red-600 w-3 h-3" />
              </button>
            )}
          </>
        )}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formattedTime}</div>
    </div>
  );
};

export default Message;


// import React, { useState } from 'react';
// import { FiX } from 'react-icons/fi'; // Importing the FiX icon
// import { MdBlock } from 'react-icons/md'; // Importing the MdBlock icon
// import { FaSmile, FaAngry, FaSadTear } from 'react-icons/fa'; // Importing emoji icons
// import { useAuthContext } from '../../context/AuthContext';
// import { extractTime } from '../../utils/extractTime';
// import useConversation from '../../zustand/useConversation';

// const Message = ({ message, isActive, onShowEmojis }) => {
//   const { authUser } = useAuthContext();
//   const { selectedConversation, setMessages, messages } = useConversation();
//   const [showDeleteIcon, setShowDeleteIcon] = useState(false);
//   const fromMe = message.senderId === authUser._id;
//   const formattedTime = extractTime(message.createdAt);
//   const chatClassName = fromMe ? 'chat-end' : 'chat-start';
//   const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
//   const bubbleBgColor = fromMe ? 'bg-blue-500' : '';
//   const shakeClass = message.shouldShake ? 'shake' : '';
//   let a = 0;

//   if (authUser._id === message.senderId) {
//     a = message.flag1 ? 1 : 0;
//     console.log("I am sender", a);
//   } else {
//     a = message.flag1 || message.flag2 ? 1 : 0;
//     console.log("I am receiver", a);
//   }

//   console.log(message.flag1, message.flag2);
//   console.log(a);

//   const handleDelete = async () => {
//     const res = await fetch(`/api/messages/update`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ message }), // Mark the message as deleted
//     });
//     const data = await res.json();

//     setMessages(
//       messages.map((msg) =>
//         msg._id === data._id ? data : msg
//       )
//     );
//   };

//   return (
//     <div
//       className={`relative chat ${chatClassName}`}
//       onMouseEnter={() => setShowDeleteIcon(true)}
//       onMouseLeave={() => setShowDeleteIcon(false)}
//       onClick={onShowEmojis}
//     >
//       <div className="chat-image avatar">
//         <div className="w-10 rounded-full">
//           <img alt="Profile Pic" src={profilePic} />
//         </div>
//       </div>
//       <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2 relative`}>
//         {a === 1 ? (
//           <span className="text-gray-500 italic flex items-center">
//             <MdBlock />
//             This message was deleted
//           </span>
//         ) : (
//           <>
//             {message.message}
//             {showDeleteIcon && (
//               <button
//                 className="absolute top-1 right--0.5 transform -translate-y-1/2 bg-white rounded-full p-0.5"
//                 onClick={handleDelete}
//               >
//                 <FiX className="text-red-600 w-3 h-3" />
//               </button>
//             )}
//           </>
//         )}
//       </div>
//       <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formattedTime}</div>
//       {isActive && (
//         <div className="absolute bottom-0 left-0 mt-2 p-2 bg-white rounded-lg shadow-lg flex gap-2">
//           <FaSmile className="text-yellow-500 cursor-pointer" />
//           <FaAngry className="text-red-500 cursor-pointer" />
//           <FaSadTear className="text-blue-500 cursor-pointer" />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Message;
