
import './App.css';
import {useState} from "react";
import jsPDF from "jspdf";
import logo from "./logo.svg";

function App() {
  const [target , setTarget]= useState(100);
  const [name , setName]= useState("");
const pdfDownloader =()=>{
    const doc = new jsPDF();
    const text = `  business model for ${name}
         
         to earn ${target}$  you have to do that things ... 
         
         1)
         2)
         3)
         `
    doc.text(text, 10, 10);
    doc.save("a4.pdf");
}

  return (
<div className="App">
  <div className="header container container-lg">
    <h1><span className="blue">B</span>usiness plan <span className="blue">G</span>enerator</h1>
    <img src={logo} alt={"logo"} />
  </div>
  <div className="container container-xs">
    <div className="welcome-text">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
  <div className="generator container container-lg">
    <div className="generator-text">
      <h2>Lorem ipsum dolor sit amet</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div className="generator-block">
      <div className="form-block">
        <label htmlFor={'business-name'}>Enter your business name</label>
        <input id={'business-name'} value={name} onChange={(e)=>{setName(e.target.value)}}  placeholder="" type="text"/>
      </div>
      <div className="form-block">
        <label htmlFor={'range'}>Coose your target profit per month</label>
        <div className="range">
          <input value={target} id={'range'} onChange={(e)=>{setTarget(e.target.value)}} min={1000} max={10000} type="range"/> 
          <span>{target}$</span>
        </div>
        
      </div>
      <button onClick={pdfDownloader} className="button"> generate plan</button>
    </div>
  </div>
</div>
  );
}

export default App;
