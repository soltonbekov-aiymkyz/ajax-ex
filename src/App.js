
import { useEffect, useState } from 'react';
import './App.css';
import Posts from './components/Posts/Posts';
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
