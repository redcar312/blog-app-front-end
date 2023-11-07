import { useState } from "react"
import blogService from '../services/blogService'

const Blog = ({ blog, addLike, handleDelete }) => {
 const [toggle, setToggle] = useState(false)
 
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
const handleToggle = () => {
setToggle(!toggle)
}

const blogObj = {...blog, likes: blog.likes + 1}


  return(
  <div style={blogStyle}>
  {!toggle ? 
  <div>

    <span>{blog.title} {blog.author}</span>
    <button onClick={() => handleToggle()}>View</button>
  </div>  :
  <div> 
    <p>{blog.title}</p>
    <p>{blog.author}</p> 
    <a href={blog.url}>{blog.url}</a>
    <span><p>Likes {blog.likes}</p> <button onClick={() => addLike(blogObj)}>Like</button></span>
    <button onClick={() => handleDelete(blogObj)}>Delete</button>
    <button onClick={() => handleToggle()}>Close</button>
  </div>
  }
  </div>
  )
}

export default Blog