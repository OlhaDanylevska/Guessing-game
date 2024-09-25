import { Button, Typography } from "@mui/material"

const MyButton = ({ buttonText, color, onClick }) => {

    return (
        <Button sx={{
            width: "auto",
            height: "3.2rem",
            backgroundColor: color === "yellow" && "#FFC700",
            backgroundImage:
                color === "gradient" && "linear-gradient(to bottom right, #EAF, #76E6FF)",
            pl: "1.6rem",
            pr: "1.6rem",
            borderRadius: "2rem",
            border: "solid white 2px",
            "&:hover": {
                ...(color === "yellow" && {
                    "& .MuiTypography-root": {
                        color: "#FFC700",
                    },
                }),
            },
        }}
            onClick={onClick}>
            <Typography variant="h6" sx={{ color: "#092832", fontWeight: "600" }}>
                {buttonText}
            </Typography>
        </Button>
    )
}

export default MyButton

// < MyButton buttonText = "Confirm" color = "yellow" onClick={() => handleConfirm()} />
//     <MyButton buttonText="Start New Game" color="gradient" onClick={() => handleStartNewGame()} />
//     <MyButton buttonText="Join the game" color="gradient" onClick={() => handleJoinGame()}  />