// Components
import { Box, Stack, Center, VStack, Text, Heading, Button, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { useRouter } from 'next/router'

export default function Home() {
  const Projects = [{
      name: "Encrypt and Decrypter",
      desc: "Encrypt and Decrypt your Text with a Custom Cipher",
      path: "/EncrypterDecrypter"
  },{
      name: "Number Guessing",
      desc: "Can you guess the correct number?",
      path: "/NumberGuesser"
  },{
      name: "QR Code Generator",
      desc: "Well.. Generate a QR Code.",
      path: "/QR"
  }]

  useEffect(() => {
      document.title = "Web Apps | Home";
  })
  return(
      <Center>
          <VStack spacing={30}>
              <Heading mt={5} alignItems={"center"}>Random Web Applications</Heading>
              <Box>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
                      {Projects.map((Projects) => (
                          <AppBox key={Projects.name} Project={Projects}/>
                      ))}
                  </SimpleGrid>
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