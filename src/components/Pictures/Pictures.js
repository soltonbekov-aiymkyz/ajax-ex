
import axios from "axios";
import { useEffect, useState } from "react";
import Author from "../Author/Author"
const Pictures = ({ id }) => {
  const [albums, setAlbum] = useState({
    title: "Loading...",
 
  });
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
      .then((response) => {
        console.log(response);
        const albums = response.data;
        setPost(albums);
      });
  }, [albums]);
  return (
    <main className={classes.Albums}>
      <h1>{post.title}</h1>
      <Albums setSelectedAlbums={ post.setSelectedAlbums } />
    
    </main>
  );
}
export default Pictures.js;
