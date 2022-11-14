import React , {useRef} from 'react'
import '../css/main.css';
import {BsTrash,BsPencil,BsCheck2All} from 'react-icons/bs'

const Todoitem = (props) => {
    const {item, updateTodo, removeTodo,completedTodo} = props;
    const inputRef = useRef(true);

    const changeFocus = () =>{
        inputRef.current.disabled =false;
        inputRef.current.focus();
    }

    const update = (id, value, e) =>{
        if(e.which === 13){
            updateTodo({id,item:value});
            inputRef.current.disabled = true;
        }
    }
  return (
    <div className='listTodos'>
        <li key={item.id}>
            <div className='textarea'>
                <textarea ref={inputRef} disabled={inputRef} defaultValue={item.item} onKeyPress={(e)=> update(item.id, inputRef.current.value,e)}/>
                {item.completed && <span className='completed'>Done</span>}
            </div>
            
            <div className='btn'>
                {
                    item.completed === false &&
                    <button onClick={()=> completedTodo(item.id)} className="complete"><BsCheck2All/></button>
                }
                <button onClick={()=>changeFocus()} className="edit"><BsPencil/></button>
                <button onClick={()=> removeTodo(item.id)} className="delete"> <BsTrash/></button>
                
            </div>
        </li>
    </div>
  )
}

export default Todoitem
