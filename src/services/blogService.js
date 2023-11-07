import axios from 'axios'
const baseUrl = 'http://localhost:3000/api'
let token = null


const setToken = (newToken) => {
   token = `Bearer ${newToken}`
}





const getAll = () => {
    return axios.get(`${baseUrl}/blogs`)
    

}
const createBlog = async (blogObj) => {
   const config = {
    headers: {Authorization: token}
   }
   const res = await axios.post(`${baseUrl}/blogs`, blogObj, config)
   return res.data
}

const deleteBlog = async(id) => {
    const res = await axios.delete(`${baseUrl}/blogs/${id}`)
    return res.data
} 

const updateBlog = async(blogObj) => {
    const res = await axios.put(`${baseUrl}/blogs/`, blogObj)
    return res.data


}

const Login = async(userObj) => {
    const res = await axios.post(`${baseUrl}/login`, userObj)
    return res.data
}

export default {
    getAll,
    setToken,
    createBlog,
    deleteBlog,
    updateBlog,
    Login

}