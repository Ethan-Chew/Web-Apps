import { useState, useRef } from 'react'
import {
    Box,
    Heading,
    Text,
    VStack,
    Button,
    HStack,
    Checkbox,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    FormControl, FormLabel, Input, FormErrorMessage,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay
} from "@chakra-ui/react";

const NumberGuesser = () => {
    const [userGuess, setUserGuess] = useState(0)
    const [clueEnabled, setClueEnabled] = useState(false)
    const [numOfGuess, setGuessNum] = useState(10)
    const [gameStarted, setGameStart] = useState(false)
    const [maxNum, setMaxNum] = useState(100)
    const [corrAns, setCorrect] = useState(1)
    const [status, setStatus] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const [msg, setMsg] = useState("")

    const onClose = () => setIsOpen(false)
    const cancelRef = useRef()

    let i = 0;

    const handleUserGuess = (e) => {
        e.preventDefault()

        if (numOfGuess - i !== 0) {
            i += 1
            if (corrAns === userGuess) {
                setStatus("c")
                setMsg(`You got it correct after ${i} tries! Good Job!`)
                setIsOpen(true)
                setUserGuess(0)
                setGameStart(false)
            } else {
                setStatus("w")
                if (clueEnabled) {
                    setMsg(`Wrong! The answer is ${(corrAns > userGuess) ? "more" : "less"} than your answer! You have ${numOfGuess - i} tries left!`)
                } else {
                    setMsg(`Wrong! You have ${numOfGuess - i} tries left!`)
                }
            }
        } else {
            setStatus("w")
            setMsg(`Wrong! The correct answer was ${corrAns}!`)
            setIsOpen(true)
            setUserGuess(0)
            setGameStart(false)
        }
        console.log(corrAns, userGuess, status)
    }

    const startGame = () => {
        if (gameStarted) {
            setUserGuess(0)
            setGameStart(false)
        } else {
            setCorrect(Math.round(Math.random() * maxNum))
            setGameStart(true)
        }
    }

    return(
        <Box mx={10}>
            <Box mb={4} mt={5}>
                <Heading mb={1}>Number Guessing</Heading>
                <Text>Configure the Settings below, and Start the Game!</Text>
            </Box>
            {/*Configure Game*/}
            <Box mb={10}>
                <Text fontSize="3xl" mb={2}><b>Settings</b></Text>
                <VStack spacing={1} mb={4} alignItems="left">
                    <HStack>
                        <Text>Clues Enabled: </Text>
                        <Checkbox defaultIsChecked={false} isChecked={clueEnabled} onChange={(e) => setClueEnabled(e.currentTarget.checked)}></Checkbox>
                    </HStack>
                    <HStack>
                        <Text>Number of Tries: </Text>
                        <NumberInput defaultValue={10} min={1} size="sm" allowMouseWheel>
                            <NumberInputField onChange={(e) => setGuessNum(e.currentTarget.value)} />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </HStack>
                    <HStack>
                        <Text>Maximum Number: </Text>
                        <NumberInput defaultValue={100} min={0} size="sm" allowMouseWheel>
                            <NumberInputField onChange={(e) => setMaxNum(e.currentTarget.value)} />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </HStack>
                </VStack>
                <Button colorScheme="teal" size="sm" onClick={startGame}>
                    {gameStarted ? "End Game" : "Start Game"}
                </Button>
            </Box>
            {/*Game Box*/}
            <Box>
                <Text fontSize="3xl"><b>Game</b></Text>
                {gameStarted ? (
                    <form onSubmit={handleUserGuess}>
                        <FormControl id="user-guessing" isRequired>
                            <FormLabel>Guess the Number!</FormLabel>
                            <NumberInput borderColor={(status === "c") ? "green" : (status === "w") ? "tomato" : ""} defaultValue={100} min={0} size="sm" allowMouseWheel>
                                <NumberInputField onChange={(e) => setUserGuess(Number(e.currentTarget.value))} />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                            <FormErrorMessage>{msg}</FormErrorMessage>
                            <Button type="submit" variantColor="teal" variant="outline" width="full" mt={4}>
                                Guess!
                            </Button>
                        </FormControl>
                        <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
                            <AlertDialogOverlay>
                                <AlertDialogContent>
                                    <AlertDialogHeader fontSize="lg" fontWeight="bold">{(status === "c") ? "Congratulations!" : "Try again!"}</AlertDialogHeader>
                                    <AlertDialogBody>{msg}</AlertDialogBody>
                                    <AlertDialogFooter>
                                        <Button ref={cancelRef} onClick={onClose}>
                                            Close
                                        </Button>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialogOverlay>
                        </AlertDialog>
                    </form>
                ) : (
                    <Text>You have <b>not</b> started a game!</Text>
                )}
            </Box>
        </Box>
    )
}

export default NumberGuesser