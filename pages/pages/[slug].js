import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";
import { Box, Heading, Progress, Flex, Text, Checkbox, Grid, GridItem, Button, useToast } from '@chakra-ui/react';

const Sheet = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [data, setData] = useState();
    const [abc, setAbc] = useState(null);
    useEffect(() => {
        const key = localStorage.getItem('key');
        setAbc(key);
        if (key) {
            getUserQuestions(key);
        }
        else {
            router.push('/');
        }
    }, [])
    async function getUserQuestions(token) {
        try {
            let res = await fetch('http://localhost:3000/api/getAdQues', {
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
            let res = await fetch('http://localhost:3000/api/update' + slug, {
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
            <Box bg="brand.900" color="white" fontFamily="body.1" px="8rem" pt="4rem">
                <Heading>{slug}</Heading>
                <Flex alignItems="center" justifyContent="center">
                    <Progress hasStripe value={64} colorScheme='purple' width="80vw" />
                    <Text color="purple.300" mx="0.5rem">64%</Text>
                </Flex>
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
                                    <Checkbox colorScheme='green' onChange={handleStatus.bind(this, ques.id)} />
                                    <Text ml="10rem">{ques.id}</Text>
                                </GridItem>
                                <GridItem>
                                    <a target='_blank' href={ques.link}><Text textAlign="center">{ques.title}</Text></a>
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