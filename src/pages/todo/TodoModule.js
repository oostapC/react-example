import React, { useEffect, useState, useCallback } from "react";
import InfoBlock from "./components/InfoBlock";
import TaskForm from "./components/TaskForm";
import TodoList from "./components/TodoList";
import LoaderBlock from "./components/LoaderBlock";
import TodoContext from "../../context/Todo.context";
import EmptyTodo from "./components/EmptyTodo";
import "./TodoModule.css";

export default function TodoModule() {
    let [todos, setTodos] = useState([]);
    let [loading, setLoading] = useState(true);

  const setSortedTodos = useCallback((data) => {
    setTodos(data.sort(sortTodos));
  }, []);

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        const data = [
          { id: 1, title: "Hello world", isDone: false },
          { id: 2, title: "Hello cat", isDone: false },
          { id: 3, title: "Hello dog", isDone: false },
          { id: 4, title: "Hello todo", isDone: true },
          { id: 5, title: "Hello pony", isDone: true },
        ];
        resolve(data);
      }, 1500);
    }).then((data) => {
      setSortedTodos(data);
      setLoading(false);
    });
  }, [setSortedTodos]);


  const sortTodos = (a, b) => {
    if (b.isDone < a.isDone) {
      return 1;
    } else if (b.isDone > a.isDone) {
      return -1;
    } else {
      return 0;
    }
  };

  const changeTodoItem = (value, todo) => {
    setSortedTodos(
      todos.map((el) => {
        if (el.id === todo.id) {
          el.isDone = value;
        }
        return el;
      })
    );
  };

  const setId = () => {
    let max = 0;
    todos.forEach((el) => (el.id > max ? (max = el.id) : max));
    return max + 1;
  };

  const deleteTodoItem = (id) => {
    setSortedTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodoItem = (newTask) => {
    newTask.id = setId();
    setSortedTodos((todos = [newTask, ...todos]));
  };

  return (
    <div id="todo-module">
      <TodoContext.Provider value={{ changeTodoItem, deleteTodoItem }}>
        <TaskForm addTodo={addTodoItem} />
        <div className="content">
          {loading ? (
            <LoaderBlock />
          ) : todos.length === 0 ? (
            <EmptyTodo />
          ) : (
            <TodoList todos={todos} />
          )}
          <InfoBlock todos={todos} />
        </div>
      </TodoContext.Provider>
    </div>
  );
}
