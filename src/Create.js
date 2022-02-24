import { useHistory } from 'react-router-dom';
import {useState} from 'react'

const Create = () => {
    const [title, setTitle] =useState('');
    const [body, setBody] =useState('');
    const [author, setAuthor] = useState('Alex-develops');
    const [isLoading, setIsLoading]= useState(false);
    const history = useHistory();
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title, body, author};

        setIsLoading (true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            setIsLoading(false);
            //history.go(-1);
            history.push('/')
        })

        
    }

  return (
    <div className='create'>
      <h2>Add a New Post</h2>
      <form onSubmit ={handleSubmit}>
        <label>Blog Title:</label>
        <input 
        type="text"
        required 
        value={title}    
        onChange= {(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea 
        required
        value ={body}
        onChange ={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select 
        value = {author}
        onChange={e=> setAuthor(e)}>
            <option value="Alex-develops">Alex-develops</option>
            <option value="Aleksandra">Aleksandra</option>
        </select>
        {!isLoading && <button>Add Blog</button>}
        {isLoading && <button disabled>Adding post...</button>}
        <p>{title}</p>
        <p>{body}</p>
      </form>
    </div> 
  );
}

export default Create
