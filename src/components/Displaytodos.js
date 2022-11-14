import React, { useState } from 'react'
import { connect } from 'react-redux'
import {addTodos, completedTodos, removeTodos,updateTodos} from '../redux/reducer';
import Todoitem from './Todoitem';

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
const Displaytodos = (props) => {
    const [sort, setSort] = useState("active");
  return (
    <div className='displayTodos'>
      <div className='buttons'>
        <button onClick={()=>setSort("active")}>Active</button>
        <button onClick={()=>setSort("completed")}>Completed</button>
        <button onClick={()=>setSort("all")}>All</button>
      </div>
      <ul>
        {
            props.todos.length > 0 && sort === "active" ?

            props.todos.map(item =>{
                return(
                    item.completed === false &&
                    <Todoitem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completedTodo={props.completedTodo}
                    />
                )
            })
        :null}
        
        {
            props.todos.length > 0 && sort === "completed" ?

            props.todos.map(item =>{
                return(
                    item.completed === true &&
                    <Todoitem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completedTodo={props.completedTodo}
                    />
                )
            })
        :null}


{
            props.todos.length > 0 && sort === "all" ?

            props.todos.map(item =>{
                return(
                    <Todoitem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completedTodo={props.completedTodo}
                    />
                )
            })
        :null}
      </ul>
    </div>
  )
}

export default connect(mapStateToProps ,mapDispatchToProps)(Displaytodos);
