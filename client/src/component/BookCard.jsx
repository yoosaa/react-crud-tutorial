import { Link } from "react-router-dom"
import axios from "axios"

const BookCard = (props) => {
  const handleDelete = async id => {
    try{
      await axios.delete("http://localhost:8800/books/"+id)
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }

  return <div className="book" key={props.book.id}>
    {props.book.cover && <img src={props.book.cover} alt="" />}
    <h2>{props.book.title}</h2>
    <p>{props.book.desc}</p>
    <span>{props.book.price}</span>
    <button className="delete" onClick={()=>handleDelete(props.book.id)}>Delete</button>
    <button className="update"><Link to={`/update/${props.book.id}`}>Update</Link></button>
  </div>
}

export default BookCard