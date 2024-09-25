# Guessing-game
# Guessing Game: Word Fever

## Description

**Word Fever** is a two-player guessing game where players compete to guess a secret word. The game is designed for real-time play, allowing both players to see the same screen and interact simultaneously. With an intuitive user interface and dynamic word selection, Word Fever provides an engaging and fun experience for players of all ages.

## Features

- **Two-Player Mode**: Play with a friend on the same screen, enhancing the competitive spirit.
- **Real-Time Updates**: Synchronization of game state in real-time ensures that both players are on the same page.
- **Dynamic Word Selection**: Words are randomly fetched from a server, providing a unique experience each game.
- **User-Friendly Interface**: Built using Material-UI for a clean and appealing design.
- **Responsive Design**: Fully responsive for various screen sizes, including desktops and tablets.

## Technologies Used

- **Frontend**: React, Material-UI
- **Backend**: Node.js, Express
- **Real-Time Communication**: WebSocket for live updates
- **Data Fetching**: Fetch API to retrieve random words from a server
- **Routing**: React Router for seamless navigation

## Installation

To get started with Word Fever, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/OlhaDanylevska/Guessing-game.git
Navigate to the project directory:

```bash
cd client
```
Install dependencies:

```bash
npm install
```
Start the development server:

```bash
npm start
```
Open your browser and navigate to http://localhost:3000.

How to Play
1. Start a New Game: Click on the "Start New Game" button to begin.
2. Guess the Word: Players take turns guessing letters to reveal the secret word. Each player has a limited number of tries.
3. Real-Time Interaction: Both players can see the current game state, including guessed letters and remaining tries.
4. Win or Lose: The game concludes when one player successfully guesses the word or runs out of tries. Enjoy the thrill!

Contributing
We welcome contributions to improve Word Fever! To contribute:

Fork the repository.
Create a new branch:
```bash
git checkout -b feature/YourFeature
```
```bash
git commit -m "Add some feature"
```
Push to the branch:

```bash
git push origin feature/YourFeature
```
Open a pull request to propose your changes.
