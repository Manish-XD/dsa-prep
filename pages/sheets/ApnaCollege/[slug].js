import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../../Components/Navbar';
import { Box, Heading, Progress, Flex, Text, Checkbox, Grid, GridItem, Button } from '@chakra-ui/react';

const College = () => {
    const router = useRouter();
    const { slug } = router.query;

    const data = [
        {
            index: 1,
            ques: "Maximum and minimum element in Array",
            level: "Easy"
        },
        {
            index: 2,
            ques: "Reverse the Array",
            level: "Easy"
        },
        {
            index: 3,
            ques: "Maximum Sub-Array",
            level: "Easy"
        },
        {
            index: 4,
            ques: "Contains Duplicate",
            level: "Easy"
        },
        {
            index: 5,
            ques: "Search an element in sorted and pivoted Array",
            level: "Easy"
        }
    ];
    const [todo, setTodo] = useState([...data]);
    const [done, setDone] = useState([]);
    const [progress, setProgress] = useState(0);

    const deleteItem1 = (index) => {
        console.log("pressed1")
        const updateditems = todo.filter((elem) => {
          return index !== elem.ques;
        });
        const temp = todo.filter((elem) => {
          return index == elem.ques;
        });
        setTodo(updateditems);
        setDone([...done, temp[0]]);
        setProgress(parseInt(((done.length + 1)/data.length)*100));
    };

    const deleteItem2 = (index) => {
        console.log("pressed2");
        const updateditems = done.filter((elem) => {
            return index !== elem.ques;
          });
          const temp = done.filter((elem) => {
            return index == elem.ques;
          });
          setDone(updateditems);
        setTodo([...todo, temp[0]]);
        setProgress(parseInt(((done.length - 1)/data.length)*100));
    }

    return (
        <Box bg="brand.900" color="white" fontFamily="body.1">
            <Navbar slug={"ApnaCollege"} />
            <Box mx="8rem" mt="4rem">
                <Heading>{slug}</Heading>
                <Flex alignItems="center" justifyContent="center">
                    <Progress hasStripe value={progress} colorScheme='purple' width="80vw"/>
                    <Text color="purple.300" mx="0.5rem">{progress}%</Text>
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
                {todo.map((item) => {
                    return (
                        <Grid templateColumns='repeat(3, 1fr)' gap={6} key={item.index} my="1.5rem" order={item.index}>
                            <GridItem display="flex" >
                                <Checkbox colorScheme='green' onChange={() => deleteItem1(item.ques)}/>
                                <Text ml="10rem">{item.index}.</Text>
                            </GridItem>
                            <GridItem>
                                <Text textAlign="center">{item.ques}</Text>
                            </GridItem>
                            <GridItem>
                            <Text textAlign="center">{item.level}</Text>
                            </GridItem>
                        </Grid>
                    )
                })}
                </Flex>
                <Flex flexDirection="column">
                {done.map((item) => {
                    return(
                        <Grid templateColumns='repeat(3, 1fr)' gap={6} key={item.index} my="1.5rem" order={item.index}>
                            <GridItem display="flex" >
                                <Checkbox colorScheme='green' onChange={() => deleteItem2(item.ques)} defaultChecked/>
                                <Text ml="10rem">{item.index}.</Text>
                            </GridItem>
                            <GridItem>
                                <Text textAlign="center">{item.ques}</Text>
                            </GridItem>
                            <GridItem>
                            <Text textAlign="center">{item.level}</Text>
                            </GridItem>
                        </Grid>
                    )
                })}
                </Flex>
            </Box>
        </Box>
    )
}

export default College