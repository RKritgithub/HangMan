/**
 * 
 * @param {text} //word that has to be guessed
 * @param {usedLetters} //array of letters that has been guessed so far 
 * @returns 
 */

import { getAllCharaters } from "./MaskedTextUtility";

function MaskedText({text, usedLetters}){
    const letters = getAllCharaters(text, usedLetters).split('');
    
     return(
       <>
      {letters.map((letter, index) => {
        return(
            <span key={`letters-${index}`} className="inline-block mx-1">{letter}</span>
        )
      })}
       </>
     );
}

 

export default MaskedText;