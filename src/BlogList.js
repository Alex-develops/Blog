import { Link } from "react-router-dom"

const BlogList = ({blogs, title}) => {
    // const blogs = props.blogs;
    // const title = props.title;
    //we wrap handleDelete in an anonymous function, so we can pass an argument in our custom function, as we need to pass the id of the blog we want to delete
    // we better define handleDelete in the parent component, Home component, so we can interact with the data directly and we can pass it as a prop
  return (
    <div className="blog-list">
    <h2>{title}</h2>
    {blogs.map(blog => 
           <div className="blog-preview" key={blog.id}>
            
            <Link to ={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            </Link>
            
            </div>
        )}
    </div>
  )
}

export default BlogList