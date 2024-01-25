import React from 'react'
import { useState } from 'react'



export default function TextForm(props) {

    const [text, setText] = useState("");
    // it should be always inside the function

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        if(newText.length > 0) {
            props.showAlert("Coverted to upper case", "success");
        }
    }

    const handlelowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        if(newText.length > 0) {
            props.showAlert("Coverted to lower case", "success");
        }
    }


    const clickToClear = () => {
        let textLength = text.length;
        if(textLength > 0) {
            setText("");
            props.showAlert("Text has been cleared", "success");
        } 
    }

    const clickToCopy = (event) => {
        // let text = document.getElementById("byBox");
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges()

        props.showAlert("Text has been copied to clipborad", "success");

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Extra spaces have been removed from the text", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

  return (

    <div className='container' style = {{color : props.mode === 'dark' ? 'white' : 'black'}}>
        <h1 className='my-3'>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control bordered" value={text} onChange = {handleOnChange} id="byBox" style = {{backgroundColor : props.mode === 'dark' ? '#a4a6ad' : 'white', color : props.mode === 'dark' ? 'white' : 'black', caretColor : props.mode === 'dark' ? 'white': 'auto', cursor : props.mode === 'dark' ? 'auto': 'auto'} } rows="8"></textarea>

            <div className='container d-md-flex justify-content-center my-4'>

                <button className='btn btn-primary me-3 my-2' disabled = {text.length === 0} onClick={handleUpClick}> Convert to Uppercase</button>

                <button className='btn btn-primary me-3 my-2' disabled = {text.length === 0} onClick={handlelowerClick}> Convert to Lowercase</button>

                <button className='btn btn-primary me-3 my-2' disabled = {text.length === 0} onClick={clickToClear}>Clear Text</button>

                <button className='btn btn-primary me-3 my-2' disabled = {text.length === 0} onClick={clickToCopy}>Copy Text</button>

                <button className='btn btn-primary my-2' disabled = {text.length === 0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            </div>

            <div className='container' style = {{color : props.mode === 'dark' ? 'white' : 'black'}}>
                <h2>
                    Your Text Summary
                </h2>

                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>

                <p>
                    {0.008 * text.split(' ').filter((element) => { return element.length !== 0 }).length} Minutes read
                </p>

                <h2>
                    Preview
                </h2>

                <p>
                    {text.length > 0 ? text : "Enter some text in the above textbox to preview it here."}
                </p>


            </div>
        </div>

        
      
    </div>
  )
}
