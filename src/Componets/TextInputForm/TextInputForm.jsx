//Presentation component for TextInputForm
import Button from "../Buttons/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({handleFormSubmit, handleTextInputChange, value, inputType, setInputType  }){

  return(
    <form className="flex items-end" onSubmit = {handleFormSubmit}>
        <div className="mr-2 flex-1">
          <TextInput 
            label="Enter a word or a phrase"
            type={inputType}
            value={value}
            onChange={handleTextInputChange}
          />
        </div>
        <div>
          <Button 
           styleType="warning"
           text = {inputType == 'password' ? 'Show' : 'Hide'}
           onClickHandler={()=> setInputType(inputType == 'password' ? 'text' : 'password')}
          
          />
        </div>
        <div>
          <Button
           text="OK"
           buttonType="Submit"
          />
        </div>
    </form>
  );


}

export default TextInputForm;