//const url='https://gist.githubusercontent.com/ijmacdowell/8325491/raw/b39de3a6ba03205380caf5d58e0cae8a869ac36d/nouns.js';
const url='https://raw.githubusercontent.com/sakincse21/hangman-game/main/words.json';
const getWord= async () => {
    let response = await fetch(url);
    console.log(response);
}