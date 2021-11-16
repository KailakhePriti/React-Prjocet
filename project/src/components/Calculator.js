import React, {useState} from "react";
import "../css/Calculator.css";
const Calculator=()=>{
  const [result, setResult] = useState("");
  const handleClick=(e)=>{
        setResult(result.concat(e.target.name));
  }
  const clear=()=>{
    setResult("");
  }
  const backspace=()=>{
    //setResult(result.slice(0,result.length-1));
    setResult(result.slice(0,-1));
  }
  const calculate=()=>{
    setResult(eval(result).toString());
  }
  return (
    <>
    <div className="calculator">
      <form> 
        <input type="text" value={result} />
      </form>
      <div className="keypad">
        <button  className="highlight" onClick={clear} id="clear" >Clear</button>
        <button  className="highlight" onClick={backspace}>C</button>
        <button name="/" className="highlight" onClick={handleClick}>&divide;</button>
        <button name="7" id="box" onClick={handleClick}>7</button>
        <button name="8" id="box" onClick={handleClick}>8</button>
        <button name="9" id="box" onClick={handleClick}>9</button>
        <button name="*" className="highlight" onClick={handleClick}>&times;</button>
        <button name="4" id="box"  onClick={handleClick}>4</button>
        <button name="5" id="box" onClick={handleClick}>5</button>
        <button name="6"  id="box" onClick={handleClick}>6</button>
        <button name="-" className="highlight" onClick={handleClick}>&dash;</button> 
        <button name="1" id="box" onClick={handleClick}>1</button>
        <button name="2"   id="box" onClick={handleClick}>2</button>
        <button name="3"   id="box" onClick={handleClick}>3</button>
        <button name="+" className="highlight" onClick={handleClick}>+</button>
        <button name="0" id="box" onClick={handleClick}>0</button>
        <button name="." id="box"  onClick={handleClick}>.</button>
        <button className="highlight"  onClick={calculate} id="result">=</button>
      </div>
    </div>
    </>
  );
}
export default Calculator;
