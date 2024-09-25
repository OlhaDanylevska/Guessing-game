
import { Avatar, Box, Grid, IconButton, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MyButton from "../button"
import { Link } from 'react-router-dom';
import Logo from "./../../assets/logo3.png"
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Home({ setRunTimer, setTries, setLettersArray, setLetterState, setRightLetters, setWrongLetters, setGameResult, setGameOver }) {

  const [isLoading, setIsLoading] = useState(false);
  const [randomWordSt, setRandomWordSt] = useState("")
  const [error, setError] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    fetch('https://guessing-word-game-september.onrender.com/default-words/random')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        if (data && Array.isArray(data) && data.length > 0 && data[0].words) {
          setRandomWordSt(data[0].words);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error('Fetch error:', error);
        setError('Failed to fetch data. Please try again later.');
      });
  }, []);

  const handleStart = () => {
    if (!error && randomWordSt.length > 0) {
      setLetterState("pending");
      setRunTimer(true);
      setRightLetters([]);
      setWrongLetters([]);
      setGameOver(false)
      setGameResult("")
      console.log("randomWordSt", randomWordSt.toUpperCase().split(""))
      setLettersArray(randomWordSt.toUpperCase().split(""));
      setTries(randomWordSt.length * 2)
      navigate("/start-new-game");
    }
  };

  return (
    <div>
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

        <Grid container direction="column" alignItems="center" sx={{ textAlign: 'center', marginTop: { lg: '2rem', xs: "4rem" } }}>
          <Avatar
            alt="Your Logo"
            src={Logo}
            sx={{ width: { lg: '34rem', xs: "20rem" }, height: 'auto', borderRadius: 0 }}

          />
          <Box sx={{ display: 'inline-block', border: { lg: "solid #FFC700 1px", xs: "solid #FFC700 1px" }, p: "0.5rem 1rem 0.5rem 1rem", borderRadius: "3rem" }}>
            <Typography sx={{ fontSize: { lg: "1.2rem", xs: "0.8rem" }, fontWeight: 400, color: "#FFC700" }} >
              GUESS THE SECRET WORD
            </Typography>
          </Box>
        </Grid>

        {error && (
          <Grid container justifyContent="center" mt="2rem">
            <Typography sx={{ fontSize: { lg: "16pt", xs: "12pt" }, color: "red", textAlign: "center" }}>
              {error}
            </Typography>
          </Grid>
        )}

        <Grid container justifyContent="center" >
          <Grid item lg={7} mt="2rem" >
            <Typography sx={{ fontSize: { lg: "14pt", xs: "10pt" } }} textAlign="center">
              Welcome to <span style={{ color: "#FFC700" }}>Word Fever</span>, where words come to life! Unleash your creativity, challenge your friends, and dive into a world of linguistic excitement. Start a new game or join the fun now!
            </Typography>
          </Grid>
          <Grid item lg={8} sx={{ mt: { xs: "5rem" } }} >
            <Grid container justifyContent="center" gap="1rem">
              <MyButton buttonText="Start New Game" color="gradient" onClick={handleStart} />
              <MyButton disabled={isLoading} buttonText="Join the game" color="gradient" />
            </Grid>
          </Grid>
        </Grid>
      </Box>

    </div >
  );
}

export default Home;
