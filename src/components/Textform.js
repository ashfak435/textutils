import React,{useState} from 'react'




export default function Textform(props) {
  const [text, setText] = useState('');
//   text="new text";//wrong way to change the text/state.
//   setText("new text"); //correct way to change state 
    const handleUpperClick=()=>{
        // console.log("Up handler clicked"+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted to upper case","success");
    }

    const handleLowerClick=()=>{
        // console.log("Up handler clicked"+text);
        let newText=text.toLocaleLowerCase();
        setText(newText);
        props.showAlert("Coverted to lower case","success");
    }

    const handleClearClick=()=>{
        // console.log("Up handler clicked"+text);
        let newText='';
        setText(newText);
        props.showAlert("successfully cleared","success");
    }


    const onChangeHandler=(event)=>{
        // console.log("onChange");
        setText(event.target.value);
    }

    return (
        <>
            <div className='container' style={{color: props.mode==='light'?'black':'white'}}>
                <div className="mb-3">
                    <h1>{props.heading} </h1>
                    <textarea className="form-control" onChange={onChangeHandler} style={{backgroundColor: props.mode==='light'?'white':'#404040',color: props.mode==='light'?'black':'white'}} value={text} id="myText" rows="8" placeholder="Enter text here.."></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpperClick} >To uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowerClick}>To LowerClick</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>To Clear</button>
               
            </div>
            <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
                <h1>Your text summary.</h1>
                <p>{text.split(/\s+/).filter(Boolean).length} words and {text.replace(/\s+/g, '').length} charactors.</p>
                <p>{0.008*text.split(/\s+/).filter(Boolean).length} Minutes to read.</p>
                <h2>Preview</h2>
                <p>{text===''?"Enter somthing in input-box to preview here....":text}</p>
            </div>
        </>
    );
}
