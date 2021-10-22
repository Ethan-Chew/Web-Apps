import { Box, Heading, Text } from "@chakra-ui/react"
import { useState } from "react"

export default function SolveQuad() {
    const [eqn, setEqn] = useState("")

    const handleForm = (e) => {
        e.preventDefaults()
    }

    const solveQuad = () => {
        
    }

    return (
        <Box mx={10}>
            <Box mb={4} mt={5}>
                <Heading mb={1}>Solve Quadratic Equation</Heading>
                <Text mb={1}>This program can help you solve any Quadratic Equation and return the Roots, Turning Point, Discriminant and the Completed the Square form.</Text>
            </Box>
        </Box>
    )
}