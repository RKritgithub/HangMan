import { useState } from "react";
import Button from "../Buttons/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({onSubmit}){

const [value, setValue ] = useState('');

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
    <form className="flex" onSubmit = {handleFormSubmit}>
        <div className="mr-2 flex-1">
          <TextInput 
            label="Enter a word or a phrase"
            type="password"
            value={value}
            onChange={handleTextInputChange}
          />
        </div>
        <div className="flex">
          <Button
           text="OK"
           type="Submit"
          />
        </div>
    </form>
  );


}

export default TextInputForm;