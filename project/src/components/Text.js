
import PropTypes from 'prop-types';
import '../css/Text.css';
import React,{useState} from 'react';
function Text(props) {
    const [text,setText]=useState('');
    
    //  text="Enter your text";      wrong way to change the state
    // setText("Enter your text");  right way to change the state
    const handleUpClick=()=>{
        console.log("Uppercase was clicked");
        // setText("You have clicked handUpClicked")
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted into uppercase","success")
       
    }
    const handleLowClick=()=>{
        console.log("Lowercase was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted into lowercase","success")

    }
    
    const handleClearClick=()=>{
        console.log("Lowercase was clicked");
        let newText='';
        setText(newText);
        props.showAlert("Text has been cleared.","success")

        

    }
    const handleOnChange=(event)=>{

        console.log("On change");
        setText(event.target.value);
        
    }
    const handleCopy=()=>{
        //console.log("I am copy");
        // var text=document.getElementById("myBox");
        // text.select();
        // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard","Success")
    }
    const handleExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(""));
        props.showAlert("Removed extra spaces","Success")

    }
    return (
        <div className="container">
            <h1 className="heading" style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
                <div className="mb-3 ">
    
                        <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8"  style={{backgroundColor:props.mode==='dark'?'#dcdcdc':'white',color:props.mode==='dark'?'black':'black'}}></textarea>

                
                </div>
                <div className="button-block">
                       <button className="button mx-1 my-1" onClick={handleUpClick} >Covert To Uppercase</button>
                        <button className="button mx-1 my-1" onClick={handleLowClick}>Covert To Lowercase</button>
                        <button className="button mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                        <button className="button mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                        <button className="button " onClick={handleExtraSpace}  >Remove Extra Space</button>
                </div>
                <div className="container1 my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                    <h1>Your Text Summary</h1>
                    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").length} Minutes Read</p>
                    <h2>Preview</h2>
                    <div className="container">
                        <p  className="preview-text" style={{color: props.mode==='dark'?'white':'black'}}>{text.length>0?text:"Enter something in the text box above to preview" }</p>
                    </div>
                    
                </div>
                        
        </div>
    )
}

Text.propTypes={
    heading: PropTypes.string
}
export default Text;
