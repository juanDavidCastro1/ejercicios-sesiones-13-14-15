import React from "react";
import '../../styles/Task.css';

function Task({ task, removeTask }) {
  return (
    <div className={`card ${task.priority}`}>
      <h2 className="card__title">{task.name}</h2>
      <p className="card__description">{task.description}</p>
      <h2>{task.priority}</h2>

      <button
        className="card__button"
        onClick={() => {
          removeTask(task);
        }}
      >
        Eliminar Tarea
      </button>
    </div>
  );
}

export default Task;
