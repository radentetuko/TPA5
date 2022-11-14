import React, { useState } from 'react';
import { connect } from 'react-redux';
import {addTodos, completedTodos, removeTodos,updateTodos} from '../redux/reducer';
import '../css/main.css'

const mapStateToProps = (state) => {
    return {
        todos : state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo :(obj) => dispatch(addTodos(obj)),
        removeTodo :(id) => dispatch(removeTodos(id)),
        updateTodo :(obj) => dispatch(updateTodos(obj)),
        completedTodo :(id) => dispatch(completedTodos(id)),
    }
}

const Todos = (props) => {

    const [todo, setTodo] = useState("");

    const handleChange = (e) => {
        setTodo(e.target.value);
    }
    //console.log("test", props)

  return (
    <div className='addTodos'>
      <input type="text" onChange={(e)=>handleChange(e)} className='todo-input'/>
      <span><button className="add-btn" onClick={()=> props.addTodo({
        id:Math.floor(Math.random() * 1000),
        item:todo,
        completed:false,
      })}>Add</button></span>
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(Todos);
