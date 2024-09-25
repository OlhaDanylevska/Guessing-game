import { Grid, Typography, Box } from "@mui/material";




const LetterCard = ({ letterState, letter }) => {
    //the states for letterState (pending, guessed, wrong)

    return (
        <>
            <Grid
                item
                sx={{
                    minWidth: "4rem",
                    height: "5.3rem",
                    backgroundImage:
                        letterState === "pending" &&
                        'linear-gradient(to bottom, rgba(217, 217, 217, 0), rgba(217, 217, 217, 0.8))',
                    backgroundColor: letterState === "guessed" ? "#77A100" : letterState === "wrong" ? "#E9400A" : undefined,
                    border: letterState === "guessed" ? "solid white 2px" : letterState === "wrong" ? "solid white 2px" : "none",

                }}
            >
                {(letterState === "guessed" || letterState === "wrong") && (
                    <Box
                        sx={{
                            width: "100%",
                            height: "100%",
                            color: "white",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Typography variant="h3" fontWeight="600">
                            {letter}
                        </Typography>
                    </Box>
                )}
            </Grid>
            {letterState === "pending" && (
                <Grid
                    item
                    sx={{
                        position: "absolute",
                        width: "4rem",
                        height: "0.4rem",
                        backgroundColor: "white",
                    }}
                />
            )}
        </>
    );
};

export default LetterCard;
