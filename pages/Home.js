import React from 'react';
import { Card, Title, LineChart, DonutChart } from "@tremor/react";
import { Box, Flex, Text, Avatar } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons'
import Link from 'next/link';
import Navbar from '../Components/Navbar';

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
    const cities = [
        {
            name: 'New York',
            sales: 9800,
        },
        {
            name: 'London',
            sales: 4567,
        },
        {
            name: 'Hong Kong',
            sales: 3908,
        },
        {
            name: 'San Francisco',
            sales: 2400,
        },
        {
            name: 'Singapore',
            sales: 1908,
        },
        {
            name: 'Zurich',
            sales: 1398,
        },
    ];

    return (
        <Box bg="brand.900" color="white" fontFamily="body.1">
            <Navbar slug={false}/>
            <Flex borderRadius="5px" bg="#222222" mx="8rem" px="2.5rem" py="1.5rem" alignItems="center">
                <Box mr="2rem"><Avatar size="xl" bg='purple.500' /></Box>
                <Flex flexDirection="column" borderLeft="1px solid #8d8d8d">
                    <Box borderBottom="1px solid #8d8d8d" p="1rem" mx="0.25rem">
                        <Text color="#8d8d8d" fontSize="0.75rem">Welcome Back!</Text>
                        <Text fontWeight="600" fontSize="1.75rem">Abhilash Jena</Text>
                    </Box>
                    <Flex alignItems="center" mx="1rem" mt="1rem" px="1rem" py="0.5rem" bg="#383838" w="13rem" justifyContent="space-between">
                        <Box w="6rem">
                            <Text fontSize="0.75rem" color="#b9b9b9">Total Problems Solved</Text>
                            <Text fontSize="1.5rem" fontWeight="700">47</Text>
                        </Box>
                        <Box fontSize="2rem"><CheckIcon /></Box>
                    </Flex>
                </Flex>
            </Flex>
            <Flex mx="8rem" py="2rem">
                <Card maxWidth="max-w-5xl">
                    <Title>Population growth rate (1951 to 2021)</Title>
                    <LineChart
                        data={chartdata}
                        dataKey="month"
                        categories={["Monthly Problems Solved"]}
                        colors={["violet"]}
                        marginTop="mt-6"
                        yAxisWidth="w-10"
                        height="h-96"
                    />
                </Card>
                <Flex ml="1rem" flexDirection="column">
                    <Card maxWidth="max-w-xl">
                        <Title>Sales by City</Title>
                        <DonutChart
                            data={cities}
                            category="sales"
                            dataKey="name"
                            marginTop="mt-6"
                            colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
                        />
                    </Card>
                    <Card maxWidth="max-w-xl">
                        <Title>Sales by City</Title>
                        <DonutChart
                            data={cities}
                            category="sales"
                            dataKey="name"
                            marginTop="mt-6"
                            colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
                            variant="pie"
                        />
                    </Card>
                </Flex>
                <Box>

                </Box>
            </Flex>
        </Box>
    )
}

export default Home