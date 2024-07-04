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
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges()
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
      <button disabled={text.length===0} className="btn btn-primary  my-1" onClick={handleUpClick}>Convert Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleLoClick}>Convert Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary  my-1" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleInverseClick}>Inverse Text</button>
      <button disabled={text.length===0} className="btn btn-primary my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-3 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className='container my-3' style={{color:props.mode === 'dark'?'white':'black' }}> 
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").filter(element => element.length!==0).length} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").filter(element => element.length!==0).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
