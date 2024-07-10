import { useDisclosure } from '@chakra-ui/hooks';
import {IconButton, Button} from "@chakra-ui/button";
import React, { useState } from 'react'
import { ViewIcon } from '@chakra-ui/icons';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useToast,
    Box,
    FormControl,
    Input
  } from '@chakra-ui/react'
import { ChatState } from '../../Context/ChatProvider';
import UserBadgeItem from "../UserAvatar/UserBadgeItem";

const UpdateGroupChatModal = ({fetchAgain, setFetchAgain}) => {

    const {isOpen, onOpen, onClose} = useDisclosure();
    const [groupChatName, setGroupChatName] = useState();
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [renameloading, setRenameloading]= useState(false);

    const toast = useToast();

    const {selectedChat , setSelectedChat , user} = ChatState();

    const handleRemove= ()=> {};
    const handleRename= ()=> {};
    return (
        <>
          <IconButton d={{base: "flex"}} icon={<ViewIcon />}  onClick={onOpen}/>
    
          <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader
               fontSize="20px"
               fontFamily="Work sans"
               display="flex"
               justifyContent="center">
                {selectedChat.chatName}
                </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
               <Box width="100%" display="flex" flexWrap="wrap" pb={3}> 
                {selectedChat.users.map(u => (

                   <UserBadgeItem
                    key={user._id}
                    user={u}
                    handleFunction={() => handleRemove(u)}
                  />  
                ))}
               </Box>
               <FormControl display="flex">
              <Input
                placeholder="Chat Name"
                mb={3}
                value={groupChatName}
                onChange={(e) => setGroupChatName(e.target.value)}
              />
              <Button
                variant="solid"
                colorScheme="teal"
                ml={1}
                isLoading={renameloading}
                onClick={handleRename}
              >
                Update
              </Button>
            </FormControl>
            {/* <FormControl>
              <Input
                placeholder="Add User to group"
                mb={1}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </FormControl> */}
              </ModalBody>
    
              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                  Close
                </Button>
              
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
    }


export default UpdateGroupChatModal