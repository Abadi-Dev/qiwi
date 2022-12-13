import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  InputGroup,
  InputLeftElement,
  Box,
  RadioGroup,
  Radio,
  VStack,
  Select,
  Divider,
  Textarea,
} from "@chakra-ui/react";
import ImageUpload from "./components/imageUpload";

import SideBar from "./components/SideBar";

//    logo,
//   import { SmallCloseIcon } from '@chakra-ui/icons';
function profile(): JSX.Element {
  return (
    <SideBar>
      <Stack
        // maxW={"6xl"}
        spacing={4}
        w={"100%"}
        bg={"white"}
        rounded={"md"}
        boxShadow="sm"
        p={4}
        my={2}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
          Restaurant Profile Edit
        </Heading>
        <HStack>
          <FormControl id="location">
            <FormLabel>Location</FormLabel>
            <Input
              placeholder="Paste the location from google maps here"
              _placeholder={{ color: "gray.500" }}
              type="text"
            />
          </FormControl>
          <FormControl id="email">
            <FormLabel>phone number</FormLabel>
            <Input
              placeholder="Phone number"
              _placeholder={{ color: "gray.500" }}
              type="number"
            ></Input>
          </FormControl>
        </HStack>
        <HStack alignItems={"flex-start"}>
          <Box w={"50%"}>
            <FormControl>
              <FormLabel>Restaurant Status</FormLabel>
              <RadioGroup defaultValue="2">
                <VStack
                  spacing={5}
                  direction="column"
                  alignItems={"flex-start"}
                >
                  <Radio colorScheme="red" value="1">
                    Closed
                  </Radio>
                  <Radio colorScheme="green" value="2">
                    Open
                  </Radio>
                  <Radio colorScheme="yellow" value="3">
                    Under Maintainance
                  </Radio>
                </VStack>
              </RadioGroup>
            </FormControl>
          </Box>
          <Box w={"50%"}>
            <FormControl>
              <FormLabel>Restaurant type of cuisine</FormLabel>
              <Select placeholder="Select option">
                <option value="option1">Italian</option>
                <option value="option2">Indian</option>
                <option value="option3">Middle Eastern</option>
              </Select>
            </FormControl>
          </Box>
        </HStack>
        <Stack>
          <FormControl>
            <FormLabel>Restaurant Description</FormLabel>
            <Textarea placeholder="Here is a sample placeholder" />
          </FormControl>
          <FormControl>
            <FormLabel>Upload Your Restaurant Pictures</FormLabel>
            <Box
              bg={"white"}
              rounded={"md"}
              boxShadow={"sm"}
              borderColor={"red.900"}
            >
              <FormControl>
                <ImageUpload></ImageUpload>
              </FormControl>
            </Box>
          </FormControl>
        </Stack>
      </Stack>
    </SideBar>
  );
}
export default profile;
{
  /* <Box bg={"white"} rounded={"xl"} boxShadow={"lg"} borderColor={"red.900"}>
  <FormControl>
    <ImageUpload></ImageUpload>
  </FormControl>
</Box> */
}

// FormControl id="userName">
//             <FormLabel>User Icon</FormLabel>
//             <Stack direction={['column', 'row']} spacing={6}>
//               <Center>
//                 {/* the profile picture */}
//                 <Avatar size="xl" src="">
//                   <AvatarBadge
//                     as={IconButton}
//                     size="sm"
//                     rounded="full"
//                     top="-10px"
//                     colorScheme="red"
//                     aria-label="remove Image"
//                     // icon={<SmallCloseIcon />}
//                   />
//                 </Avatar>
//               </Center>
//               <Center w="full">
//                 <Button w="full">Change Icon</Button>
//               </Center>
//             </Stack>
//           </FormControl>

{
  /* <Button
bg={"red.400"}
color={"white"}
w="full"
_hover={{
  bg: "red.500",
}}
>
Cancel
</Button>
<Button
bg={"green.400"}
color={"white"}
w="full"
_hover={{
  bg: "green.500",
}}
>
Submit
</Button> */
}
