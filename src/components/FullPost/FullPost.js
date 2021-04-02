
// import axios from "axios";
// import { useEffect, useState } from "react";
// import Comments from "../Comments/Comments";
// import classes from "./FullPost.module.css";
// import Author from "../Author/Author"
// const FullPost = ({ id }) => {
//   const [post, setPost] = useState({
//     title: "Loading...",
//     body: "Wait for it!",
//     userId:0
//   });
//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
//       .then((response) => {
//         console.log(response);
//         const post = response.data;
//         setPost(post);
//       });
//   }, [id]);
//   return (
//     <main className={classes.FullPost}>
//       <h1>{post.title}</h1>
//       <Author  userId={ post.userId } />
//       <p>{post.body}</p>
//       <Comments postId={id} />
//     </main>
//   );
// }
// export default FullPost;


import axios from "axios";
import { useEffect, useState } from "react";
import Author from "../Author/Author";
import classes from "./FullPost.module.css";

const FullPost = ({ id }) => {

    const[post, setPost] = useState({
        title: "",
        userId: "",
        body: "",
    })

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                const post = response.data;
            setPost(post)
        });
    }, [id]);
    
    return ( 
        <main className = {classes.FullPost}>
            <h1>{post.title}</h1>
            <Author userid = {post.userId}/>
            <p>{post.body}</p>
        </main>
    );
}
 
export default FullPost;