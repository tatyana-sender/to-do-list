import React, { useState } from "react";
import {nanoid} from "nanoid";
import {Header} from "./Components/Header";
import {Filters} from "./Components/Filters";
import {List} from "./Components/List";

function App(props) {

    const [tasks, setTasks] = useState(props.tasks);
    function addTask(title) {
        const newTask = {id: `todo-${nanoid()}`, data: { date: new Date().toLocaleString(), title: title, checked: false },};
        setTasks([...tasks, newTask]);
        localStorage.setItem(newTask.id, JSON.stringify(newTask.data));
    }

    function checkTask(id) {
        const updatedTasks = tasks.map((task) => {
            if (id === task.id) {
                return {...task, completed: !task.completed}
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    function editTask(id, title) {
        const editedTaskList = tasks.map((task) => {
            if (id === task.id) {
                const newDate = new Date().toLocaleString();
                return {...task, title: title, date: newDate}
            }
            return task;
        });
        setTasks(editedTaskList);
    }

    function deleteTask(id) {
        const remainingTasks = tasks.filter((task) => id !== task.id);
        setTasks(remainingTasks);
        localStorage.removeItem(id);
    }

  return (
    <div>
      <Header addTask={addTask} />
      <Filters tasks={tasks} />
      <List tasks={tasks} editTask={editTask}  checkTask={checkTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
