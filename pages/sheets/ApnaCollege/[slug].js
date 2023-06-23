import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../../Components/Navbar';
import AmanDhattarwal from "../../../models/AmanDhattarwal";
import mongoose, { mongo } from "mongoose";
import { Box, Heading, Progress, Flex, Text, Checkbox, Grid, GridItem, Button, useToast } from '@chakra-ui/react';

const College = ({sheet}) => {
    const router = useRouter();
    const { slug } = router.query;
    const [userSolved, setUserSolved] = useState([]);
    const [userUnsolved, setUserUnsolved] = useState([]);
    console.log(sheet.AmanDhattarwals)
    console.log(sheet.AmanDhattarwals.title)
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
      };
    useEffect(() => {
        if(localStorage.getItem("token"))
        {
                handleSubmit(localStorage.getItem('token'));
        }
        else
        {
                router.push('/');
        }
    }, [])
    
//     const data = [
//         {
//             index: 1,
//             ques: "Maximum and minimum element in Array",
//             level: "Easy"
//         },
//         {
//             index: 2,
//             ques: "Reverse the Array",
//             level: "Easy"
//         },
//         {
//             index: 3,
//             ques: "Maximum Sub-Array",
//             level: "Easy"
//         },
//         {
//             index: 4,
//             ques: "Contains Duplicate",
//             level: "Medium"
//         },
//         {
//             index: 5,
//             ques: "Maximum and minimum element",
//             level: "Hard"
//         }
//     ];
//     const [todo, setTodo] = useState([...AmanDhattarwals]);
//     const [done, setDone] = useState([]);
//     const [progress, setProgress] = useState(0);
//     const toast = useToast();

//     const deleteItem1 = (index) => {
//         console.log("pressed1")
//         const updateditems = todo.filter((elem) => {
//           return index !== elem.ques;
//         });
//         const temp = todo.filter((elem) => {
//           return index == elem.ques;
//         });
//         setTodo(updateditems);
//         setDone([...done, temp[0]]);
//         setProgress(parseInt(((done.length + 1)/data.length)*100));
//         toast({
//             title: `${done.length + 1}/${data.length} Done 🎉`,
//             status: 'success',
//             isClosable: true,
//             position: 'top-right',
//           })
//     };

//     const deleteItem2 = (index) => {
//         console.log("pressed2");
//         const updateditems = done.filter((elem) => {
//             return index !== elem.ques;
//           });
//           const temp = done.filter((elem) => {
//             return index == elem.ques;
//           });
//           setDone(updateditems);
//         setTodo([...todo, temp[0]]);
//         setProgress(parseInt(((done.length - 1)/data.length)*100));
//         toast({
//             title: `${done.length - 1}/${data.length} Done 🫢`,
//             status: 'warning',
//             isClosable: true,
//             position: 'top-right',
//           })
//     }

    return (
        // <Box bg="brand.900" color="white" fontFamily="body.1">
        //     <Navbar slug={"ApnaCollege"} />
        //     <Box mx="8rem" mt="4rem">
        //         <Heading>{sheet.AmanDhattarwals.title}</Heading>
        //         <Flex alignItems="center" justifyContent="center">
        //             <Progress hasStripe value={progress} colorScheme='purple' width="80vw"/>
        //             <Text color="purple.300" mx="0.5rem">{progress}%</Text>
        //         </Flex>
        //         <Flex justifyContent="space-evenly" my="3rem" fontWeight="600" fontSize="1.25rem">
        //             <Box width="5%">
        //                 <Text>S No.</Text>

        //             </Box>
        //             <Box>
        //             </Box>
        //             <Box>
        //                 <Text>Questions</Text>
        //             </Box>
        //             <Box width="20%">

        //             </Box>
        //         </Flex>
        //         <Flex flexDirection="column">
        //         {todo.map((item) => {
        //             return (
        //                 <Grid templateColumns='repeat(3, 1fr)' gap={6} key={item.index} my="1.5rem" order={item.index}>
        //                     <GridItem display="flex" >
        //                         <Checkbox colorScheme='green' onChange={() => deleteItem1(item.ques)}/>
        //                         <Text ml="10rem">{item.index}.</Text>
        //                     </GridItem>
        //                     <GridItem>
        //                         <Text textAlign="center">{item.ques}</Text>
        //                     </GridItem>
        //                     <GridItem>
        //                     <Text textAlign="center" color={item.level == 'Easy'?'green.300':item.level == 'Medium'?'orange.300':'red.400'}>{item.level}</Text>
        //                     </GridItem>
        //                 </Grid>
        //             )
        //         })}
        //         </Flex>
        //         <Flex flexDirection="column">
        //         {done.map((item) => {
        //             return(
        //                 <Grid templateColumns='repeat(3, 1fr)' gap={6} key={item.index} my="1.5rem" order={item.index}>
        //                     <GridItem display="flex" >
        //                         <Checkbox colorScheme='green' onChange={() => deleteItem2(item.ques)} defaultChecked/>
        //                         <Text ml="10rem">{item.index}.</Text>
        //                     </GridItem>
        //                     <GridItem>
        //                         <Text textAlign="center">{item.ques}</Text>
        //                     </GridItem>
        //                     <GridItem>
        //                     <Text textAlign="center" color={item.level == 'Easy'?'green.300':item.level == 'Medium'?'orange.300':'red.400'}>{item.level}</Text>
        //                     </GridItem>
        //                 </Grid>
        //             )
        //         })}
        //         </Flex>
        //     </Box>
        // </Box>
        <Box>

        </Box>
    )
}

export async function getServerSideProps(context) {
        let url = "http://localhost:3000/api/"+context.resolvedUrl.slice(7);
        let data = await fetch(url);
        let parsedData = await data.json();
        return {
            props: { sheet: parsedData }, // will be passed to the page component as props
        };
  }

export default College