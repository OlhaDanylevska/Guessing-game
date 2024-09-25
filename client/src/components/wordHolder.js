import React from "react";
import { Grid, Box } from "@mui/material";
import LetterCard from "./card";
import Timer from "./timer";
import Title from "./title";

const WordHolder = ({ setGameOver, setGameResult, tries, setTries, letterState, runTimer, setRunTimer, lettersArray, rightLetters }) => {

    console.log("lettersArray_dummyWordHolder", lettersArray);
    console.log("letterState", letterState);

    const handleTimeOut = () => {
        setGameOver(true);
        setGameResult("lose");
    };

    return (
        <div>
            <Box sx={{ display: "inline-block", minWidth: "30rem", mb: "2rem" }}>
                <Grid container justifyContent="space-between" alignItems="center" mb="1.5rem">
                    <Grid item>
                        <Grid container alignItems="flex-end">
                            <span style={{
                                fontFamily: "Keania One",
                                fontWeight: 200,
                                fontSize: "25pt",
                                marginRight: "0.5rem",
                                fontStyle: "normal",
                                color: "#FFC700"
                            }}>
                                {tries}
                            </span>
                            <Title title="tries left to guess" fontSize="16pt" />
                        </Grid>
                    </Grid>
                    <Timer lettersArray={lettersArray} runTimer={runTimer} setRunTimer={setRunTimer} handleTimeOut={handleTimeOut} />
                </Grid>
                <div style={{ display: "flex", flexDirection: 'row' }}>
                    {lettersArray.length > 0 && lettersArray.map((letter, index) => (
                        <Grid
                            container
                            alignItems="flex-end"
                            key={index}
                            sx={{
                                width: "4rem",
                                height: "5.3rem",
                                marginRight: "0.6rem",
                            }}
                        >
                            <LetterCard
                                letter={letter}
                                letterState={rightLetters.includes(letter) ? "guessed" : "pending"}
                            />
                        </Grid>
                    ))}
                </div>
            </Box>
        </div>
    );
};

export default WordHolder;
