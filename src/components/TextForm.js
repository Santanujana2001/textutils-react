import React, { useState } from 'react';

export default function TextForm(props) {
   const [text, setText] = useState("");
   
    const handleOnChange = (event)=>{
        setText(event.target.value);
        // console.log("change");
    }
    const handleloClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        // console.log("button click");
    }
    // this is the function for speaking the word
    const handleSpeak = () => {
      if(text.length===0){
        let msg = new SpeechSynthesisUtterance();
        msg.text = "Hello i'm Santanu";
        window.speechSynthesis.speak(msg);
      }
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    }
    const handleDelete = () =>{
      setText("");
    }
    const handleCopy=()=>{
      // let txt = document.getElementById("myBox")
      // txt.select();
      navigator.clipboard.writeText(text);
      // document.getSelection().removeAllRanges()
      if(text!==""){
        alert("copied")
      }
    }
    const handleSpace = () => {
      let t = text.split(/[ ]+/);
      setText(t.join(" "))
    }
    const handleRev = () =>{
      var t=reverse(text)
      setText(t);
      function reverse(s){
        return s.split("").reverse().join("");
      }
    }
    const handleVow=()=>{
      function getVowels(str) {
        var m = str.match(/[aeiou]/gi);
        return m === null ? 0 : m.length;
      }
      setText("Number of Vowel : "+getVowels(text).toString())
    }
    const handleCon=()=>{
      function getVowels(str) {
        var m = str.match(/[aeiou ]/gi);
        return text.length-m.length;
      }
      setText("Number of Consonant : "+getVowels(text).toString())
    }
  return (
    <>
    <div className="container" style={{color:props.mode ==='light'?'black':'white'}}>
     <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" rows={8} value={text} onChange={handleOnChange} placeholder="Hello i'm Santanu" style={{backgroundColor:props.mode ==='dark'?'black':'white',color:props.mode ==='light'?'black':'white'}}/>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClick}>Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleloClick}>Lowercase</button>
        <button className="btn btn-warning mx-1 my-1" onClick={handleSpeak}>Speak</button>
        <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleDelete}>Clear</button>
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSpace}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleRev}>Reverse</button>
        <button disabled={text.length===0} className="btn btn-warning mx-1 my-1" onClick={handleVow}>Vowel count</button>
        <button disabled={text.length===0} className="btn btn-warning mx-1 my-1" onClick={handleCon}>Consonant count</button>
    </div>
    <div className="container my-3" style={{color:props.mode ==='light'?'black':'white'}}>
        <h2>Your text contains</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.replace(/\s/g,"").length} letters</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Your text will be previewed here"}</p>
    </div>
    </>
  )
}
