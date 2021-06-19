import {useState} from "react";

// Components
import { Box, VStack, Text, Heading, FormControl, FormLabel, Input, Button, Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react";

const EncrypterDecrypter = () => {
    const [encryptText, setEncryptText] = useState('')
    const [decryptText, setDecryptText] = useState('')

    const onEncrypt = (e) => {
        e.preventDefault()
        const cypher = {"a":"4bB*","b":"a3Vf","c":"B3a*","d":"1bHn","e":"a*(6","f":"kBH7","g":"bh52","h":"aP3b","i":"a(2h","j":"pI0a","k":"t(A*","l":"aBeL","m":"R*(n","n":"2bA0","o":"Ar9b","p":"a5h*","q":")(*)","r":"b9a)","s":"2jx9","t":"r94k","u":"2j0q","v":"4a*(","w":"4nq3","x":"24(*","y":"*(yz","z":"lM84"}
        let splittedText = encryptText.toLowerCase().split(" ")
        let encryptedText = ""

        for (let i = 0; i < splittedText.length; i++) {
            for (let j = 0; j < splittedText[i].length; j++) {
                if (splittedText[i][j] in cypher) {
                    encryptedText += cypher[splittedText[i][j]]
                }
            }
            encryptedText += " "
        }
        alert(`Encrypted Text: ${encryptedText}`)
    }

    const onDecrypt = (e) => {
        e.preventDefault()
        const cypher = {"1bHn":"d","2bA0": "n","2j0q": "u","2jx9": "s","4a*(": "v","4bB*": "a","4nq3": "w","24(*": "x",")(*)": "q","*(yz": "y","Ar9b": "o","B3a*": "c","R*(n": "m","a3Vf": "b","a5h*": "p","a(2h": "i","a*(6": "e","aBeL": "l","aP3b": "h","b9a)": "r","bh52": "g","kBH7": "f","lM84": "z","pI0a": "j","r94k": "t","t(A*": "k"}
        let splittedText = decryptText.split(" ")
        let decryptedText = ""

        if (Number(splittedText.join("").length) % 4 !== 0) {
            alert(`Not able to be Decrypted. Length needs to be divided 4. Current Length: ${splittedText.join("").length}`)
        } else {
            for (let i = 0; i < splittedText.length; i++) {
                const currentWord = splittedText[i]
                let index = 0
                let endIndex = 4
                for (let j = 0; j < (splittedText[i].length)/4; j++) {
                    // CheckCorr Code
                    decryptedText += cypher[currentWord.slice(index, endIndex)]
                    if (typeof(decryptedText) == 'undefined') {
                        alert("Unknown Char in Decipher Text. Use Encrypter Above to Encrypt Text. WIP: Custom Cipher")
                        return
                    }

                    index += 4
                    endIndex += 4
                }
                decryptedText += " "
            }
            alert(`Decrypted Text: ${decryptedText}`)
        }
    }

    return(
        <Box mx={10}>
            <Box mb={8} mt={5}>
                <Heading mb={1}>Encrypter and Decrypter</Heading>
                <Text><i>Currently</i>, does <b>not</b> work with Capital Letters (Made Lower), and any Special Characters (Example: , . ? /)</Text>
            </Box>

            <VStack alignItems="left" spacing="30px">
                {/*Encrypter*/}
                <VStack alignItems="left" spacing="15px">
                    <Box>
                        <Text fontSize="2xl" e><b>Encrypter</b></Text>
                    </Box>
                    <Box>
                        <form onSubmit={onEncrypt}>
                            <FormControl id="encrypt-text" isRequired>
                                <FormLabel>Text to Encrypt</FormLabel>
                                <Input placeholder="Hello World" onChange={(e) => setEncryptText(e.currentTarget.value)}/>
                                <Button type="submit" variantColor="teal" variant="outline" width="full" mt={4}>
                                    Encrypt
                                </Button>
                            </FormControl>
                        </form>
                    </Box>
                </VStack>
                {/*Decrypter*/}
                <VStack alignItems="left" spacing="15px">
                    <Box>
                        <Text fontSize="2xl"><b>Decrypter</b></Text>
                    </Box>
                    <Box>
                        <form onSubmit={onDecrypt}>
                            <FormControl id="encrypt-text" isRequired>
                                <FormLabel>Text to Decrypt</FormLabel>
                                <Input placeholder="Hello World" onChange={(e) => setDecryptText(e.currentTarget.value)}/>
                                <Button type="submit" variantColor="teal" variant="outline" width="full" mt={4}>
                                    Decrypt
                                </Button>
                            </FormControl>
                        </form>
                    </Box>
                </VStack>
            </VStack>
        </Box>
    )
}

export default EncrypterDecrypter