import { Box, Heading, Text, form, FormControl, FormLabel, Input, HStack, VStack, Select} from "@chakra-ui/react"
import { useState } from "react"

const PasswordGenerator = () => {
    const [algo, setAlgo] = useState("r")

    const form = (e) => {
        e.preventDefaults()
    }

    return (
        <Box mx={10}>
            <Box mt={5}>
                <Heading mb={1}>Password Generator</Heading>
                <Text>Choose between the Random or Customised Algo to create your randomly generated password.</Text>
            </Box>
            <Box mb={8} mt={3}>
                <Text fontSize="xl" mb={2}><b>Settings</b></Text>
                <VStack alignItems="left">
                    <Text fontSize="md">Algorithm Type</Text>
                    <Select placeholder="Select Option" onChange={(e) => setAlgo(e.currentTarget.value)}>
                        <option value="r">Random</option>
                        <option value="a">Advanced</option>
                        <option value="s">Suprise</option>
                    </Select>
                </VStack>
            </Box>
            <Box mb={5}>
                {algo === "r" ? 
                    <form onSubmit={form}>
                        <FormControl id="encrypt-text" isRequired>
                            <FormLabel>Generate Password</FormLabel>
                            <Input placeholder="https://google.com" onChange={(e) => setText(e.target.value)}/>
                        </FormControl>

                    </form>
                : 
                    <form onSubmit={form}>
                        <FormControl id="encrypt-text" isRequired>
                            <FormLabel>Generate Password</FormLabel>
                            <Input placeholder="https:/google.com" onChange={(e) => setText(e.target.value)}/>
                        </FormControl>
                    </form>
                }
            </Box>
        </Box>
    )
}

export default PasswordGenerator