import React, { useContext } from 'react';
import TodoContext from '../../../context/Todo.context';
import './TodoItem.css'

export default function TodoItem({todo}){
    const {changeTodoItem, deleteTodoItem} = useContext(TodoContext);
    
    const remove_anim = () => {
        const html_el = document.getElementById(`task-${todo.id}`)
        html_el.classList.add('fade-out')
    }

    let progress = todo.isDone === false || todo.isDone === null? 'task-active todo-item show' : 'task-done todo-item show';
    return (
        <li className={progress} id={`task-${todo.id}`} 
        onAnimationEnd={(e) => {if (e.animationName === 'fade-out') deleteTodoItem(todo.id)}}>
            <input type="checkbox" className="checkbox" 
            id={`todo-task-${todo.id}`}
            defaultChecked={todo.isDone}
            onChange={(value) => changeTodoItem(value.target.checked, todo)}/>
            <label htmlFor={`todo-task-${todo.id}`}
            
            >{todo.title}</label>
        
            <i className="item-ico icon-delete" 
            onClick={() => remove_anim()}
            ></i>
        </li>
    )
}
