import React from 'react';
import { Card, Title, LineChart } from "@tremor/react";
import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

const Home = () => {
    const chartdata = [
        {
            month: "jan",
            "Monthly Problems Solved": 30,
        },
        {
            month: "feb",
            "Monthly Problems Solved": 44,
        },
        {
            month: "mar",
            "Monthly Problems Solved": 28,
        },
        {
            month: "apr",
            "Monthly Problems Solved": 17,
        },
        {
            month: "may",
            "Monthly Problems Solved": 21,
        },
        {
            month: "jun",
            "Monthly Problems Solved": 35,
        },
        {
            month: "jul",
            "Monthly Problems Solved": 38,
        },
        {
            month: "aug",
            "Monthly Problems Solved": 27,
        },
        {
            month: "sep",
            "Monthly Problems Solved": 15,
        },
        {
            month: "oct",
            "Monthly Problems Solved": 21,
        },
        {
            month: "nov",
            "Monthly Problems Solved": 29,
        },
        {
            month: "dec",
            "Monthly Problems Solved": 45,
        },
    ];
    return (
        <Box bg="brand.900" color="white" fontFamily="body.1" h="100vh">
            <Flex justifyContent="space-between" px="4rem" py="2rem" position="relative">
                <Text fontSize="1.5rem" fontWeight="700">&#9001;/&#9002;DSA Prep</Text>
                <Flex justifyContent="space-between" w="35rem" position="absolute" left="33%">
                    <Link href="/"><Text transition="all 0.3s ease-in-out" _hover={{fontWeight: "800", textDecoration: "underline"}}>Love Babbar</Text></Link>
                    <Link href="/"><Text transition="all 0.3s ease-in-out" _hover={{fontWeight: "800", textDecoration: "underline"}}>Apna College</Text></Link>
                    <Link href="/"><Text transition="all 0.3s ease-in-out" _hover={{fontWeight: "800", textDecoration: "underline"}}>Strivers</Text></Link>
                    <Link href="/"><Text transition="all 0.3s ease-in-out" _hover={{fontWeight: "800", textDecoration: "underline"}}>Lorem ipsum</Text></Link>
                </Flex>
                <h1>User</h1>
            </Flex>

            <Flex borderRadius="5px" bg="#222222" mx="8rem" px="2.5rem" py="1.5rem">
                <Box>User</Box>
                <Flex flexDirection="column" borderLeft="1px solid #8d8d8d">
                    <Box borderBottom="1px solid #8d8d8d" >
                        <Text>Welcome Back!</Text>
                        <Text>User</Text>
                    </Box>
                    <Flex>
                        <Box>
                            <Text>Total Problems Solved</Text>
                            <Text>47</Text>
                        </Box>
                        <Box></Box>
                    </Flex>
                </Flex>
            </Flex>
            <Card maxWidth="max-w-xs">
                <Title>Population growth rate (1951 to 2021)</Title>
                <LineChart
                    data={chartdata}
                    dataKey="month"
                    categories={["Monthly Problems Solved"]}
                    colors={["violet"]}
                    marginTop="mt-6"
                    yAxisWidth="w-10"
                />
            </Card>
        </Box>
    )
}

export default Home