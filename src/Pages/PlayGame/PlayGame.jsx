import { Link } from "react-router-dom";
import MaskedText from "../../Componets/MaskedText/MaskedText";

function PlayGame(){
     return(

        <div>
            <h1>Play Game</h1>
            <MaskedText text="humble" usedLetters={['b','e']} />
            <hr />
            <Link to={'/start'}> Start Game</Link>
        </div>
     );

}

export default PlayGame;