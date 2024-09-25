const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");

app.use(express.json());
app.use(cors());

const dotenv = require("dotenv");
dotenv.config();

const { Pool } = require("pg");

const pool = new Pool({
    connectionString: process.env.DB_URL,
    ssl: { rejectUnauthorized: false },
});

pool.connect((err, client, done) => {
    if (err) {
        console.error("Error connecting to the database:", err);
    } else {
        client.release();
    }
});

pool.on("error", (err, client) => {
    console.error("Unexpected error on idle client", err);
    process.exit(-1);
});

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send({ express: "Your Backend Service is Running" });
});

app.get("/default-words", (req, res) => {
    pool.query("SELECT * FROM default_words")
        .then((result) => {
            console.log(result.rows);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send("Internal server error");
        });
});

//get rundom word 1-83
app.get("/default-words/random", (req, res) => {
    let wordId = Math.floor(Math.random() * 83) + 1;

    pool.query("SELECT * FROM default_words WHERE id = $1", [wordId])
        .then((result) => {
            console.log(result.rows);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send("Internal server error");
        });
});




//add new word from player
app.post("/players-words", (req, res) => {
    const passWord = req.body.password;
    const words = req.body.words;
    const created_time = req.body.created_time;
    const rightLetter = req.body.right_letter;
    const wrongLetter = req.body.wrong_letter;

    if (!passWord) {
        sendErrorResponse(res, 400, "Share code field is missing");
    } else if (!words) {
        sendErrorResponse(res, 400, "Word field is missing");
    } else if (!created_time) {
        sendErrorResponse(res, 400, "Created time field is missing");
    } else {
        insertNewWord(res, passWord, words, created_time, rightLetter, wrongLetter);
    }
});

function sendErrorResponse(res, statusCode, message) {
    res.status(statusCode).send(message);
}

function insertNewWord(res, passWord, words, created_time, rightLetter, wrongLetter) {
    const query = `
        INSERT INTO players_words (password, words, created_time, right_letter, wrong_letter)
        VALUES ($1, $2, $3, $4, $5)
    `;

    pool.query(query, [passWord, words, created_time, rightLetter, wrongLetter])
        .then(() => {
            res.status(200).send("New word created");
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("Error creating a new word");
        });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
