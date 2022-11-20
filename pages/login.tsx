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
} from "@chakra-ui/react";
import * as icons from "react-icons/fi";

function login() {
  return (
    <Flex minH={"100vh"} align="center" justify={"center"} bg={"cyan.100"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your your account</Heading>
          <Text>And enjoy all of Qiwi features</Text>
        </Stack>
        <Box rounded={"lg"} bg={"white"} boxShadow={"lg"} p={8}>
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
              bg={"cyan.100"}
              color={"blackAlpha.700"}
              _hover={{ bg: "cyan.200", color: "blackAlpha.900" }}
            >
              Sign in
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default login;
