import { VStack, Heading, Text, Link } from '@chakra-ui/react'
import { useEffect } from "react";

const PageNotFound = () => {
    useEffect(() => {
        document.title = "Web Apps | 404";
    })

    return (
        <VStack alignItems="center" my={10}>
            <Heading>Error 404: Page Not Found!</Heading>
            <Text>
                Oops! There is nothing here... Did you type the wrong link?
                Back to{" "}
                <Link color="blue.200" href="https://web-apps.ethanchew.me" target="_blank" rel="noreferrer">Home</Link>{" "}
            </Text>
        </VStack>
    )
}

export default PageNotFound