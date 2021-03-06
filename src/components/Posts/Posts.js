
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import classes from "./Posts.module.css";
// const Posts = ({ setSelectedPost }) => {
//   const [posts, setPosts] = useState([]);
//   console.log("[Posts.js] render");
//   // Выводится только при первом выводе
//   useEffect(() => {
//     console.log("[Posts.js] render with useEffect");
//   }, []);
//   // Выводится только при изменении message
//   // useEffect(() => {
//   //   console.log("[Posts.js] render with useEffect depeding on message variable");
//   // }, [message]);
//   // Для задержки выполнения чего-то
//   useEffect(() => {
//     setTimeout(() => console.log("Hello from Posts"), 2000);
//   }, []);
//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => {
//         const posts = response.data;
//         const only5posts = posts.slice(0, 5);
//         setPosts(only5posts);
//       });
//   }, []);
//   const results = posts.map((post) => (
//     <article key={post.id} onClick={() => setSelectedPost(post.id)}>
//       <h2>{post.title}</h2>
//       <p>{post.body}</p>
//     </article>
//   ));
//   return (
//     <div className={classes.Posts}>
//       {results.length > 0 ? results : "Loading..."}
//     </div>
//   );
// }
// export default Posts;
import axios from 'axios';
import { useEffect, useState } from 'react';
import classes from "./Posts.module.css";
const Posts = ({ setSelectedPost }) => {
  const [posts, setPosts] = useState([]);
  console.log("[Posts.js] render");
  // Выводится только при первом выводе
  useEffect(() => {
    console.log("[Posts.js] render with useEffect");
  }, []);
  // Выводится только при изменении message
  // useEffect(() => {
  //   console.log("[Posts.js] render with useEffect depeding on message variable");
  // }, [message]);
  // Для задержки выполнения чего-то
  useEffect(() => {
    setTimeout(() => console.log("Hello from Posts"), 2000);
  }, []);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        const posts = response.data;
        const only5posts = posts.slice(0, 5);
        setPosts(only5posts);
      });
  }, []);
  const results = posts.map((post) => (
    <article key={post.id} onClick={() => setSelectedPost(post.id)}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </article>
  ));
  return (
    <div className={classes.Posts}>
      {results.length > 0 ? results : "Loading..."}
    </div>
  );
}
export default Posts;

