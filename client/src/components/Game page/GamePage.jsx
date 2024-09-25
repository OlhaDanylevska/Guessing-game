import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import InputHolder from "../inputHolder";
import WordHolder from "../wordHolder";
import HolderForWrongLetters from "../wrongWords";
import MyButton from "../button";
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Fireworks from "../fireworks";

function GamePage({
  runTimer,
  setRunTimer,
  letterState,
  setLetterState,
  wrongLetters,
  rightLetters,
  setWrongLetters,
  setRightLetters,
  lettersArray,
  tries,
  setTries,
  setGameResult,
  gameResult,
  gameOver,
  setGameOver,
}) {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const uniqueLettersSet = new Set(lettersArray);
    const uniqueLettersCount = uniqueLettersSet.size;

    if (rightLetters.length === uniqueLettersCount) {
      setGameOver(true);
      setGameResult("win");
      setRunTimer(false);
    }

    if (tries <= 0) {
      setGameOver(true);
      setGameResult("lose");
      setRunTimer(false);
    }
  }, [tries, rightLetters, setGameOver, setGameResult, setRunTimer, lettersArray]);

  const onClickHome = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '16px',
        height: '100vh',
        backgroundImage: 'linear-gradient(to bottom right, #230536, #030712)',
        color: '#fff',
      }}
    >
      <Box sx={{ display: 'flex', gap: '16px' }}>
        <IconButton>
          <HomeIcon fontSize="large" sx={{ color: "#878091" }} />
        </IconButton>

        <IconButton>
          <InfoIcon fontSize="large" sx={{ color: "#878091" }} />
        </IconButton>

        <IconButton>
          <ContactMailIcon fontSize="large" sx={{ color: "#878091" }} />
        </IconButton>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backgroundImage: 'linear-gradient(to bottom right, #230536, #030712)',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {gameOver ? (
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item sx={{ paddingBottom: "2rem" }}>
              <Typography variant="h4" color={gameResult === "win" ? "white" : "red"}>
                {gameResult === "win" ? (
                  <>
                    Congratulations! You won!
                    <Fireworks gameResult={gameResult} />
                  </>
                ) : (
                  "Game Over! You lost!"
                )}
              </Typography>
            </Grid>
            <Grid item>
              <MyButton buttonText="Back to Home" color="yellow" onClick={onClickHome} />
            </Grid>
          </Grid>
        ) : (
          <Grid container alignItems="left" sx={{ wrap: "nowrap", maxWidth: "50%" }}>
            <Grid item lg={7}>
              <WordHolder
                setGameOver={setGameOver}
                setGameResult={setGameResult}
                tries={tries}
                setTries={setTries}
                inputValue={inputValue}
                setInputValue={setInputValue}
                lettersArray={lettersArray}
                runTimer={runTimer}
                setRunTimer={setRunTimer}
                letterState={letterState}
                setLetterState={setLetterState}
                rightLetters={rightLetters}
              />
            </Grid>
            <Grid item lg={7}>
              <InputHolder
                letterState={letterState}
                setLetterState={setLetterState}
                setTries={setTries}
                tries={tries}
                lettersArray={lettersArray}
                setWrongLetters={setWrongLetters}
                wrongLetters={wrongLetters}
                rightLetters={rightLetters}
                setRightLetters={setRightLetters}
                inputValue={inputValue}
                setInputValue={setInputValue}
              />
            </Grid>
            <Grid item lg={7}>
              <HolderForWrongLetters wrongLetters={wrongLetters} />
            </Grid>
          </Grid>
        )}
      </Box>
    </Box>
  );
}

export default GamePage;
