import { useState } from "react";
import TextInputForm from "./TextInputForm";

//container component for TextInputForm
function TextInputFormContainer({onSubmit}){
const [value, setValue ] = useState('');
const [inputType, setInputType] = useState('password');

function handleFormSubmit(event){
  event.preventDefault();
  console.log("Form is Submitted", value);
  onSubmit ?. (value); //if onSubmit is defined, call it with the value(state variable);
}

function handleTextInputChange(event){
  console.log("textInput is changed");
  console.log(event.target.value);
  setValue(event.target.value);//whenever i will type anything in the input field it will update the value
}
return(
//calling the presentation layer
    <TextInputForm 
     handleFormSubmit = {handleFormSubmit}
     handleTextInputChange = {handleTextInputChange}
     value = {value}
     inputType = {inputType}
     setInputType = {setInputType}

    />
)


}

export default TextInputFormContainer;