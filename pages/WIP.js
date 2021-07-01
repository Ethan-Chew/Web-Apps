import { VStack, Heading, Text } from '@chakra-ui/react'
import { useEffect } from "react";

const WIP = () => {
    useEffect(() => {
        document.title = "Web Apps | Work in Progress!";
    })

    return (
        <VStack alignItems="center" my={10}>
            <Heading>Work in Progress</Heading>
            <Text>This Project is currently a Work in Progress! Check back soon!</Text>
        </VStack>
    )
}

export default WIP