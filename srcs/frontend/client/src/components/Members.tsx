



// const Members = () => {
//     return (
//         <div>
//             {boardCard ? (
//             <HStack justify="space-between" px={2} py={3}>
//               <HStack spacing={2} px={4} py={2}>
//                 {card.members &&
//                   card.members.map((member, index) => {
//                     if (index < 2) {
//                       return (
//                         <Avatar
//                           size="xs"
//                           borderRadius="lg"
//                           name={member}
//                           src={member}
//                         />
//                       );
//                     }
//                   })}
//                 <Button variant='primary'>
//                   <BiPlus />
//                 </Button>
//               </HStack>
//               <HStack>
//                 <CardInfo
//                   value={card.commentCount ? card.commentCount + "" : "0"}
//                   icon={<MdComment />}
//                 />
//                 <CardInfo
//                   value={card.attachmentCount ? card.attachmentCount + "" : "0"}
//                   icon={<BsPaperclip />}
//                 />
//               </HStack>
//             </HStack>
//           ) : (
//             <HStack spacing={2} px={4} py={2}>
//               {card.members &&
//                 card.members.map((member) => {
//                   return (
//                     <Avatar
//                       size="sm"
//                       borderRadius="lg"
//                       name={member}
//                       src="https://bit.ly/dan-abramov"
//                     />
//                   );
//                 })}
//             </HStack>
//           )}
//         </div>
//     )
// }