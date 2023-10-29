import { useState } from 'react';

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc , setDesc] = useState("");
  
  const submit = (e) => {
    e.preventDefault();
    if(!title || !desc) alert("Title or Description should not be empty!!");
    else{
      props.addTodo(title,desc);
      setTitle('');
      setDesc('');
    }
    
  };

  let myStyles = {
    width : '50%',
    
  }
  return (
        <div className='container'>
          <form onSubmit={submit}>
            <h4 className='my-3'>Add a ToDo</h4>
            <div className="mb-3">
              <label HtmlFor="title" className="form-label">Enter the Task</label>
              <input type="text" value={title}  onChange={(e) => {setTitle(e.target.value)}}  style={myStyles}  className="form-control" id="title" placeholder="Eg : Go to the Market" />
            </div>
            <div className="mb-3">
              <label HtmlFor="desc" className="form-label">Enter the task description</label>
              <textarea className="form-control"  style={myStyles}  value={desc} onChange={(e) => {setDesc(e.target.value)}}  id="desc" rows="2"></textarea>
            </div>
            <button type='submit' className='btn btn-primary btn-sm'>Add ToDo</button>
          </form>
        </div>
  )
}
