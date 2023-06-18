import React, {useState, useEffect} from 'react';
import Navbar from '../../Components/Navbar';
import { Box, Heading, Text, Progress, Flex, Grid, GridItem, Button } from '@chakra-ui/react';
import { useRouter } from "next/router";
import Link from 'next/link';

const Sheet = ({sheet}) => {
    const router = useRouter();
    const { slug } = router.query;
    const sheetData = [
        {
            title: "Arrays",
            progress: 64,
        },
        {
            title: "LinkedList",
            progress: 0,
        },
        {
            title: "Hashing",
            progress: 0,
        },
        {
            title: "Queue",
            progress: 0,
        }
    ];
    console.log(sheet.AmanDhattarwals[0]);
    return (
        <Box bg="brand.900" color="white" fontFamily="body.1" minHeight="100vh">
            <Navbar slug={slug} />
            {slug && <Heading textAlign="center" fontWeight="400" mt="2rem">{slug.includes("Apna") ? "375 DSA Sheet" : ""}</Heading>}
            <Text textAlign="center" my="1.5rem">By Shradha Khapra and Aman Dhattarwal</Text>
            <Flex alignItems="center" justifyContent="center">
                <Progress hasStripe value={64} colorScheme='purple' width="80vw" />
                <Text color="purple.300" mx="0.5rem">64%</Text>
            </Flex>
                {sheet.AmanDhattarwals[0].Array}
            <Grid templateColumns='repeat(4, 1fr)' gap={6} mx="6rem" my="4rem">
                {sheetData.map((item, index)=>{
                    return(
                <GridItem bg="#222222" p="1.5rem 2rem" borderRadius="0.5rem" key={index}>
                    <Heading size="lg">{item.title}</Heading>
                    <Text>Progress {item.progress}%</Text>
                    <Link href={`/sheets/${slug}/${item.title}`}>
                        <Button mt="1.5rem" bg="#222222" color="#ffffff" border="1px solid #715AE3" _hover={{color: "#715AE3", backgroundColor: "#ffffff"}}>Start Solving...</Button>
                    </Link>
                </GridItem>
                    )
                })}
            </Grid>
        </Box>
    )
}

export async function getServerSideProps(context) {
    let url = "http://localhost:3000/api/"+context.query.slug;
    let data = await fetch(url);
    let parsedData = await data.json();
    return {
        props: { sheet: parsedData }, // will be passed to the page component as props
    };
}

export default Sheet