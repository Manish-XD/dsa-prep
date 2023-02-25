import { Box, Flex, Text, Avatar } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const Navbar = ({ slug }) => {
    return (
        <>
        {slug && <Flex justifyContent="space-between" px="4rem" py="2rem" position="relative">
            <Text fontSize="1.5rem" fontWeight="700">&#9001;/&#9002;DSA Prep</Text>
            <Flex justifyContent="space-between" w="35rem" position="absolute" left="33%">
                <Link href="/sheets/LoveBabbar"><Text transition="all 0.3s ease-in-out" _hover={{ fontWeight: "800", textDecoration: "underline" }} fontWeight={slug.includes("Love") ? "800" : "400"}>Love Babbar</Text></Link>
                <Link href="/sheets/ApnaCollege"><Text transition="all 0.3s ease-in-out" _hover={{ fontWeight: "800", textDecoration: "underline" }} fontWeight={slug.includes("Apna") ? "800" : "400"}>Apna College</Text></Link>
                <Link href="/sheets/Strivers"><Text transition="all 0.3s ease-in-out" _hover={{ fontWeight: "800", textDecoration: "underline" }} fontWeight={slug.includes("Strivers") ? "800" : "400"}>Strivers</Text></Link>
                <Link href="/sheets/LoremIpsum"><Text transition="all 0.3s ease-in-out" _hover={{ fontWeight: "800", textDecoration: "underline" }} fontWeight={slug.includes("Lorem") ? "800" : "400"}>Lorem ipsum</Text></Link>
            </Flex>
            <h1>User</h1>
        </Flex>}

        {!slug && <Flex justifyContent="space-between" px="4rem" py="2rem" position="relative">
        <Text fontSize="1.5rem" fontWeight="700">&#9001;/&#9002;DSA Prep</Text>
        <Flex justifyContent="space-between" w="35rem" position="absolute" left="33%">
            <Link href="/sheets/LoveBabbar"><Text transition="all 0.3s ease-in-out" _hover={{ fontWeight: "800", textDecoration: "underline" }}>Love Babbar</Text></Link>
            <Link href="/sheets/ApnaCollege"><Text transition="all 0.3s ease-in-out" _hover={{ fontWeight: "800", textDecoration: "underline" }}>Apna College</Text></Link>
            <Link href="/sheets/Strivers"><Text transition="all 0.3s ease-in-out" _hover={{ fontWeight: "800", textDecoration: "underline" }}>Strivers</Text></Link>
            <Link href="/sheets/LoremIpsum"><Text transition="all 0.3s ease-in-out" _hover={{ fontWeight: "800", textDecoration: "underline" }}>Lorem ipsum</Text></Link>
        </Flex>
        <h1>User</h1>
    </Flex>}
    </>
    )
}

export default Navbar