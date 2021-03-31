import axios from 'axios';
import { useEffect, useState } from 'react';
import classes from "./Posts.module.css";
const Posts = ({ message }) => {
  const [posts, setPosts] = useState([]);
  console.log("[Posts.js] render");
  // Выводится только при первом выводе
  useEffect(() => {
    console.log("[Posts.js] render with useEffect");
  }, []);
  // Выводится только при изменении message
  useEffect(() => {
    console.log("[Posts.js] render with useEffect depeding on message variable");
  }, [message]);
  // Для задержки выполнения чего-то
  useEffect(() => {
    setTimeout(() => console.log("Hello from Posts"), 2000);
  }, []);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
      });
  }, []);
  return (
    <div className={classes.Posts}>
      <article>
        <h2>title</h2>
        <p>body</p>
      </article>
    </div>
  );
}
export default Posts;