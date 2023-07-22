import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from 'next/link';
import Head from "next/head";
import { Box, Heading, Text, Progress, Flex, Grid, GridItem, Button } from '@chakra-ui/react';

const Home = () => {
    // const router = useRouter();
    // const [data, setData] = useState();
    // const [abc, setAbc] = useState(null);
    // useEffect(() => {
    //     const key = localStorage.getItem('key');
    //     setAbc(key);
    //     if (key) {
    //         getUserQuestions(key);
    //     }
    //     else
    //     {
    //         router.push('/');
    //     }
    // }, [])
    // async function getUserQuestions (token)
    // {
    //     try {
    //         let res = await fetch('http://localhost:3000/api/getAdQues', {
    //             method: 'POST',
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({userId: token})
    //         });
    //         if(res.status)
    //         {
    //             const response = await res.json();
    //             console.log(response.data.arrays);
    //             setData(response.data.arrays);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // async function handleStatus(id)
    // {
    //     console.log(id, abc);
    //     try {
    //         let res = await fetch('http://localhost:3000/api/updatearrays', {
    //             method: 'POST',
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({userId: abc, ItemId: id})
    //         })
    //         if(res.status)
    //         {
    //             const response = await res.json();
    //             console.log(response);
    //             setData(response.data.arrays);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <Box bg="brand.900" color="white" fontFamily="body.1" minHeight="100vh">
                <Heading textAlign="center" fontWeight="400">375 DSA Sheet</Heading>
                <Text textAlign="center" my="1.5rem">By Shradha Khapra and Aman Dhattarwal</Text>
                <Flex alignItems="center" justifyContent="center">
                    <Progress hasStripe value={64} colorScheme='purple' width="80vw" />
                    <Text color="purple.300" mx="0.5rem">64%</Text>
                </Flex>
                <Grid templateColumns='repeat(4, 1fr)' gap={6} mx="6rem" my="4rem">
                    <GridItem bg="#222222" p="1.5rem 2rem" borderRadius="0.5rem">
                        <Heading>Arrays</Heading>
                        <Link href='/pages/arrays'>
                            <Button mt="1.5rem" bg="#222222" color="#ffffff" border="1px solid #715AE3" _hover={{ color: "#715AE3", backgroundColor: "#ffffff" }}>Start Solving...</Button>
                        </Link>
                    </GridItem>
                    <GridItem bg="#222222" p="1.5rem 2rem" borderRadius="0.5rem">
                        <Heading>Strings</Heading>
                        <Link href='/pages/strings'>
                            <Button mt="1.5rem" bg="#222222" color="#ffffff" border="1px solid #715AE3" _hover={{ color: "#715AE3", backgroundColor: "#ffffff" }}>Start Solving...</Button>
                        </Link>
                    </GridItem>
                </Grid>
            </Box>
            <Link href='/pages/arrays'>Arrays</Link>
            <Link href='/pages/strings'>Strings</Link>
        </>
    )
}

export default Home