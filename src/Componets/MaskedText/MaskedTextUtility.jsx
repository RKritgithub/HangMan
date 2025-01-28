export function getAllCharaters(word, usedLetters){
    //word => this is the word expected to be guessed
//this function will return a string with all the characters of the words that has been gussed so far
     usedLetters = usedLetters.map(letter => letter.toUpperCase());//['b','e'] ---> ['B','E']
    const guessedLetters = new Set(usedLetters);//{B,E}
    const characters = word.toUpperCase().split('').map(char => {
      if(guessedLetters.has(char)){
        return char;
      }
        return '-';
    });
    return characters.join('');
}


