import { useState, useEffect } from 'react'
import Login from './components/Login'
import Blog from './components/Blog'
import blogService from './services/blogService'
import LogOut from './components/LogOut'
import Toggle from './components/Toggle'
import BlogForm  from './components/BlogForm'
const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')
  const [toggle, setToggle] = useState(false)
  
  const sortBlogs = (blogs) => {
    blogs = blogs.sort((blog1, blog2) => blog1.likes - blog2.likes)
    return blogs.reverse()
  }
 
  

  const initBlogs = () => {
    blogService.getAll().then(blogs => 
      setBlogs(sortBlogs(blogs.data))
    )  
  }
  
  useEffect(() => {
  initBlogs()
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if(loggedUserJSON) {
        const user = JSON.parse(loggedUserJSON)
        setUser(user)
        blogService.setToken(user.token)
    }
  }, [] )
  const handleLogin = async (e) => {
      e.preventDefault()
      try{
        const user = await blogService.Login({username, password})
        window.localStorage.setItem(
          'loggedBlogappUser', JSON.stringify(user)
        )
        blogService.setToken(user.token)
        setUser(user)
        setUsername('')
        setPassword('')
      } catch(exception) {
        setErrorMessage('incorrect username or password')
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      }

    



  }
const handleLogOut = () => {
  window.localStorage.removeItem('loggedBlogappUser')
  setUser(null)
}

const createBlog = async (e) => {
e.preventDefault()

try{
  const blogObj = {
    title:title,
    author:author,
    url: url,
    likes:0
  }
  
  const newBlog = await blogService.createBlog(blogObj)
  initBlogs()
  setAuthor('')
  setTitle('')
  setUrl('')

} catch(err) {
  console.log(err)
}

}

const handleToggle = () => {
    setToggle(!toggle)
    console.log(toggle)  
}


const addLike = async (blogObj) => {
    
    const updatedBlog = await blogService.updateBlog(blogObj)
    initBlogs()
 
  }

const handleDelete = async(blogObj) => {
  const id = blogObj._id   
  const deleted = await blogService.deleteBlog(id)
  setBlogs(blogs.filter(blog => blog._id != id))
  initBlogs()
  
  
 }

  return (
    <div>
    <h1>Test Account:
      username: test 
      pw: 123
    </h1>
      <h1>Blog App</h1>
      {user ? <LogOut name={user.name} handleLogOut={handleLogOut}></LogOut>
      : null}

      


      {user ? <Toggle handleToggle={handleToggle} toggle={toggle}>
        <BlogForm createBlog={createBlog} title={title} setTitle={setTitle} author={author} setAuthor={setAuthor} url={url} setUrl={setUrl}></BlogForm>
      </Toggle> :null}




      {!user ?
       <Login username={username} setUsername={setUsername} password={password} setPassword={setPassword} handleLogin={handleLogin}></Login> :
     
        blogs.map(blog =>
        <Blog  blog={blog} addLike={addLike} handleDelete={handleDelete} />
      )
      
}
    </div>
  )
}

export default App