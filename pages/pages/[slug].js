import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";
import { Box, Heading, Progress, Flex, Text, Checkbox, Grid, GridItem, Button, useToast } from '@chakra-ui/react';
import logo from '../../assets/logo.png';
import back from '../../assets/back.png';
import Image from "next/image";
import Link from "next/link";

const Sheet = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [data, setData] = useState();
    const [abc, setAbc] = useState(null);
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const key = localStorage.getItem('key');
        setAbc(key);
        if (key) {
            getUserQuestions(key);
        }
        else {
            router.push('/');
        }
        if (data) {
            const temp = data.filter((ele) => ele.status === 1);
            setProgress(temp.length);
        }
    }, [data, router, getUserQuestions])
    async function getUserQuestions(token) {
        try {
            let res = await fetch('https://dsa-prep.vercel.app/api/getAdQues', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userId: token })
            });
            if (res.ok) {
                const response = await res.json();
                console.log(response);
                console.log(eval(`response.data.${slug}`));
                if (!eval(`response.data.${slug}`)) {
                    router.push('/');
                }
                setData(eval(`response.data.${slug}`));
            }
        } catch (error) {
            console.log(error);
        }
    }
    async function handleStatus(id) {
        console.log(id, abc);
        try {
            let res = await fetch('https://dsa-prep.vercel.app/api/update' + slug, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userId: abc, ItemId: id })
            })
            if (res.status) {
                const response = await res.json();
                console.log(response);
                setData(eval(`response.data.${slug}`));
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <Head>
                <title>{slug}</title>
            </Head>
            <Box bg="brand.900" color="white" fontFamily="body.1" px="8rem" pt="2rem" minH="100vh">
            <Flex justifyContent="space-between" py="2rem" marginBottom="3rem">
                <Link href="/Home">
            <Flex alignItems="center"><Image src={back} style={{ filter: 'invert(1)', height: '2rem', width: '2rem', marginRight: '0.5rem' }} alt="back button"/><Text fontSize="1.5rem" fontWeight="700">Back</Text></Flex></Link>
                    <Flex alignItems="center"><Image src={logo} style={{ filter: 'invert(1)', height: '2rem', width: '3rem', marginRight: '2rem' }} alt="logo"/><Text fontSize="1.5rem" fontWeight="700">DSA Prep</Text></Flex>
                </Flex>
                <Heading>{slug}</Heading>
                {data && <Flex alignItems="center" justifyContent="center">
                    <Progress hasStripe value={parseInt((progress/data.length)*100)} colorScheme='purple' width="80vw" />
                    <Text color="purple.300" mx="0.5rem">{parseInt((progress/data.length)*100)}%</Text>
                </Flex>}
                <Flex justifyContent="space-evenly" my="3rem" fontWeight="600" fontSize="1.25rem">
                    <Box width="5%">
                        <Text>S No.</Text>
                    </Box>
                    <Box>
                    </Box>
                    <Box>
                        <Text>Questions</Text>
                    </Box>
                    <Box width="20%">
                    </Box>
                </Flex>
                <Flex flexDirection="column">
                    {data && data.map((ques) => {
                        return (
                            <Grid templateColumns='repeat(3, 1fr)' gap={6} key={ques.id} my="1.5rem">
                                <GridItem display="flex" >
                                    {ques.status === 1 && <Checkbox colorScheme='green' onChange={handleStatus.bind(this, ques.id)} defaultChecked />}
                                    {!ques.status && <Checkbox colorScheme='green' onChange={handleStatus.bind(this, ques.id)} />}
                                    <Text ml="10rem">{ques.id}</Text>
                                </GridItem>
                                <GridItem>
                                    <a target='_blank' href={ques.link} rel="noreferrer"><Text textAlign="center">{ques.title}</Text></a>
                                </GridItem>
                                <GridItem>
                                    <Text textAlign="center" color={ques.level == 'Easy' ? 'green.300' : ques.level == 'Medium' ? 'orange.300' : 'red.400'}>{ques.level}</Text>
                                </GridItem>
                            </Grid>
                        )
                    })}
                </Flex>
            </Box>
        </>
    )
}

export default Sheet