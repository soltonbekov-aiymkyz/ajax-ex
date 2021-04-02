import classes from "./Comments.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
          .then((response) => {
            setComments(response.data.slice(0, 10));
          });
      }, []);
    
      const results = comments.map((comment) => (
        <article key = {comment.id}>
            <h2>{comment.name}</h2>
            <p>{comment.body}</p>
        </article>
      ))
    return ( 
        <div className = {classes.Comments}>
            {results}
        </div>
    );
}
 
export default Comments;