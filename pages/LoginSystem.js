// Components
import {
    FormControl,
    FormLabel,
    Input,
    Center,
    Box,
    Heading,
    Text,
    Button,
    Stack,
    VStack,
    form,
    AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter
} from '@chakra-ui/react'
import {useRef, useState} from 'react'
import sha256 from 'crypto-js/sha256'

export default function LoginSystem() {
    const [loginStatus, setStatus] = useState("nli")
    const [hashUser, setHashUser] = useState("John Doe")

    return(
        <Box mx={10}>
            <Box mb={4} mt={5}>
                <Heading mb={1}>Simple Login System</Heading>
                <Text mb={1}>'Create' an account and Login. Using Firebase</Text>
                <Text>Please <b>DO NOT</b> use real passwords as this might not be secure.</Text>
            </Box>
            <Center mt={5}>
                <Stack direction={["column", "row"]} spacing={10}>
                    <VStack alignItems="left">
                        <Text fontSize={"3xl"}><b>Login</b></Text>
                        <Text>Login to your existing account!</Text>
                        <LoginForm status={loginStatus} />
                    </VStack>
                    <VStack alignItems="left">
                        <Text fontSize={"3xl"}><b>Create Account</b></Text>
                        <Text>Don't have an account? Create one!</Text>
                        <CreateAccount />
                    </VStack>
                </Stack>
            </Center>
        </Box>
    )
}

const LoginForm = ({status}) => {
    const [hashUser, setHashUser] = useState("John Doe")
    const [hashPW, setHashPW] = useState("")

    const handleLogin = () => {
        console.log("Placeholder")
    }

    return(
        <Box border="1px solid" borderColor="gray" borderRadius={10}>
            <Box my={5} mr={3} ml={3}>
                <form onSubmit={handleLogin}>
                    <FormControl isInvalid={status !== "success"} isRequired>
                        <FormLabel>Username</FormLabel>
                        <Input mb={3} placeholder="John Doe" onChange={(e) => {
                            setHashUser(sha256(e.currentTarget.value))
                        }}/>
                        <FormLabel>Password</FormLabel>
                        <Input mb={5} placeholder="" onChange={(e) => {
                            setHashPW(sha256(e.currentTarget.value))
                        }}/>
                        <Button type="submit" variantColor="teal" variant="outline" width="full" mt={4}>
                            Login
                        </Button>
                    </FormControl>
                </form>
            </Box>
        </Box>
    )
}

const CreateAccount = () => {
    const [hashUN, setHashUN] = useState("John Doe")
    const [PW1, setPW1] = useState("")
    const [PW2, setPW2] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const [msg, setMSG] = useState([])

    const onClose = () => setIsOpen(false)
    const cancelRef = useRef()

    const handleCreate = (e) => {
        e.preventDefault()
        if (PW1 !== PW2) {
            setMSG(["Error" ,"Different Passwords."])
        } else {
            console.log(PW1, PW2, hashUN)
        }
        sendToDatabase(hashUN, PW1)
    }

    async function sendToDatabase(username, password) {
        try {
            
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <Box border="1px solid" borderColor="gray" borderRadius={10}>
            <Box my={5} mr={3} ml={3}>
                <form onSubmit={handleCreate}>
                    <FormControl isRequired>
                        <FormLabel>Username</FormLabel>
                        <Input placeholder="John Doe" onChange={(e) => {
                            if (e.currentTarget.value !== "John Doe") {
                                setHashUN(sha256(e.currentTarget.value))
                            }
                        }} />
                        <FormLabel>Password</FormLabel>
                        <Input onChange={(e) => {
                            if (e.currentTarget.value.length < 5) {
                                setMSG(["Error" ,"Password Length too short!"])
                            } else {
                                setPW1(sha256(e.currentTarget.value))
                            }
                        }}/>
                        <FormLabel>Confirm Password</FormLabel>
                        <Input onChange={(e) => {
                            setPW2(sha256(e.currentTarget.value))
                        }}/>
                        <Button type="submit" variantColor="teal" variant="outline" width="full" mt={4}>
                            Create Account
                        </Button>
                    </FormControl>
                </form>
            </Box>
            {/*Alert Dialog*/}
            <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">Placeholder</AlertDialogHeader>
                        <AlertDialogBody>Placeholder</AlertDialogBody>
                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Close
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </Box>
    )
}