import axios from "axios";
import { useEffect, useState } from "react";
import Comments from "../Comments/Comments";
import classes from "./FullPost.module.css";
const FullPost = ({ id }) => {
  const [post, setPost] = useState({
    title: "Loading...",
    body: "Wait for it!",
  });
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then((response) => {
        console.log(response);
        const post = response.data;
        setPost(post);
      });
  }, [id]);
  return (
    <main className={classes.FullPost}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Comments postId={id} />
    </main>
  );
}
export default FullPost;
