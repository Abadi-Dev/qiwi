import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Flex,
  Box,
  Stack,
  Heading,
  Text,
  Checkbox,
  Button,
  GridItem,
  Image,
  Show,
  Hide,
} from "@chakra-ui/react";

function login() {
  return (
    <Flex minH={"100vh"} align="center" justify={"center"} bg={"whiteAlpha.900"}>
      <Hide below="md">
        <GridItem minW={"40%"}>
          <Stack align={"center"}>
            <Box maxW={"60%"}>
              <Image src="/images/qiwiIphone.png" alt="iphone image"></Image>
            </Box>
          </Stack>
        </GridItem>
      </Hide>
      <GridItem minW={"60%"}>
        <Stack spacing={12} mx={"auto"} maxW={"lg"}>
          <Stack align={"start"}>
            <Text fontWeight={"500"}>LOGIN TO YOUR ACOUNT</Text>
            <Heading>AND START MANAGING YOUR RESTAURANT</Heading>
          </Stack>
          <Box
            width={"100%"}
            rounded={"md"}
            bg={"whiteAlpha.50"}
            boxShadow={"md"}
            p={6}
          >
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type={"email"}></Input>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type={"password"}></Input>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
              </Stack>
              <Button
                bg={"green.100"}
                color={"blackAlpha.800"}
                _hover={{ bg: "green.200", color: "blackAlpha.900" }}
                // type={"submit"}
              >
                Sign in
              </Button>
            </Stack>
          </Box>
        </Stack>
      </GridItem>
    </Flex>
  );
}

export default login;
