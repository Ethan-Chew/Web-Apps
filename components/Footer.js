import {
    Box,
    Container,
    Stack,
    Text,
    Link
} from '@chakra-ui/react';

export default function Footer() {
    return (
        <Box>
            <Container as={Stack} maxW={'6xl'} py={4} direction={{ base: 'column', md: 'row' }} spacing={4} justify={{ base: 'center', md: 'space-between' }} align={{ base: 'center', md: 'center' }}>
                <Text style={{ margin: "25px 0", textAlign: "center", fontSize: 13 }} color="">
                    Made with ♥&#xFE0E; by{" "}
                    <Link color="blue.200" href="https://www.ethanchew.com" target="_blank" rel="noreferrer">Ethan Chew</Link>{" "}
                    <br />
                    Open sourced on{" "}
                    <Link color="blue.200" href="https://github.com/Ethan-Chew/Web-Apps" target="_blank" rel="noreferrer">GitHub</Link>
                    .{" "}
                </Text>
            </Container>
        </Box>
    );
}
