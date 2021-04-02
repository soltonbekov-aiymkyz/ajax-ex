

// import { useEffect, useState } from 'react';
// import './App.css';
// import Comments from './components/Comments/Comments';
// import Posts from './components/Posts/Posts';
// function App() {
//   const [selectedPost, setSelectedPost] = useState(0);
//   console.log("[App.js] render");
//   return (
//     <div className="App">
//       {/* <button onClick={() => setMessage("Bye")}>Toggle</button> */}
//       <Posts setSelectedPost={setSelectedPost} />
//       {selectedPost}
//     </div>
//   );
// }
// export default App;
// import { useEffect, useState } from 'react';
// import './App.css';
// import Comments from './components/Comments/Comments';
// import Posts from './components/Posts/Posts';
// function App() {
//   const [selectedPost, setSelectedPost] = useState(0);
//   console.log("[App.js] render");
//   return (
//     <div className="App">
//       {/* <button onClick={() => setMessage("Bye")}>Toggle</button> */}
//       <Posts setSelectedPost={setSelectedPost} />
//       {selectedPost}
//     </div>
//   );
// }
// export default App;

import { useState } from 'react';
import './App.css';
import Albums from './components/Albums/Albums';
import Comments from './components/Comments/Comments';
import FullComment from './components/FullComment/FullComment';
import FullPost from './components/FullPost/FullPost';
import Pictures from './components/Pictures/Pictures';
import Posts from './components/Posts/Posts';

function App() {
  const [selectedPost, setSelectedPost] = useState(0);
  const [selectedAlbum, setSelectedAlbum] = useState(0);

  let fullPost = "Select a post!";
  if (selectedPost == 0) {
    fullPost = <FullPost id = {selectedPost} />
  }

  return (
    <div className="App">
      <Posts setSelectedPost={setSelectedPost} />
      <Comments setSelectedPost={setSelectedPost} />
      <FullPost id = {selectedPost}/>
      <FullComment id = {selectedPost} />
      <Albums setSelectedAlbum = {setSelectedAlbum}/>
      <Pictures albumId = {selectedAlbum} />
    </div>
  );
}

export default App;