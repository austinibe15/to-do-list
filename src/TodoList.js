import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, deleteTask, editTask, addTask }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks to display.</p> // Display message if no tasks
      ) : (
        <div>
          <h3>Featured Nigerian Staples</h3>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4" id="productGrid">
            {tasks.map((task) => (
              <div className="col" key={task.id}>
                <TodoItem task={task} deleteTask={deleteTask} editTask={editTask} />
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="mt-4">
        <button onClick={addTask} className="btn btn-primary">Add New Task</button>
      </div>
    </div>
  );
}

export default TodoList;
