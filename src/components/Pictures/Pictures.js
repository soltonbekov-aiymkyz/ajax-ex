

// import axios from "axios";
// import { useEffect, useState } from "react";
// import classes from "./Pictures.module.css";
// const Pictures = ({ postId, style }) => {
//   const [comments, setComments] = useState([]);
//   useEffect(() => {
//     axios
//       .get(https://jsonplaceholder.typicode.com/photos)
//       .then((response) => {
//         const posts = response.data;
//         const only5posts = posts.slice(0, 5);
//         setComments(only5posts);
//       });
//   }, [postId]);

//   const result = comments.map((comments) => (
//     <article style={style} key={comments.id}>
//       <img src={comments.thumbnailUrl} />
//     </article>
//   ));
//   return <div className={classes.Pictures}>{result}</div>;
// };

// export default Pictures;






import classes from "./Pictures.module.css";
import {useState , useEffect} from "react";
import axios from "axios";

const Pictures = ({albumId}) => {
    const [pictures , setPictures] = useState([])
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then((response) => {
                const pictures = response.data;
            setPictures(pictures);
        });
    }, [albumId]);
    const results = pictures.map((picture) => (
        <div key={picture.id} onClick={() => setPictures(picture.id)}>
            <img src={picture.thumbnailUrl} />
        </div>
    ));
    return ( <div className={classes.Pictures}>
        {results}
    </div>  
    );
}
 
export default Pictures;










