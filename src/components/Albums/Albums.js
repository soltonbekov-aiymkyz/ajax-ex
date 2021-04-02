
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import classes from "./Albums.module.css";
// const Albums = ({ setSelectedAlbums }) => {
//     const [albums, setAlbums] = useState({
//         title: "Loading...",

//     });
//     useEffect(() => {
//         axios.get('https://jsonplaceholder.typicode.com/posts')
//             .then((response) => {
//                 const albums = response.data;
//                 const only5posts = posts.slice(0, 5);
//                 setAlbums(only5posts);
//             });
//     }, []);



//     return (
//         <div className={classes.Posts}>
//             {results.length > 0 ? results : "Loading..."}
//         </div>
//     );
// }
// export default Posts;




import axios from "axios";

import { useEffect, useState } from "react";
import classes from "./Author.module.css";
const Albums = ({ setSelectedAlbums }) =>{
    
  const [albums, setAlbums] = useState ({
    title:"loading"
  }
  );

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)

      .then((response) => {
        const albums = response.data.albums;
        setAlbums(albums);
      });
  }, [userId]);

  return (
    <div className={classes.Author}>
  <div>{email}</div>
    </div>
  );
  }
export default Albums;
