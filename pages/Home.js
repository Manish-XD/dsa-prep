import React, { useEffect, useState } from 'react';
import { Card, Title, LineChart, DonutChart } from "@tremor/react";
import { Box, Flex, Text, Avatar } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons'
import Link from 'next/link';
import { useToast } from '@chakra-ui/react'
import Navbar from '../Components/Navbar';
import {signIn, signOut} from "next-auth/react";
import connectDb from "../middleware/mongoose";
import { JsonWebTokenError } from 'jsonwebtoken';
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/router';
import {getCookie,deleteCookies} from 'cookies-next';
import {getSession, useSession, usesSession} from "next-auth/react"
import Users from '../models/Users';




const Home = () => {
    const router = useRouter();
    const [data, setData] = useState([]);
    const {data: session, status}=useSession();
    const handleSubmit = async (token) => {
        let res = await fetch(`http://localhost:3000/api/auth`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Bearer": token
          },
        });
        let response = await res.json();
        console.log(response.data);
        setData(response.data);
      };
    useEffect(() => {
        if(status!=='authenticated')
        {
        //   router.push('/');
        }
        if(localStorage.getItem('token'))
        {
            handleSubmit(localStorage.getItem('token'));
        }
      }, [status]);
    const chartdata = [
        {
            month: "jan",
            "Monthly Problems Solved": 0,
        },
        {
            month: "feb",
            "Monthly Problems Solved": 0,
        },
        {
            month: "mar",
            "Monthly Problems Solved": 0,
        },
        {
            month: "apr",
            "Monthly Problems Solved": 0,
        },
        {
            month: "may",
            "Monthly Problems Solved": 0,
        },
        {
            month: "jun",
            "Monthly Problems Solved": 0,
        },
        {
            month: "jul",
            "Monthly Problems Solved": 0,
        },
        {
            month: "aug",
            "Monthly Problems Solved": 0,
        },
        {
            month: "sep",
            "Monthly Problems Solved": 0,
        },
        {
            month: "oct",
            "Monthly Problems Solved": 0,
        },
        {
            month: "nov",
            "Monthly Problems Solved": 0,
        },
        {
            month: "dec",
            "Monthly Problems Solved": 0,
        },
    ];
    const sheets = [
        {
            name: '450 DSA',
            sales: 5,
        },
        {
            name: '375 DSA',
            sales: 4,
        },
        {
            name: 'Striverz AtoZ',
            sales: 6,
        },
        {
            name: 'Lorem Ipsum',
            sales: 5,
        },
    ];
    const difficulty = [
        {
            name: 'Easy',
            sales: 3,
        },
        {
            name: 'Medium',
            sales: 90,
        },
        {
            name: 'Hard',
            sales: 20,
        }
    ];
    console.log(data);
    return (
        <Box bg="brand.900" color="white" fontFamily="body.1" minHeight="100vh">
            <Navbar slug={false} />
            <button onClick={signOut}>sign out</button>
            {data && data.map((user) => {
                return (
                    <Box key="69">
                    <Flex borderRadius="5px" bg="#222222" mx="8rem" px="2.5rem" py="1.5rem" alignItems="center">
                        <Box mr="2rem"><Avatar size="xl" bg='purple.500' /></Box>
                        <Flex flexDirection="column" borderLeft="1px solid #8d8d8d">
                            <Box borderBottom="1px solid #8d8d8d" p="1rem" mx="0.25rem">
                                <Text color="#8d8d8d" fontSize="0.75rem">Welcome Back!</Text>
                                <Text fontWeight="600" fontSize="1.75rem">{user.name}</Text>
                            </Box>
                            <Flex alignItems="center" mx="1rem" mt="1rem" px="1rem" py="0.5rem" bg="#383838" w="13rem" justifyContent="space-between">
                                <Box w="6rem">
                                    <Text fontSize="0.75rem" color="#b9b9b9">Total Problems Solved</Text>
                                    <Text fontSize="1.5rem" fontWeight="700">6</Text>
                                </Box>
                                <Box fontSize="2rem"><CheckIcon /></Box>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex mx="8rem" py="2rem">
                    <Card maxWidth="max-w-4xl">
                        <Title>Questions Solved (2023)</Title>
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
                            <Title>Sheets Solved</Title>
                            <DonutChart
                                data={sheets}
                                category="sales"
                                dataKey="name"
                                marginTop="mt-6"
                                colors={["indigo", "violet", "purple", "fuchsia"]}
                            />
                        </Card>
                        <Card maxWidth="max-w-xl">
                            <Title>Difficulty</Title>
                            <DonutChart
                                data={difficulty}
                                category="sales"
                                dataKey="name"
                                marginTop="mt-6"
                                colors={["violet", "indigo", "fuchsia"]}
                                variant="pie"
                            />
                        </Card>
                    </Flex>
                    <Box>
            
                    </Box>
                </Flex>
                </Box>
                )
            })}
        </Box>
    )
}

  
export default Home