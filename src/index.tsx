import ReactDOM from "react-dom/client";
import { useState } from "react";
import CodeEditor from './components/code-editor';
import Preview from './components/preview';
import bundler from "./bundler";


const App = () => {
   
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');  
  
  const onClick = async () => { 
    const output = await bundler(input);
    setCode(output);
  }  

  return (
    <div>
      <CodeEditor
        initialValue='const a = 1'
        onChange={(value) => setInput(value)}
      />      
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <Preview code={code} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(  
    <App />  
);




//started 12 2

