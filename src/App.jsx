import TextInputForm from "./Componets/TextInputForm/TextInputForm";

function App(){
  return(
    <div>
     <h1 className="font-semibold text-3xl">Welcome to Hangman</h1>
     <TextInputForm onSubmit={(value)=>console.log("value coming from the hidden form is", value)} />
    </div>
  );
}

export default App;