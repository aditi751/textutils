import React, {useState} from 'react'


export default function TextForm(props) {

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!", "success")
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase!", "success")
  }

  const handleClearClick = () => {
    let newText = " ";
    setText(newText)
    props.showAlert("Text Cleared!", "success")
  }

  const handleInverseClick = () => {
    let newText = text.split("").reduce((acc, char) => char + acc, "");
    setText(newText)
    props.showAlert("Text inverted!", "success")
  }

  const handleCopy = () => {
    var text = document.getElementById("MyBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied!", "success")
  }

  const handleExtraSpaces = () =>{
    let newText= text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed!", "success")
  }

  const [text, setText] = useState(" ");
  return (
    <>
    <div className='container' style={{color:props.mode === 'dark'?'white':'black' }}>
      <div className="mb-3">
      <h1>{props.heading}</h1>
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'#08061c':'white' , color:props.mode === 'dark'?'white':'black'}} id="MyBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert Uppercase</button>
      <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert Lowercase</button>
      <button className="btn btn-primary " onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-3" onClick={handleInverseClick}>Inverse Text</button>
      <button className="btn btn-primary" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className='container my-3' style={{color:props.mode === 'dark'?'white':'black' }}> 
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} Words , {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
    </div>
    </>
  )
}
