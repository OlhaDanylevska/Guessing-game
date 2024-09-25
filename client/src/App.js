import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import GamePage from "./components/Game page/GamePage";
import Contacts from "./components/Contacts/Contacts";

function App() {
  const [runTimer, setRunTimer] = useState(false);
  const [rightLetters, setRightLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [lettersArray, setLettersArray] = useState([]);
  const [gameResult, setGameResult] = useState("");
  const [gameOver, setGameOver] = useState(false);
  let [tries, setTries] = useState(0);
  const [letterState, setLetterState] = useState("wrong");

  useEffect(() => {
    const savedState = localStorage.getItem("gameState");
    if (savedState) {
      const {
        lettersArray,
        rightLetters,
        wrongLetters,
        tries,
        gameOver,
        gameResult,
      } = JSON.parse(savedState);
      setLettersArray(lettersArray);
      setRightLetters(rightLetters);
      setWrongLetters(wrongLetters);
      setTries(tries);
      setGameOver(gameOver);
      setGameResult(gameResult);
    }
  }, []);

  useEffect(() => {
    const gameState = {
      lettersArray,
      rightLetters,
      wrongLetters,
      tries,
      gameOver,
      gameResult,
    };
    localStorage.setItem("gameState", JSON.stringify(gameState));
  }, [lettersArray, rightLetters, wrongLetters, tries, gameOver, gameResult]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/start-new-game"
            element={
              <GamePage
                gameResult={gameResult}
                setGameResult={setGameResult}
                gameOver={gameOver}
                setGameOver={setGameOver}
                tries={tries}
                setTries={setTries}
                lettersArray={lettersArray}
                runTimer={runTimer}
                letterState={letterState}
                setLetterState={setLetterState}
                setRunTimer={setRunTimer}
                setRightLetters={setRightLetters}
                setWrongLetters={setWrongLetters}
                wrongLetters={wrongLetters}
                rightLetters={rightLetters}
              />
            }
          />

          <Route
            path="/"
            element={
              <Home
                setGameOver={setGameOver}
                setGameResult={setGameResult}
                setTries={setTries}
                setLettersArray={setLettersArray}
                setRightLetters={setRightLetters}
                setWrongLetters={setWrongLetters}
                letterState={letterState}
                setLetterState={setLetterState}
                runTimer={runTimer}
                setRunTimer={setRunTimer}
              />
            }
          />
          <Route path="/contacts" element={<Contacts />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
