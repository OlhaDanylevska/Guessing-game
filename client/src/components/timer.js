import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

const Timer = ({ runTimer, setRunTimer, lettersArray, handleTimeOut }) => {
    const [countDown, setCountDown] = useState(0);

    useEffect(() => {
        let timerId;

        if (runTimer) {
            // Determine the initial countdown based on the length of lettersArray
            let initialTime = 0;

            if (lettersArray.length < 5) {
                initialTime = 2 * 60; // 2 minutes in seconds
            } else if (lettersArray.length >= 5 && lettersArray.length <= 8) {
                initialTime = 4 * 60; // 4 minutes in seconds
            } else if (lettersArray.length > 8) {
                initialTime = 6 * 60; // 6 minutes in seconds
            }

            setCountDown(initialTime); // Set the countdown to the calculated initial time

            timerId = setInterval(() => {
                setCountDown((prevCountDown) => {
                    if (prevCountDown <= 0) {
                        clearInterval(timerId);
                        setRunTimer(false); // Stop the timer when it expires
                        handleTimeOut(); // Notify parent component about timeout
                        return 0; // Ensure the countdown doesn't go negative
                    }
                    return prevCountDown - 1;
                });
            }, 1000);
        } else {
            clearInterval(timerId); // Clear interval when timer is stopped
        }

        return () => clearInterval(timerId); // Cleanup the interval on component unmount or when timer is stopped
    }, [runTimer, lettersArray.length]); // Only re-run when these dependencies change

    const seconds = String(countDown % 60).padStart(2, '0');
    const minutes = String(Math.floor(countDown / 60)).padStart(2, '0');

    return (
        <Box mr="0.5rem">
            <Typography sx={{
                fontFamily: "Keania One",
                fontWeight: 200,
                fontSize: "25pt",
                fontStyle: "normal",
                color: "#FFC700"
            }}>
                {minutes}:{seconds}
            </Typography>
        </Box>
    );
};

export default Timer;
