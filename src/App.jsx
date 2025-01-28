import { Route, Routes } from "react-router-dom";
// import TextInputForm from "./Componets/TextInputForm/TextInputForm";
// import TextInputFormContainer from "./Componets/TextInputForm/TextInputFormContainer";
import PlayGame from "./Pages/PlayGame/PlayGame";
import StartGame from "./Pages/StartGame/StartGame";

function App(){
  return(
    // <div>
    //  <h1 className="font-semibold text-3xl">Welcome to Hangman</h1>
    //  <TextInputFormContainer onSubmit={(value)=>console.log("value coming from the hidden form is", value)} />
    // </div>
   <>
   <div>
    Navbar
   </div>
   
    <Routes>
      <Route path="/play" element = {<PlayGame />} />
      <Route path = "/start" element = {<StartGame />}  />
      <Route path = "*" element = {<div>NOT FOUND</div>}  />

    </Routes>
   </>
  );
}

export default App;