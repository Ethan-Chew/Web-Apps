import { useState, useRef, useEffect } from 'react'
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
    const [i, sI] = useState(1)

    const onClose = () => setIsOpen(false)
    const cancelRef = useRef()

    useEffect(() => {
        document.title = "Web Apps | Number Guesser";
    })

    const resetGame = () => {
        setIsOpen(false)
        setCorrect(0)
        setMaxNum(100)
        setMsg("")
        sI(1)
        setStatus("")
        setUserGuess(0)
        setGameStart(false)
    }

    const handleUserGuess = (e) => {
        e.preventDefault()

        sI(i+1)
        if (numOfGuess - i !== 0) {
            if (userGuess > maxNum || userGuess < 0) {
                setMsg(`Wrong! You gave an answer that is ${(userGuess > maxNum) ? "more than the Maximum Number" : "less than zero"}! You have ${numOfGuess - i} tries left!`)
            } else {
                if (corrAns === userGuess) {
                    setStatus("c")
                    setMsg(`You got it correct after ${i} tries! Good Job!`)
                    setIsOpen(true)
                } else {
                    setStatus("w")
                    if (clueEnabled) {
                        setMsg(`Wrong! The answer is ${(corrAns > userGuess) ? "more" : "less"} than your answer! You have ${numOfGuess - i} tries left!`)
                    } else {
                        setMsg(`Wrong! You have ${numOfGuess - i} tries left!`)
                    }
                }
            }
        }

        if (numOfGuess - i === 0) {
            setStatus("w")
            setMsg(`Wrong! The correct answer was ${corrAns}!`)
            setIsOpen(true)
        }
    }

    const startGame = () => {
        if (gameStarted) {
            setUserGuess(0)
            setGameStart(false)
        } else {
            resetGame()
            setCorrect(Math.round(Math.random() * maxNum))
            setGameStart(true)
        }
    }

    return(
        <Box mx={10}>
            <Box mb={4} mt={5}>
                <Heading mb={1}>Number Guessing</Heading>
                <Text mb={1}>Configure the Settings below, and Start the Game!</Text>
                <Text><b>Remember, </b>the Minimum Number is 0. Which means, <b>no</b> choice will be below 0.</Text>
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
                        <FormControl id="user-guessing" isRequired isInvalid={status === "w"}>
                            <FormLabel>Guess the Number!</FormLabel>
                            <NumberInput borderColor={(status === "c") ? "green" : (status === "w") ? "tomato" : ""} defaultValue={0} min={0} size="sm" allowMouseWheel>
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
                    </form>
                ) : (
                    <Text>You have <b>not</b> started a game!</Text>
                )}
            </Box>
            {/*Alert Dialog*/}
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
        </Box>
    )
}

export default NumberGuesser