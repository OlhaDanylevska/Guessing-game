import { Grid } from "@mui/material";
import Subtitle from "./subtitle";
import LetterCard from "./card";

const HolderForWrongLetters = ({ wrongLetters }) => {
    return (
        <div>
            <Subtitle subtitle="The letters you didn't guess:" fontSize="16pt" />
            <Grid container direction="row" wrap="nowrap">
                {wrongLetters?.map((letter, index) => (
                    <Grid
                        item
                        key={index}
                        sx={{
                            width: "4rem",
                            height: "5.3rem",
                            marginRight: "0.6rem",
                        }}
                    >
                        <LetterCard letter={letter} letterState="wrong" />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default HolderForWrongLetters;
