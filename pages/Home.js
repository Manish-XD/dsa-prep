import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from 'next/link';
import Head from "next/head";
import { Box, Heading, Text, Progress, Flex, Grid, GridItem, Button } from '@chakra-ui/react';
import logo from '../assets/logo.png';
import Image from "next/image";
import { signOut } from "next-auth/react";
import { getSession, useSession, usesSession } from "next-auth/react"

const Home = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    useEffect(() => {
        if (localStorage.getItem('key')) {

        }
        else {
            router.push('/');
        }
    })
    function handleSignOut() {
        signOut();
        localStorage.removeItem('key');
        router.push('/');
    }
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <Box bg="brand.900" color="white" fontFamily="body.1" minHeight="100vh">
                <Flex justifyContent="space-between" px="4rem" py="2rem">
                    <Flex alignItems="center"><Image src={logo} style={{ filter: 'invert(1)', height: '2rem', width: '3rem', marginRight: '2rem' }} alt="logo"/><Text fontSize="1.5rem" fontWeight="700">DSA Prep</Text></Flex>
                    <Button onClick={handleSignOut} color="#715AE3" background="none" border="1px solid #715AE3" _hover={{ color: "#ff0000", background: '#ffffff', border: '1px solid #ff0000' }}>sign out</Button>
                </Flex>
                <Heading textAlign="center" fontWeight="400">375 DSA Sheet</Heading>
                <Text textAlign="center" my="1.5rem">By Shradha Khapra and Aman Dhattarwal</Text>
                <Grid templateColumns='repeat(4, 1fr)' gap={6} mx="6rem" py="4rem">
                    <GridItem bg="#222222" p="1.5rem 2rem" borderRadius="0.5rem">
                        <Heading fontSize="1.7rem">Arrays</Heading>
                        <Link href='/pages/arrays'>
                            <Button mt="1.5rem" bg="#222222" color="#ffffff" border="1px solid #715AE3" _hover={{ color: "#715AE3", backgroundColor: "#ffffff" }}>Start Solving...</Button>
                        </Link>
                    </GridItem>
                    <GridItem bg="#222222" p="1.5rem 2rem" borderRadius="0.5rem">
                        <Heading fontSize="1.7rem">Strings</Heading>
                        <Link href='/pages/strings'>
                            <Button mt="1.5rem" bg="#222222" color="#ffffff" border="1px solid #715AE3" _hover={{ color: "#715AE3", backgroundColor: "#ffffff" }}>Start Solving...</Button>
                        </Link>
                    </GridItem>
                    <GridItem bg="#222222" p="1.5rem 2rem" borderRadius="0.5rem">
                        <Heading fontSize="1.7rem">2D arrays</Heading>
                        <Link href='/pages/twodarrays'>
                            <Button mt="1.5rem" bg="#222222" color="#ffffff" border="1px solid #715AE3" _hover={{ color: "#715AE3", backgroundColor: "#ffffff" }}>Start Solving...</Button>
                        </Link>
                    </GridItem>
                    <GridItem bg="#222222" p="1.5rem 2rem" borderRadius="0.5rem">
                        <Heading fontSize="1.7rem">Searching &amp; Sorting</Heading>
                        <Link href='/pages/searchandsorts'>
                            <Button mt="1.5rem" bg="#222222" color="#ffffff" border="1px solid #715AE3" _hover={{ color: "#715AE3", backgroundColor: "#ffffff" }}>Start Solving...</Button>
                        </Link>
                    </GridItem>
                    <GridItem bg="#222222" p="1.5rem 2rem" borderRadius="0.5rem">
                        <Heading fontSize="1.7rem">Backtracking</Heading>
                        <Link href='/pages/backtrackings'>
                            <Button mt="1.5rem" bg="#222222" color="#ffffff" border="1px solid #715AE3" _hover={{ color: "#715AE3", backgroundColor: "#ffffff" }}>Start Solving...</Button>
                        </Link>
                    </GridItem>
                    <GridItem bg="#222222" p="1.5rem 2rem" borderRadius="0.5rem">
                        <Heading fontSize="1.7rem">Linked List</Heading>
                        <Link href='/pages/linkedlists'>
                            <Button mt="1.5rem" bg="#222222" color="#ffffff" border="1px solid #715AE3" _hover={{ color: "#715AE3", backgroundColor: "#ffffff" }}>Start Solving...</Button>
                        </Link>
                    </GridItem>
                    <GridItem bg="#222222" p="1.5rem 2rem" borderRadius="0.5rem">
                        <Heading fontSize="1.7rem">Stack &amp; Queues</Heading>
                        <Link href='/pages/stackandqueues'>
                            <Button mt="1.5rem" bg="#222222" color="#ffffff" border="1px solid #715AE3" _hover={{ color: "#715AE3", backgroundColor: "#ffffff" }}>Start Solving...</Button>
                        </Link>
                    </GridItem>
                    <GridItem bg="#222222" p="1.5rem 2rem" borderRadius="0.5rem">
                        <Heading fontSize="1.7rem">Greedy</Heading>
                        <Link href='/pages/greedys'>
                            <Button mt="1.5rem" bg="#222222" color="#ffffff" border="1px solid #715AE3" _hover={{ color: "#715AE3", backgroundColor: "#ffffff" }}>Start Solving...</Button>
                        </Link>
                    </GridItem>
                    <GridItem bg="#222222" p="1.5rem 2rem" borderRadius="0.5rem">
                        <Heading fontSize="1.7rem">Binary Tree</Heading>
                        <Link href='/pages/binarytrees'>
                            <Button mt="1.5rem" bg="#222222" color="#ffffff" border="1px solid #715AE3" _hover={{ color: "#715AE3", backgroundColor: "#ffffff" }}>Start Solving...</Button>
                        </Link>
                    </GridItem>
                    <GridItem bg="#222222" p="1.5rem 2rem" borderRadius="0.5rem">
                        <Heading fontSize="1.7rem">Binary Search Tree</Heading>
                        <Link href='/pages/binarysearchtrees'>
                            <Button mt="1.5rem" bg="#222222" color="#ffffff" border="1px solid #715AE3" _hover={{ color: "#715AE3", backgroundColor: "#ffffff" }}>Start Solving...</Button>
                        </Link>
                    </GridItem>
                    <GridItem bg="#222222" p="1.5rem 2rem" borderRadius="0.5rem">
                        <Heading fontSize="1.7rem">Heaps &amp; Hashing</Heading>
                        <Link href='/pages/heapandhashings'>
                            <Button mt="1.5rem" bg="#222222" color="#ffffff" border="1px solid #715AE3" _hover={{ color: "#715AE3", backgroundColor: "#ffffff" }}>Start Solving...</Button>
                        </Link>
                    </GridItem>
                    <GridItem bg="#222222" p="1.5rem 2rem" borderRadius="0.5rem">
                        <Heading fontSize="1.7rem">Graph</Heading>
                        <Link href='/pages/graphs'>
                            <Button mt="1.5rem" bg="#222222" color="#ffffff" border="1px solid #715AE3" _hover={{ color: "#715AE3", backgroundColor: "#ffffff" }}>Start Solving...</Button>
                        </Link>
                    </GridItem>
                    <GridItem bg="#222222" p="1.5rem 2rem" borderRadius="0.5rem">
                        <Heading fontSize="1.7rem">Tries</Heading>
                        <Link href='/pages/tries'>
                            <Button mt="1.5rem" bg="#222222" color="#ffffff" border="1px solid #715AE3" _hover={{ color: "#715AE3", backgroundColor: "#ffffff" }}>Start Solving...</Button>
                        </Link>
                    </GridItem>
                    <GridItem bg="#222222" p="1.5rem 2rem" borderRadius="0.5rem">
                        <Heading fontSize="1.7rem">DP</Heading>
                        <Link href='/pages/dps'>
                            <Button mt="1.5rem" bg="#222222" color="#ffffff" border="1px solid #715AE3" _hover={{ color: "#715AE3", backgroundColor: "#ffffff" }}>Start Solving...</Button>
                        </Link>
                    </GridItem>
                    <GridItem bg="#222222" p="1.5rem 2rem" borderRadius="0.5rem">
                        <Heading fontSize="1.7rem">Bit Manipulation</Heading>
                        <Link href='/pages/bitmanipulations'>
                            <Button mt="1.5rem" bg="#222222" color="#ffffff" border="1px solid #715AE3" _hover={{ color: "#715AE3", backgroundColor: "#ffffff" }}>Start Solving...</Button>
                        </Link>
                    </GridItem>
                    <GridItem bg="#222222" p="1.5rem 2rem" borderRadius="0.5rem">
                        <Heading fontSize="1.7rem">Segment Trees</Heading>
                        <Link href='/pages/segmenttrees'>
                            <Button mt="1.5rem" bg="#222222" color="#ffffff" border="1px solid #715AE3" _hover={{ color: "#715AE3", backgroundColor: "#ffffff" }}>Start Solving...</Button>
                        </Link>
                    </GridItem>
                </Grid>
                <Flex justifyContent="space-between" px="4rem" py="2rem" fontSize="0.75rem" color="#8d8d8d" w="100%">
                    <a href='https://github.com/Manish-XD/dsa-prep' target='_blank' rel="noreferrer">Github</a>
                    <Text>Copyright&copy;DSA prep 2023</Text>
                </Flex>
            </Box>
        </>
    )
}

export default Home