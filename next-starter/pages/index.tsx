import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Image,
  HStack,
  VStack,
  Center,
  Text,
  FormControl,
  Input,
  Stack,
  Link,
  Box,
  Divider,
  Icon,
  ScrollView,
} from "native-base";
import { AntDesign, EvilIcons } from "@expo/vector-icons";

export default function SignUp() {
  const [count, setCount] = useState(false);
  return (
    <>
      <Box
        safeAreaTop
        _dark={{ bg: "coolGray.900" }}
        _light={{ bg: "primary.900" }}
      />
      <VStack
        flex={1}
        _dark={{ bg: "coolGray.900" }}
        _light={{ bg: "primary.900" }}
      >
        <VStack
          _dark={{ bg: "coolGray.900" }}
          _light={{ bg: "primary.900" }}
          h={40}
          pl={7}
        >
          <Icon
            mt={4}
            size={7}
            color="white"
            as={AntDesign}
            name={"arrowleft"}
          />
          <Text color="white" fontSize="2xl" mt={7}>
            Sign up
          </Text>
        </VStack>
        <Box
          borderTopRightRadius={12}
          borderTopLeftRadius={12}
          px={30}
          _dark={{ bg: "coolGray.800" }}
          _light={{ bg: "white" }}
          flex={1}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <VStack alignItems="flex-start" mt={36}>
              <Text
                fontSize="2xl"
                fontWeight="bold"
                _dark={{ color: "coolGray.50" }}
                _light={{ color: "coolGray.800" }}
              >
                Welcome
              </Text>
              <Text
                fontSize="sm"
                pt={2}
                _dark={{ color: "coolGray.200" }}
                _light={{ color: "coolGray.400" }}
              >
                Fill in the form to create an account !
              </Text>
            </VStack>
            <VStack
              mt={35}
              space={4}
              alignContent="center"
              justifyContent="center"
            >
              <FormControl isRequired>
                <Stack>
                  <Input
                    pl={3}
                    placeholder="Email ID"
                    onFocus={() => setCount(true)}
                  />
                </Stack>
              </FormControl>
              <FormControl isRequired>
                <Stack>
                  <Input
                    pl={3}
                    placeholder="Password"
                    onFocus={() => setCount(true)}
                  />
                </Stack>
              </FormControl>
              <FormControl isRequired>
                <Stack>
                  <Input
                    pl={3}
                    placeholder="Confirm Password"
                    onFocus={() => setCount(true)}
                  />
                </Stack>
              </FormControl>
            </VStack>
            <VStack mt={3}>
              <HStack alignItems="center" space={2}>
                <Checkbox value="test" />
                <Text
                  fontSize="xs"
                  _dark={{ color: "coolGray.200" }}
                  _light={{ color: "coolGray.400" }}
                >
                  I accept the
                </Text>
                <Link
                  _dark={{
                    _text: {
                      color: "coolGray.50",
                      fontSize: "xs",
                    },
                  }}
                  _light={{
                    _text: {
                      color: "primary.600",
                      fontSize: "xs",
                    },
                  }}
                >
                  Terms of Use
                </Link>
                <Text fontSize="sm">&</Text>
                <Link
                  _dark={{
                    _text: {
                      color: "coolGray.50",
                      fontSize: "xs",
                    },
                  }}
                  _light={{
                    _text: {
                      color: "primary.600",
                      fontSize: "xs",
                    },
                  }}
                >
                  Privacy Policy
                </Link>
              </HStack>
              <Center mt={12}>
                <Divider position="absolute"></Divider>
                <Text
                  px={5}
                  fontWeight="thin"
                  _dark={{ color: "coolGray.200", bg: "coolGray.800" }}
                  _light={{ color: "coolGray.400", bg: "white" }}
                >
                  or
                </Text>
              </Center>
              <VStack my={6} justifyContent="center" alignItems="center">
                <HStack space={6} justifyContent="center" alignItems="center">
                  <Center
                    rounded="full"
                    _dark={{}}
                    _light={{}}
                    bg="#4167B2"
                    borderColor="indigo.900"
                    p={0}
                  >
                    <Icon
                      size={9}
                      color="white"
                      as={EvilIcons}
                      name={"sc-facebook"}
                    />
                  </Center>

                  <Image
                    size={7}
                    resizeMode={"contain"}
                    source={{
                      uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png",
                    }}
                    alt="Google Logo"
                  />
                </HStack>
              </VStack>
            </VStack>
            <VStack mt={30}>
              <HStack>
                <Button
                  borderRadius={4}
                  width="100%"
                  size="lg"
                  px={20}
                  py={4}
                  isDisabled={count === true ? false : true}
                  _dark={{ bg: "primary.900" }}
                  _light={{ bg: "primary.900" }}
                  onPress={() => console.log("hello world")}
                  _text={{ fontSize: "lg", color: "white" }}
                >
                  Sign Up
                </Button>
              </HStack>
            </VStack>
            <VStack mt={10} mx={30} pl={5} justifyContent="center">
              <HStack alignItems="center" space={1}>
                <Text
                  fontSize="sm"
                  _dark={{ color: "coolGray.200" }}
                  _light={{ color: "coolGray.400" }}
                >
                  Already have an account ?
                </Text>
                <Link
                  _dark={{
                    _text: {
                      color: "coolGray.50",
                      fontSize: "md",
                    },
                  }}
                  _light={{
                    _text: {
                      color: "primary.600",
                      fontSize: "md",
                    },
                  }}
                >
                  Sign in
                </Link>
              </HStack>
            </VStack>
          </ScrollView>
        </Box>
      </VStack>
    </>
  );
}
