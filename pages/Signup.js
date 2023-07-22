import { useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';
import { array } from "../constants/array";
import { string } from "../constants/string";
import Head from 'next/head'
import { Flex, Box, Text, Input, InputGroup, InputRightElement, Button, rightIcon } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import google from '../assets/google.png';
import github from '../assets/github.png';
import logo from '../assets/logo.png';
import Image from 'next/image';


const Signup = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    function handleChange(e) {
        if (e.target.name === "email") {
            setEmail(e.target.value);
        } else if (e.target.name === "password") {
            setPassword(e.target.value);
        } else if (e.target.name === "name") {
            setName(e.target.value);
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const data = { name, email, password };
        let res = await fetch(`http://localhost:3000/api/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        let response = await res.json();
        if (response.success) {
            handleLogin();
        }
    }

    async function handleLogin() {
        const data = { email, password };
        let res = await fetch(`http://localhost:3000/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        let response = await res.json();
        if (response.success) {
            handleAuth(response);
        }
    }

    async function handleAuth(response) {
        let auth = await fetch(`http://localhost:3000/api/auth`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Bearer": response.token
            }
        });
        let authData = await auth.json();
        console.log(authData.data[0].id);
        const key = authData.data[0].id;
        if (key) {
            localStorage.setItem('key', key);
            handleLinkAd(key);
        }
    }

    async function handleLinkAd(key) {
        const data = { user: key, arrays: array, strings: string };
        let res = await fetch(`http://localhost:3000/api/linkAdDb`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        let response = await res.json();
        if (response.success) {
            router.push('/Home');
        }
    }

    return (
        <>
            <Head>
                <title>Create Account</title>
            </Head>
            <Box bg="brand.900" h="100vh" color="white" fontFamily="body.1">
                <Flex justifyContent="space-between" px="4rem" py="2rem">
                    <Flex alignItems="center"><Image src={logo} style={{ filter: 'invert(1)', height: '2rem', width: '3rem', marginRight: '2rem' }} /><Text fontSize="1.5rem" fontWeight="700">DSA Prep</Text></Flex>
                    <Link href="/"><h1>Login</h1></Link>
                </Flex>
                <Flex justifyContent="center" alignItems="center" flexDirection="column">
                    <Text fontWeight={800} fontSize="2.5rem" my="0.75rem">Create Your Account</Text>
                    <Text color="#8d8d8d" textAlign="center" w="50rem" fontSize="1rem">Sign up and never miss the track of your DSA progress</Text>
                </Flex>
                <Flex justifyContent="center" mt="5rem" mb="2rem">
                    <Flex flexDirection="column" w="25rem">

                        <form onSubmit={handleSubmit}>
                            <Input placeholder='Name' variant='unstyled' py="1rem" px="1.5rem" bg="#222222" type="text" my="0.5rem" name='name' value={name} onChange={handleChange} required />
                            <Input placeholder='Email ID' variant='unstyled' py="1rem" px="1.5rem" bg="#222222" type="email" my="0.5rem" name='email' value={email} onChange={handleChange} required />
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
                                    <Button _hover={{ bg: "none" }} p="0" h="0" minW="0" bg="none" onClick={handleClick}>
                                        {show ? <ViewOffIcon /> : <ViewIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <Button rightIcon={<ArrowForwardIcon/>} bg="linear-gradient(90deg, #715AE3 0%, #AC82C8 100%)" _hover={{ bg: "linear-gradient(90deg, #AC82C8 0%, #715AE3 100%)" }} transition="all 0.5s ease-in-out" py="1rem" px="1.5rem" fontSize="1rem" justifyContent="space-between" h="55px" my="0.5rem" w="100%" type="submit">Sign up</Button>
                            {/* <input value={name} onChange={handleChange} name="name" />
                            <input value={email} onChange={handleChange} name="email" />
                            <input value={password} onChange={handleChange} name="password" />
                            <button type="submit">sign up</button> */}
                        </form>
                    </Flex>
                    <Flex justifyContent="center" alignItems="center" px="8rem">
                <Text fontWeight="800">/</Text>
              </Flex>
              <Flex flexDirection="column" w="25rem" justifyContent='center'>
                <Box bg="linear-gradient(90deg, #715AE3 0%, #AC82C8 100%)" p="0.15rem" borderRadius="7px" h="55px" my="0.5rem"><Button h="100%" w="100%" bg="brand.900" _hover={{ bg: "white", color: "black" }}><Image src={google} style={{height: '1.5rem', width: '1.5rem', marginRight: '1rem'}}/>Sign in with Google</Button></Box>
                <Box bg="linear-gradient(90deg, #715AE3 0%, #AC82C8 100%)" p="0.15rem" borderRadius="7px" h="55px" my="0.5rem"><Button h="100%" w="100%" bg="brand.900" _hover={{ bg: "white", color: "black" }}><Image src={github} style={{height: '1.5rem', width: '1.5rem', marginRight: '1rem'}}/>Sign in with Github</Button></Box>
              </Flex>
                </Flex>
            </Box>
        </>
    )
}

export default Signup