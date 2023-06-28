import Head from 'next/head'
import { Flex, Box, Text, Input, InputGroup, InputRightElement, Button, rightIcon, useToast } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signIn, signOut } from "next-auth/react"
import { useFormik } from 'formik';
import { getSession, useSession, usesSession } from "next-auth/react"
export default function Home() {
        const toast = useToast();
        const [show, setShow] = useState(false);
        const handleClick = () => setShow(!show);
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const router = useRouter();
        const { data: session, status } = useSession();
        const handleSubmit = async () => {
                let data = {
                        email: session.user.email, password: session.user.email, name: session.user.name, monthProg: [
                                {
                                        month: "jan",
                                        probSolved: 0,
                                },
                                {
                                        month: "feb",
                                        probSolved: 0,
                                },
                                {
                                        month: "mar",
                                        probSolved: 0,
                                },
                                {
                                        month: "apr",
                                        probSolved: 0,
                                },
                                {
                                        month: "may",
                                        probSolved: 0,
                                },
                                {
                                        month: "jun",
                                        probSolved: 0,
                                },
                                {
                                        month: "jul",
                                        probSolved: 0,
                                },
                                {
                                        month: "aug",
                                        probSolved: 0,
                                },
                                {
                                        month: "sep",
                                        probSolved: 0,
                                },
                                {
                                        month: "oct",
                                        probSolved: 0,
                                },
                                {
                                        month: "nov",
                                        probSolved: 0,
                                },
                                {
                                        month: "dec",
                                        probSolved: 0,
                                },
                        ], sheetsSolved: [
                                {
                                        name: '450 DSA',
                                        progress: 5,
                                },
                                {
                                        name: '375 DSA',
                                        progress: 4,
                                },
                                {
                                        name: 'Striverz AtoZ',
                                        progress: 6,
                                },
                                {
                                        name: 'Lorem Ipsum',
                                        progress: 5,
                                },
                        ], quesLevel: [
                                {
                                        difficulty: 'Easy',
                                        solved: 3,
                                },
                                {
                                        difficulty: 'Medium',
                                        solved: 90,
                                },
                                {
                                        difficulty: 'Hard',
                                        solved: 20,
                                }
                        ], amanDhattarwal: { Arrays: [0,1,0,0,0] }
                };
                let res = await fetch(`http://localhost:3000/api/signup`, {
                        method: "POST",
                        headers: {
                                "Content-Type": "application/json",
                        },
                        body: JSON.stringify(data),
                });
                if (res.status === 200) {
                        toast({
                                title: `Successfully signed up`,
                                position: 'top-right',
                                isClosable: true,
                                status: 'success'
                        })
                        let data = { email: session.user.email, password: session.user.email };
                        let res = await fetch(`http://localhost:3000/api/login`, {
                                method: "POST",
                                headers: {
                                        "Content-Type": "application/json",
                                },
                                body: JSON.stringify(data),
                        });
                        let response = await res.json();
                        localStorage.setItem('token', response.token);
                        router.push('/Home');
                }
                else if (res.status === 500) {
                        toast({
                                title: `Account already exist`,
                                position: 'top-right',
                                isClosable: true,
                        })
                        let data = { email: session.user.email, password: session.user.email };
                        let res = await fetch(`http://localhost:3000/api/login`, {
                                method: "POST",
                                headers: {
                                        "Content-Type": "application/json",
                                },
                                body: JSON.stringify(data),
                        });
                        let response = await res.json();
                        localStorage.setItem('token', response.token);
                        router.push('/Home');
                }
                else {
                        console.log(res);
                }
        };
        useEffect(() => {
                console.log("status: " + status);
                if (status === 'authenticated') {
                        handleSubmit();
                }
        }, [status, session]);

        const formik = useFormik({
                initialValues: {
                        email: '',
                        password: ''
                }, onSubmit
        });
        async function onSubmit(values) {
                const status = await signIn('credentials', {
                        redirect: false,
                        username: values.email,
                        password: values.password,
                        // callbackUrl:"/home"
                })
                console.log(status);
                if (status.ok) {
                        router.push('Home')
                }
        }
        async function handleGoogleAuth() {
                signIn("google", { callbackUrl: "https://localhost:3000/home" })
        }

        async function handleGithubAuth() {
                signIn("github", { callbackUrl: "https://localhost:3000/home" })
        }
        async function handleFacebookAuth() {
                signIn("facebook")
        }

        // const handleChange = (e) => {
        //   if (e.target.name === "email") {
        //     setEmail(e.target.value);
        //   } else if (e.target.name === "password") {
        //     setPassword(e.target.value);
        //   }
        // };

        // const handleSubmit = async (e) => {
        //   e.preventDefault();
        //   const data = { email, password };
        //   let res = await fetch(`http://localhost:3000/api/login`, {
        //     method: "POST",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(data),
        //   });
        //   let response = await res.json();
        //   console.log(response.token);
        //   localStorage.setItem("key", response.token);
        //   setEmail("");
        //   setPassword("");
        //   router.push(`/Home`);
        // };


        return (
                <>
                        <Head>
                                <title>Create Next App</title>
                                <meta name="description" content="Generated by create next app" />
                                <meta name="viewport" content="width=device-width, initial-scale=1" />
                                <link rel="icon" href="/favicon.ico" />
                        </Head>
                        <Box bg="brand.900" minH="100vh" color="white" fontFamily="body.1">
                                <Flex justifyContent="space-between" px="4rem" py="2rem">
                                        <Text fontSize="1.5rem" fontWeight="700">&#9001;/&#9002;DSA Prep</Text>
                                        <Link href="/Signup"><h1>Sign up</h1></Link>
                                </Flex>
                                <Flex justifyContent="center" alignItems="center" flexDirection="column">
                                        <Text fontWeight={800} fontSize="2.5rem" my="0.75rem">Login to Your Account</Text>
                                        <Text color="#8d8d8d" textAlign="center" w="50rem" fontSize="1rem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a felis sed dolor maximus euismod. In hac habitasse platea dictumst.</Text>
                                </Flex>
                                <Flex justifyContent="center" mt="5rem" mb="2rem">
                                        <Flex flexDirection="column" w="25rem">
                                                <form >
                                                        <Input placeholder='Email ID' variant='unstyled' py="1rem" px="1.5rem" bg="#222222" type="email" my="0.5rem"
                                                                {...formik.getFieldProps("email")} name="email" />
                                                        <InputGroup py="1rem" px="1.5rem" bg="#222222" my="0.5rem" borderRadius="5px" display="flex" alignItems="center">
                                                                <Input
                                                                        pr='4.5rem'
                                                                        type={show ? 'text' : 'password'}
                                                                        placeholder='Password'
                                                                        variant='unstyled'
                                                                        {...formik.getFieldProps('password')}
                                                                        name="password"
                                                                />
                                                                <InputRightElement width='4.5rem' h="100%">
                                                                        <Button _hover={{ bg: "none" }} p="0" h="0" minW="0" bg="none">
                                                                                {show ? <ViewOffIcon /> : <ViewIcon />}
                                                                        </Button>
                                                                </InputRightElement>
                                                        </InputGroup>
                                                        <Button rightIcon={<ArrowForwardIcon />} bg="linear-gradient(90deg, #715AE3 0%, #AC82C8 100%)" _hover={{ bg: "linear-gradient(90deg, #AC82C8 0%, #715AE3 100%)" }} transition="all 0.5s ease-in-out" py="1rem" px="1.5rem" fontSize="1rem" justifyContent="space-between" h="55px" my="0.5rem" type="submit" w="100%" onClick={formik.handleSubmit}>Login to Your Account</Button>
                                                </form>
                                        </Flex>
                                        <Flex justifyContent="center" alignItems="center" px="8rem">
                                                <Text fontWeight="800">/</Text>
                                        </Flex>
                                        <Flex flexDirection="column" w="25rem">
                                                <Box bg="linear-gradient(90deg, #715AE3 0%, #AC82C8 100%)" p="0.15rem" borderRadius="7px" h="55px" my="0.5rem"><Button onClick={handleGoogleAuth} h="100%" w="100%" bg="brand.900" _hover={{ bg: "white", color: "black" }}>Sign in with Google</Button></Box>
                                                <Box bg="linear-gradient(90deg, #715AE3 0%, #AC82C8 100%)" p="0.15rem" borderRadius="7px" h="55px" my="0.5rem"><Button onClick={handleGithubAuth} h="100%" w="100%" bg="brand.900" _hover={{ bg: "white", color: "black" }}>Sign in with Github</Button></Box>
                                                <Box bg="linear-gradient(90deg, #715AE3 0%, #AC82C8 100%)" p="0.15rem" borderRadius="7px" h="55px" my="0.5rem"><Button onClick={handleFacebookAuth} h="100%" w="100%" bg="brand.900" _hover={{ bg: "white", color: "black" }}>Sign in with Facebook</Button></Box>
                                        </Flex>
                                </Flex>
                                <Flex justifyContent="center">
                                        <Link href="/"><Text textDecoration="underline">Forgot Password?</Text></Link>
                                </Flex>
                                <Flex justifyContent="space-between" px="2rem" py="2rem" fontSize="0.75rem" color="#8d8d8d" position="fixed" bottom="0" left="0" w="100%">
                                        <Text>Github</Text>
                                        <Text>Copyright&copy;DSA prep 2023</Text>
                                </Flex>

                        </Box>
                </>
        )
}

