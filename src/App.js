
import './App.css';
import {useState} from "react";
import jsPDF from "jspdf";

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
        <h1>Buisnes plan Generator</h1>
      <input value={name} onChange={(e)=>{setName(e.target.value)}}  placeholder={'enter your business name'} type="text"/>
      <hr/>
        <p>coose your target profit profit per month   </p>
        <input value={target} onChange={(e)=>{setTarget(e.target.value)}} min={1000} max={10000} type="range"/> <span> {target}$</span>
<hr/>
        <button onClick={pdfDownloader} className="button"> generate plan</button>

    </div>
  );
}

export default App;
