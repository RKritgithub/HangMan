import Button from "./Componets/Buttons/Button";

function App(){
  return(
    <div>
     <h1 className="font-semibold text-3xl">Hello World</h1>
     <Button text="Primary" buttonType="Submit" styleType="primary" onClickHandler={()=> console.log("primary clicked")}/>
     <Button text="Secondary" buttonType="Okay" styleType="secondary"onClickHandler={()=> console.log("secondary clicked")}/> 
     <Button text="warning" buttonType="Okay" styleType="warning" onClickHandler={()=>console.log("warning clicked")}/> 
      <Button text="error" buttonType="Okay" styleType="error" onClickHandler={()=>console.log("error clicked")}/>
    </div>
  );
}

export default App;