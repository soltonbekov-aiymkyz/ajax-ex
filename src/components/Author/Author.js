

import axios from "axios";

import { useEffect, useState } from "react";
import classes from "./Author.module.css";
const Author = ({ userId }) =>{
    
  const [email, setEmail] = useState (
    "loading..."
  );

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)

      .then((response) => {
        const email = response.data.email;
        setEmail(email);
      });
  }, [userId]);


  return (
    <div className={classes.Author}>
  <div>{email}</div>
    </div>
  );
  }
export default Author;
