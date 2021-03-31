
import { useEffect, useState } from 'react';
import './App.css';
import Posts from './components/Posts/Posts';
import Coments from './components/Comments/Comments'
function App() {
  const [message, setMessage] = useState("Hello");
  console.log("[App.js] render");
  return (
    <div className="App">
      {message}
      <button onClick={() => setMessage("Bye")}>Toggle</button>
      <Posts message={message} />
    </div>
  );
}
export default App;
