import React from "react";
import { ChatState } from "../Context/ChatProvider";
import { Box, Text } from "@chakra-ui/layout";
import{ ArrowBackIcon} from "@chakra-ui/icons";
import {IconButton} from "@chakra-ui/button";
import {getSender, getSenderFull} from "../config/ChatLogics";
import ProfileModal from "./miscellaneous/ProfileModal";
import UpdateGroupChatModal from "./miscellaneous/UpdateGroupChatModal";


const SingleChat = ({fetchAgain, setFetchAgain}) => {
    const {user,selectedChat, setSelectedChat} = ChatState();

  return (
    <>
     {selectedChat ? (
        <>
        <Text 
             fontSize={{base: "20px" , md : "30px "}}
             pb={3}
             px={2}
             width="100%"
             fontFamily="Work sans"
             display="flex"
             justifyContent={{base : "space-between"}}
             alignItems="center">

                <IconButton
                d={{ base: "flex", md: "none" }}
                icon ={<ArrowBackIcon/>}
                onClick={() => setSelectedChat("")}/>

                {!selectedChat.isGroupChat ? (
                    <>
                    {getSender(user,selectedChat.users)}
                    <ProfileModal user= {getSenderFull(user,selectedChat.users)}/>
                    </>
                ):(
                    <>{selectedChat.chatName.toUpperCase()}
                    <UpdateGroupChatModal
                    fetchAgain={fetchAgain}
                    setFetchAgain={setFetchAgain}/>
                    </>
                )}
            
            </Text>
            <Box 
            d="flex"
            flexDir="column"
            justifyContent="flex-end"
            p={3}
            bg="#E8E8E8"
            w="100%"
            h="100%"
            borderRadius="lg"
            overflowY="hidden">
                {/* Message Here */}
            </Box>
            </>
     ) : ( 
        <Box display="flex" alignItems="center" justifyContent="center" height="100%">
            <Text fontSize='3xl' paddingBottom={3} fontFamily="Work sans">
                Click on a user to start chatting
            </Text>
        </Box>
     )}
    
    </>
  );
};
export default SingleChat;