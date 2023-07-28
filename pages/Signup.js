import { useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';
import { array } from "../constants/array";
import { string } from "../constants/string";
import { twodarray } from '../constants/twodarray';
import { searchandsort } from '../constants/searchandsort';
import { backtracking } from '../constants/backtracking';
import { linkedlist } from '../constants/linkedlist';
import { stackandqueue } from '../constants/stackandqueue';
import { greedy } from '../constants/greedy';
import { binarytree } from '../constants/binarytree';
import { binarysearchtree } from '../constants/binarysearchtree';
import { dp } from '../constants/dp';
import Head from 'next/head'
import { Flex, Box, Text, Input, InputGroup, InputRightElement, Button, rightIcon, Spinner } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import google from '../assets/google.png';
import github from '../assets/github.png';
import logo from '../assets/logo.png';
import Image from 'next/image';
import { signIn, signOut } from "next-auth/react";
import { getSession, useSession, usesSession } from "next-auth/react";
import { AuthHandler } from 'next-auth/core';
import { heapandhashing } from '../constants/heapandhashing';
import { graph } from '../constants/graph';
import { tries } from '../constants/tries';
import { bitmanipulation } from '../constants/bitmanipulation';
import { segmenttree } from '../constants/segmenttree';


const Signup = () => {
    const router = useRouter();
    const [error, setError] = useState('');
    const [googleLoad, setGoogleLoad] = useState(false);
    const { data: session, status } = useSession();
    useEffect(() => {
        if (status === 'authenticated') {
            console.log(session.user.name);
            handleSubmit(session.user.name, session.user.email, session.user.email);
        }
    }, [session, status, handleSubmit]);

    async function handleGoogleAuth() {
        console.log("clicked");
        signIn("google", { callbackUrl: "http://localhost:3000/Signup" });
    }

    async function handleSubmit(name, email, password) {
        try {
            
            const data = { name: name, email: email, password: password };
            console.log(data);
            let res = await fetch(`http://localhost:3000/api/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            let response = await res.json();
            if (response.success) {
                handleLogin(data);
            }
        } catch (error) {
            setError("Looks like your account already exist :p, try logging in");
        }
        
        
    }

    async function handleLogin({ email, password }) {
        const data = { email: email, password: password };
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
        console.log("authData", authData.data[0].id);
        const key = authData.data[0].id;
        if (key) {
            localStorage.setItem('key', key);
            handleLinkAd(key);
        }
    }

    async function handleLinkAd(key) {
        const data = { user: key, arrays: array, strings: string, twodarrays: twodarray, searchandsorts: searchandsort, backtrackings: backtracking, linkedlists: linkedlist, stackandqueues: stackandqueue, greedys: greedy, binarytrees: binarytree, binarysearchtrees: binarysearchtree, heapandhashings: heapandhashing, graphs: graph, tries: tries, dps: dp, bitmanipulations: bitmanipulation, segmenttrees: segmenttree };
        let res = await fetch(`http://localhost:3000/api/linkAdDb`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        let response = await res.json();
        if (response.success) {
            setGoogleLoad(false);
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
                    <Flex alignItems="center"><Image src={logo} style={{ filter: 'invert(1)', height: '2rem', width: '3rem', marginRight: '2rem' }} alt="logo"/><Text fontSize="1.5rem" fontWeight="700">DSA Prep</Text></Flex>
                    <Link href="/"><h1>Login</h1></Link>
                </Flex>
                <Flex justifyContent="center" alignItems="center" flexDirection="column">
                    <Text fontWeight={800} fontSize="2.5rem" my="0.75rem">Create Your Account</Text>
                    {error.length == 0 && <Text color="#8d8d8d" textAlign="center" w="50rem" fontSize="1rem">
                        Sign up and never miss the track of your DSA progress
                        </Text>}
                        {error.length != 0 && <Text color="#ff0000">{error}</Text>}
                </Flex>
                <Flex justifyContent="center" mt="5rem" mb="2rem">
                    <Flex flexDirection="column" w="25rem" justifyContent='center'>
                        <Box bg="linear-gradient(90deg, #715AE3 0%, #AC82C8 100%)" p="0.15rem" borderRadius="7px" h="55px" my="0.5rem">
                            <Button h="100%" w="100%" bg="brand.900" _hover={{ bg: "white", color: "black" }} onClick={handleGoogleAuth}>
                                {googleLoad && <Spinner />}
                                {!googleLoad && <Image src={google} style={{ height: '1.5rem', width: '1.5rem', margin: '1rem' }} alt="google logo"/>}
                                {!googleLoad && <Text>Sign up with Google</Text>}
                            </Button>
                        </Box>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}

export default Signup