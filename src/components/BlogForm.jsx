const BlogForm = ({ createBlog, title, setTitle, author, setAuthor, url, setUrl }) => {

    return(
        <form onSubmit={createBlog}>
            
            <div>
                <label for="title">Title</label>
                <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)}></input>
            </div>


            <div>
                <label for="author">Author</label>
                <input type="text" id="author" value={author} onChange={e => setAuthor(e.target.value)}></input>
            </div>


            <div>
                <label for="Url">Url</label>
                <input type="text" id="url" value={url} onChange={e => setUrl(e.target.value)}></input>
            </div>


            <button type="submit">create</button>
        </form>
    )

}


export default BlogForm