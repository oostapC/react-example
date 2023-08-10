import React, { useState } from 'react';
import './TaskForm.css';
export default function TaskForm({addTodo}) {
    const [title, setTitle] = useState('');

    const saveTodo = () => {
        if (!title.length) return;
        addTodo({id: '', title: title, isDone: false}) 
        setTitle(''); 
    }

    return (
        <div className="task-form">
            <input type="text" className="inp-field" value={title} onKeyDown={(e) => {if (e.code === 'Enter') saveTodo()}} onChange={(event) => setTitle(event.target.value)} placeholder="Type something..."/>
            <button className="btn" onClick={saveTodo}>+ create task</button>
        </div>
    )
}