import { Box, form, FormControl, FormLabel, Input, Button, Heading, Text, Image } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

const QR = () => {
    const QRCode = require('qrcode.react')
    const [txt, setText] = useState("")
    const [showQR, setShowQR] = useState(false)

    function generateQR(e) {
        e.preventDefault()
        setShowQR(true)
    }
    useEffect(() => {
        document.title = "Web Apps | QR Code"
    })

    return (
        <Box mx={10}>
            <Box mb={8} mt={5}>
                <Heading mb={1}>QR Code Generator</Heading>
                <Text>Enter a Text/String into the Field below, and Generate the QR Code.</Text>
            </Box>
            <Box mb={5}>
                <form onSubmit={generateQR}>
                    <FormControl id="encrypt-text" isRequired>
                        <FormLabel>Generate QR</FormLabel>
                        <Input placeholder="https://google.com" onChange={(e) => setText(e.target.value)}/>
                    </FormControl>
                </form>
            </Box>
            {showQR ? 
            <Box>
                <Text fontSize="xl" mb={2}><b>Generated QR</b></Text>
                <QRCode value={txt} renderAs="canvas" size={256} />
            </Box> 
            : null}
        </Box>
    )
}

export default QR