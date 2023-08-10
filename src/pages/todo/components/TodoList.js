import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

export default function TodoList({todos}) {
    return (
        <ul className="list-component">
            <div className="title">Tasks list:</div>
            <div className="list">
                {todos.map(el => <TodoItem key={`todo-item-${el.id}`} todo={el}/>)}
            </div>
        </ul>
    )
}