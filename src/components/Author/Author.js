
import classes from "./Author.module.css";
const Author = ({ userId }) =>{
   

  return (
    <div className={classes.Author}>
  {userId}
    </div>
  );
  }
export default Author;
