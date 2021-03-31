import axios from 'axios';
import { useEffect, useState } from 'react';
import classes from './Comments.module.css';
const Comments = ({ message }) => {
  const [comments, setComents] = useState([]);
  console.log("[Comments.js] render");

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
      const comments =response.data;
      const only10posts = comentss.slice(0,10)
      setComments(only10posts)
      });
  }, []);
  
  const results = comments.map((comment)=>(
   <span key={comment.id}>
     <h2>{comments.name}</h2>
      <p>{comments.id}</p>
   </span>
  ))


  return (
    <div className={classes.Commentss}>
    {results.length > 0 ? results : "Loading..."}
    </div>
  );
}
export default Comments;