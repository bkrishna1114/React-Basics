import React ,{useState,useEffect}from "react";
import "./calculator.css";


const Calculator = () => {
    const [input,setInput] = useState("");
    const handler = e =>{
        setInput(e.target.value);
    }
    const [result,setResult] = useState(0)
    const clickHandler = () => {
        try{
            const val = eval(input)
            setResult(val)
        }catch(error){
            setResult("Error")
        }
    }
  return (
    <div>
        <center>
            <input type="text" placeholder="Enter the expression" value={input} onChange={handler}/>
            <br/>
            <br/>
            <button onClick={clickHandler}>Result</button>
            <h4>Result is : {result}</h4>

        {/* Creating calculator */}
        <div className="calculator">
        <button onClick={() => { setInput(input + '1') }}>1</button>
        <button onClick={() => { setInput(input + '2') }}>2</button>
        <button onClick={() => { setInput(input + '3') }}>3</button>
        <button onClick={() => { setInput(''); setResult('0'); }}>cls</button>
        <button onClick={() => { setInput(input + '4') }}>4</button>
        <button onClick={() => { setInput(input + '5') }}>5</button>
        <button onClick={() => { setInput(input + '6') }}>6</button>
        <button onClick={() => { setInput(input + '-') }}>-</button>
        <button onClick={() => { setInput(input + '7') }}>7</button>
        <button onClick={() => { setInput(input + '8') }}>8</button>
        <button onClick={() => { setInput(input + '9') }}>9</button>
        <button onClick={() => { setInput(input + '+') }}>+</button>
        <button onClick={() => { setInput(input + '/')}}>/</button>
        <button onClick={() => { setInput(input + '0') }}>0</button>
        <button onClick={() => { setInput(input + '%') }}>%</button>
        <button onClick={() => { setInput(input + '*')}}>*</button>
        </div>

        </center>
    </div>
  )
}


export default Calculator;