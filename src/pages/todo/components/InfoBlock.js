import React from "react";
import '../../../fontello/css/fontello.css'
import './InfoBlock.css';

export default function InfoBlock({todos}) {
    const tasksDone = () => {
        return todos.filter(todo => todo.isDone === true).length;
    }
    const activeTasks = () => {
        return todos.filter(todo => todo.isDone === false).length;
    }
    
    return (
        <div className="info-block">
            <div className="block" id="summary">
                <i className="icon_back icon-clipboard"></i>
                <div className="block-content">
                    <div className="block-title">Summary tasks</div>
                    <div className="value">{todos.length}</div>
                </div>
            </div>
            <div className="block" id="not-done">
                <i className="icon_back icon-active"></i>      
                <div className="block-content">
                    <div className="block-title">Active</div>
                    <div className="value">{activeTasks()}</div>
                </div>
            </div>
            <div className="block" id="done">
                <i className="icon_back icon-done"></i>
                <div className="block-content">
                    <div className="block-title">Done</div>
                    <div className="value">{tasksDone()}</div>
                </div>
            </div>
        </div>
    )
}