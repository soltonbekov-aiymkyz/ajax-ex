

import { useEffect, useState } from 'react';
import './App.css';
import Comments from './components/Comments/Comments';
import Posts from './components/Posts/Posts';
function App() {
  const [selectedPost, setSelectedPost] = useState(0);
  console.log("[App.js] render");
  return (
    <div className="App">
      {/* <button onClick={() => setMessage("Bye")}>Toggle</button> */}
      <Posts setSelectedPost={setSelectedPost} />
      {selectedPost}
    </div>
  );
}
export default App;


