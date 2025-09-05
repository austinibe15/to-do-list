import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Garri (Cassava Flakes)", description: "USD 6.99 per 2kg bag" },
    { id: 2, name: "Palm Oil (Local) 1L", description: "USD 5.50" },
    { id: 3, name: "Dry Crayfish (Large Pack)", description: "USD 7.25" },
    { id: 4, name: "Melon Seeds (Egusi)", description: "USD 8.00" },
    { id: 5, name: "Ogbono (Wild Mango) Powder", description: "USD 9.00" },
    { id: 6, name: "Pounded Yam Flour (500g)", description: "USD 4.50" }
  ]);
  const [task, setTask] = useState({ name: '', description: '' });

  // Add Task
  const addTask = () => {
    if (task.name && task.description) {
      setTasks([
        ...tasks,
        { id: Date.now(), name: task.name, description: task.description }
      ]);
      setTask({ name: '', description: '' });
    }
  };

  // Edit Task
  const editTask = (id, updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, ...updatedTask } : task
      )
    );
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <h1>Manage Nigerian Food Staples</h1>
      
      {/* Form for adding new tasks */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Task Name"
          value={task.name}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Task Description"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      
      {/* Displaying the task list */}
      <TodoList
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask}
        addTask={addTask}
      />
    </div>
  );
}

export default App;
