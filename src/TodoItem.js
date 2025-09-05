import React, { useState } from 'react';

function TodoItem({ task, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(task.name);
  const [newDescription, setNewDescription] = useState(task.description);

  const handleEdit = () => {
    if (isEditing) {
      editTask(task.id, { name: newName, description: newDescription });
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="card h-100">
      <img
        src="https://via.placeholder.com/600x400"
        className="card-img-top"
        alt={task.name}
      />
      <div className="card-body d-flex flex-column">
        {isEditing ? (
          <>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <input
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
          </>
        ) : (
          <>
            <h5 className="card-title">{task.name}</h5>
            <p className="card-text">{task.description}</p>
          </>
        )}
        <button onClick={handleEdit}>
          {isEditing ? 'Save Changes' : 'Edit'}
        </button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
