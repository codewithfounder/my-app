import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnchange = (event) => {
    setText(event.target.value);
  };
  const handleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Concerted to UpperCase', 'success');
  };
  const handleLoclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to LowerCase','success');
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges(); //that means selected view is remove and your text will copy
    props.showAlert('Copy text', 'success')
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert('handle space', 'success')
  };

  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert('Text clear', 'success')
  };
  return (
    <>
      <div className="container my-3"style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 className="mb-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>Convert to UpperCase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoclick}>Convert to LoverCase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>handle Extra space</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button>
      </div>

      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} <strong>Words and</strong> {text.length}{" "}<strong>Charectors</strong></p>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length * 0.008} <strong>Minuts to Read</strong></p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Nothing to preview!'}</p>
      </div>
    </>
  );
}
