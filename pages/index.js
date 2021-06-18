// Components
import { Box, HStack, Center, VStack, Text, Heading, Button } from "@chakra-ui/react";

import { useRouter } from 'next/router'

export default function Home() {
  const Projects = [{
      name: "Encrypt and Decrypter",
      desc: "Encrypt and Decrypt your Text with a Custom Cipher",
      path: "/EncrypterDecrypter"
  },{
      name: "Interesting Project",
      desc: "Something I made to help cure boredom! Do try!",
      path: "https://go.ethanchew.me/hello"
  }]
  return(
      <Center>
          <VStack spacing={30}>
              <Heading mt={5}>Random Web Applications</Heading>
              <Box>
                  <HStack spacing={5} align="flex-start">
                      {Projects.map((Projects) => (
                          <AppBox key={Math.random()} Project={Projects}/>
                      ))}
                  </HStack>
              </Box>
          </VStack>
      </Center>
  );
}

const AppBox = ({Project}) => {
    const router = useRouter()
    return(
        <Box border="1px solid" borderColor="grey" borderRadius={12} w="100%">
            <VStack alignItems="left" mx={6} my={6}>
                <VStack alignItems="left">
                    <Heading fontSize="20px">{Project.name}</Heading>
                    <Text>{Project.desc}</Text>
                </VStack>
                <Button onClick={() => router.push(Project.path)} variant="solid">
                    Go
                </Button>
            </VStack>
        </Box>
    );
}