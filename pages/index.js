import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Flex, Box, Text, Input, InputGroup, InputRightElement, Button, rightIcon, useToast, Spinner } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import Head from 'next/head';
import google from '../assets/google.png';
import github from '../assets/github.png';
import logo from '../assets/logo.png';
import Image from 'next/image';
import { signIn, signOut } from "next-auth/react";
import jwt_decode from "jwt-decode";
import { getSession, useSession, usesSession } from "next-auth/react";
import noPhone from '../assets/no-phone.png'

export default function Home() {
    const router = useRouter();
    const toast = useToast();
    const [error, setError] = useState('');
    const { data: session, status } = useSession();
    const [screenWidth, setScreenWidth] = useState(999999);
    const [mobile, setMobile] = useState(false);
    useEffect(() => {
        function handleResize() {
            setScreenWidth(window.innerWidth);
        }
        if (session) {
            handleSubmit(session.user.email, session.user.email);
        }
        // Initial values on component mount
        handleResize();

        // Attach an event listener to update dimensions on window resize
        window.addEventListener('resize', handleResize);

        if (screenWidth < 1024) {
            console.log(screenWidth);
            setMobile(true);
        }
        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, [session, status]);
    async function handleGoogleAuth() {
        console.log("clicked");
        signIn("google", { callbackUrl: "http://localhost:3000/" });
    }
    async function handleSubmit(email, password) {
        const data = { email: email, password: password };
        if (email.length && password.length) {
            let res = await fetch(`http://localhost:3000/api/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (res.ok) {
                let response = await res.json();
                console.log(response.token);
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
                localStorage.setItem('key', key);
                router.push('/Home');
            }
            else {
                setError("Your account doesn't exist, first sign up!");
            }
        }
    }
    return (
        <>
            {
                mobile && <Flex bg="brand.900" minH="100vh" color="white" fontFamily="body.1" flexDirection="column" justifyContent="center" alignItems="center" px="3rem">
                    <Image src={noPhone} alt="no phone image" style={{ height: '6rem', width: '6rem' }} />
                    <Text marginTop="1.5rem" marginBottom="0.5rem" textAlign="center">Currently DSA Prep is not available on mobile devices, switch to a device with bigger screen. </Text>
                    <Text fontSize="0.8rem" color="#6A6A6A" textAlign="center">Incase of any complaint drop a message <a href="https://www.google.com" target="_blank" style={{ textDecoration: 'underline', cursor: 'pointer' }}>Here</a>.</Text>
                </Flex>
            }
            {!mobile && <Box bg="brand.900" minH="100vh" color="white" fontFamily="body.1">
                <Flex justifyContent="space-between" px="4rem" py="2rem">
                    <Flex alignItems="center"><Image src={logo} style={{ filter: 'invert(1)', height: '2rem', width: '3rem', marginRight: '2rem' }} alt="logo"/><Text fontSize="1.5rem" fontWeight="700">DSA Prep</Text></Flex>
                    <Link href="/Signup"><h1>Sign up</h1></Link>
                </Flex>
                <Flex justifyContent="center" alignItems="center" flexDirection="column">
                    <Text fontWeight={800} fontSize="2.5rem" my="0.75rem">Login to Your Account</Text>
                    {!error.length && <Text color="#8d8d8d" textAlign="center" w="50rem" fontSize="1rem">Welcome Back Coder! Login to your account and resume your DSA progress</Text>}
                    {error.length > 0 && <Text color="#dc143c">{error + '!'}</Text>
                    }
                </Flex>
                <Flex justifyContent="center" mt="5rem" mb="2rem">
                    <Flex flexDirection="column" w="25rem" justifyContent="center">
                        <Box bg="linear-gradient(90deg, #715AE3 0%, #AC82C8 100%)" p="0.15rem" borderRadius="7px" h="55px" my="0.5rem"><Button h="100%" w="100%" bg="brand.900" _hover={{ bg: "white", color: "black" }} onClick={handleGoogleAuth}><Image src={google} style={{ height: '1.5rem', width: '1.5rem', marginRight: '1rem' }} alt="google logo"/>Log in with Google</Button></Box>
                    </Flex>
                </Flex>
                <Flex justifyContent="space-between" px="2rem" py="2rem" fontSize="0.75rem" color="#8d8d8d" position="fixed" bottom="0" left="0" w="100%">
                    <a href='https://github.com/Manish-XD/dsa-prep' target='_blank'>Github</a>
                    <Text>Copyright&copy;DSA prep 2023</Text>
                </Flex>
            </Box>}
        </>
    )
}
