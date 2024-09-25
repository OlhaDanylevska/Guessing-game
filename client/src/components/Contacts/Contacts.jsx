
import { Box, IconButton, FormControl, FormLabel, FormGroup, TextField } from '@mui/material';
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MyButton from "../button"
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';



function Contacts () {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function validateEmail (email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "" || emailRegex.test(email)) {
            return false
        }
        else {
            return true;
        }
          
    }

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "16px",
          height: "100vh",
          backgroundImage: "linear-gradient(to bottom right, #720E7A, #0F1A37)",
          color: "#fff",
        }}
      >
        <Box sx={{ display: "flex", gap: "16px" }}>
          <IconButton>
            <HomeIcon fontSize="large" />
          </IconButton>

          <IconButton>
            <InfoIcon fontSize="large" />
          </IconButton>

          <IconButton>
            <Link to="/contacts">
              <ContactMailIcon fontSize="large" />
            </Link>
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignSelf: "center",
            maxWidth: "50vh",
            marginTop: "3em",
          }}
        >
          <div
            id="iconLinks"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <GitHubIcon />
            <GitHubIcon />
            <GitHubIcon />
          </div>
          <Box sx={{ m: 2 }} />
          <form
            method="post"
            action="console.log(email, message)"
            style={{ width: "fit-content" }}
          >
            <FormLabel
              sx={{ color: "#FFC700", fontSize: "24px", fontWeight: "600" }}
            >
              If you want to get in touch or have any suggestions, please send a
              message and do not forget to give us your email if you want a
              response 😉
            </FormLabel>
            <Box sx={{ m: 5 }} />
            <FormGroup>
              <TextField
                label="email"
                color="secondary"
                focused
                error={validateEmail(email)}
                helperText={validateEmail(email) ? "invalid email" : ""}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Box sx={{ m: 2 }} />
              <TextField
                id="outlined-multiline-static"
                label="message"
                color="secondary"
                focused
                multiline
                rows={4}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Box sx={{ m: 2 }} />

              <MyButton
                sx={{
                  width: "50px !important",
                  alignSelf: "flex-end",
                }}
                id="submitBtn"
                type="submit"
                buttonText="SEND MESSAGE"
                color="gradient"
              />
            </FormGroup>
          </form>
        </Box>
      </Box>
    </div>
  );
}


export default Contacts;