import React from 'react';
import { Box, Grid } from '@mui/material';
import MyButton from './button';
import Subtitle from './subtitle';
import Input from './input-component';

const InputHolder = ({
  setLetterState,
  setTries,
  tries,
  lettersArray,
  setWrongLetters,
  wrongLetters,
  rightLetters,
  setRightLetters,
  inputValue,
  setInputValue
}) => {

  const handleInputChange = (value) => {
    setInputValue(value.toUpperCase());
    setLetterState("pending");
  };

  const handleConfirm = () => {
    if (inputValue.length !== 1) return;

    const letter = inputValue.toUpperCase();

    if (lettersArray.includes(letter)) {
      if (rightLetters.includes(letter)) {
        setLetterState("already guessed right");
      } else if (wrongLetters.includes(letter)) {
        setLetterState("wrong");
      } else {
        setLetterState("right");
        setRightLetters([...rightLetters, letter]);
        setTries(tries - 1);
      }
    } else {
      if (wrongLetters.includes(letter)) {
        setLetterState("wrong");
      } else {
        setLetterState("wrong");
        setWrongLetters([...wrongLetters, letter]);
        setTries(tries - 1);
      }
    }

    setInputValue(""); // Clear input value after confirm
  };

  return (
    <Box sx={{ display: "inline-block", minWidth: "30rem", mb: "2rem" }}>
      <Subtitle subtitle="Try to guess the letter or the whole word" fontSize="16pt" />
      <Grid container justifyContent="left" alignItems="center">
        <Grid item>
          <Input
            inputValue={inputValue}
            setInputValue={setInputValue}
            onInputChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <MyButton
            buttonText="Confirm"
            color="yellow"
            onClick={handleConfirm}
            inputValue={inputValue}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default InputHolder;
