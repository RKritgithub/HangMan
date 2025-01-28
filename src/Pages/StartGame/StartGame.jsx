import { useNavigate } from "react-router-dom";
import TextInputForm from "../../Componets/TextInputForm/TextInputForm";
import TextInputFormContainer from "../../Componets/TextInputForm/TextInputFormContainer";

function StartGame(){

       const navigate =  useNavigate();//this create the navigator object
    function handleSubmit(){
           navigate('/play')//navigator takes the route and moves us there
    }
     return(

        <div>
            <h1>Start Game</h1>
            <TextInputFormContainer onSubmit={handleSubmit}/>
        </div>
     );

}

export default StartGame;