import styles from '../styles/Home.module.css'

// Components
import { Box, HStack, Center, VStack, Text, Heading, Button } from "@chakra-ui/react";

import { useRouter } from 'next/router'

export default function Home() {
  const Projects = [{
      name: "Encrypt and Decrypter",
      desc: "Encrypt and Decrypt your Text with a Custom Cipher",
      path: "/EncrypterDecrypter"
  }]
  return(
      <Center>
          <VStack>
              <Heading fontSize="40px">Random Web Applications</Heading>
              <HStack>
                  {Projects.map((Projects) => (
                      <AppBox Project={Projects}/>
                  ))}
              </HStack>
          </VStack>
      </Center>
  );
}

const AppBox = ({Project}) => {
    const router = useRouter()
    return(
        <Box border="1px solid" borderColor="grey" borderRadius={12} w="100%">
            <VStack alignItems="left" mx={6} mb={10}>
                <VStack alignItems="left">
                    <Heading fontSize="20px">{Project.name}</Heading>
                    <Text>{Project.desc}</Text>
                </VStack>
                <Button onClick={() => router.push(Project.path)} variantColor="teal" variant="solid">
                    Go
                </Button>

            </VStack>
        </Box>
    );
}