import React from 'react';
import Head from 'next/head'
import { Flex, Box, Text, Input, InputGroup, InputRightElement, Button, rightIcon } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Signup = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const handleChange = (e) => {
        if (e.target.name === "email") {
          setEmail(e.target.value);
        } else if (e.target.name === "password") {
          setPassword(e.target.value);
        } else if(e.target.name == "name") {
          setName(e.target.value);
        }
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { email, password, name };
        let res = await fetch(`http://localhost:3000/api/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        let response = await res.json();
        console.log(response);
        setEmail('')
        setPassword('')
        setName('')
      };
      // async function handleCallBackResponse(response) {
      //   console.log(response.credential);
      // }
      // useEffect(() => {
      //   google.accounts.id.initialize({
      //       client_id:
      //           "265363981714-eqocmg5k3g1i27tvfk8237ur1ne0jc44.apps.googleusercontent.com/",
      //       callback: handleCallBackResponse,
      //   });

      //   google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      //     theme: "none",
      //       size: "none",
      //   });
      // }, [])
      
    return (
        <>
          <Head>
            <title>DSA Prep</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <script src="https://accounts.google.com/gsi/client" async defer></script>
          </Head>
          <Box bg="brand.900" h="100vh" color="white" fontFamily="body.1">
            <Flex justifyContent="space-between" px="4rem" py="2rem">
              <Text fontSize="1.5rem" fontWeight="700">&#9001;/&#9002;DSA Prep</Text>
              <Link href="/"><h1>Log in</h1></Link>
            </Flex>
            <Flex justifyContent="center" alignItems="center" flexDirection="column">
              <Text fontWeight={800} fontSize="2.5rem" my="0.75rem">Create Your Account</Text>
              <Text color="#8d8d8d" textAlign="center" w="50rem" fontSize="1rem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a felis sed dolor maximus euismod. In hac habitasse platea dictumst.</Text>
            </Flex>
            <Flex justifyContent="center" mt="5rem" mb="2rem">
              <Flex flexDirection="column" w="25rem">
                <form onSubmit={handleSubmit} method="POST">
                <Input placeholder='Name' variant='unstyled' py="1rem" px="1.5rem" bg="#222222" type="text" my="0.5rem" name='name' value={name} onChange={handleChange} required/>
                <Input placeholder='Email ID' variant='unstyled' py="1rem" px="1.5rem" bg="#222222" type="email" my="0.5rem" name='email' value={email} onChange={handleChange} required/>
                <InputGroup py="1rem" px="1.5rem" bg="#222222" my="0.5rem" borderRadius="5px" display="flex" alignItems="center"> 
                  <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Password'
                    variant='unstyled'
                    value={password}
                    onChange={handleChange}
                    name="password"
                    required
                  />
                  <InputRightElement width='4.5rem' h="100%">
                    <Button onClick={handleClick} _hover={{bg: "none"}} p="0" h="0" minW="0" bg="none">
                      {show ? <ViewOffIcon/> : <ViewIcon/>}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <Button rightIcon={<ArrowForwardIcon/>} bg="linear-gradient(90deg, #715AE3 0%, #AC82C8 100%)" _hover={{ bg: "linear-gradient(90deg, #AC82C8 0%, #715AE3 100%)" }} transition="all 0.5s ease-in-out" py="1rem" px="1.5rem" fontSize="1rem" justifyContent="space-between" h="55px" my="0.5rem" w="100%" type="submit">Sign up</Button>
                </form>
              </Flex>
              <Flex justifyContent="center" alignItems="center" px="8rem">
                <Text fontWeight="800">/</Text>
              </Flex>
              <Flex flexDirection="column" w="25rem">
                {/* <button id="signInDiv"></button> */}
                <Box href="/api/google" bg="linear-gradient(90deg, #715AE3 0%, #AC82C8 100%)" p="0.15rem" borderRadius="7px" h="55px" my="0.5rem"><Button h="100%" w="100%" bg="brand.900" _hover={{ bg: "white", color: "black" }} id="signInDiv">Sign in with Google</Button></Box>
                <Box bg="linear-gradient(90deg, #715AE3 0%, #AC82C8 100%)" p="0.15rem" borderRadius="7px" h="55px" my="0.5rem"><Button h="100%" w="100%" bg="brand.900" _hover={{ bg: "white", color: "black" }}>Sign in with Github</Button></Box>
                <Box bg="linear-gradient(90deg, #715AE3 0%, #AC82C8 100%)" p="0.15rem" borderRadius="7px" h="55px" my="0.5rem"><Button h="100%" w="100%" bg="brand.900" _hover={{ bg: "white", color: "black" }}>Sign in with Facebook</Button></Box>
              </Flex>
            </Flex>
            <Flex justifyContent="center">
              <Link href="/"><Text textDecoration="underline">Already have an account? <strong>Log in</strong></Text></Link>
            </Flex>
            <Flex justifyContent="space-between" px="2rem" py="2rem" fontSize="0.75rem" color="#8d8d8d" position="fixed" bottom="0" left="0" w="100%">
              <Text>Github</Text>
              <Text>Copyright&copy;DSA prep 2023</Text>
            </Flex>
    
          </Box>
        </>
      )
}

export default Signup