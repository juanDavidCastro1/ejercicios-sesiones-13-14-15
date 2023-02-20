import React from "react";
import '../../styles/Task.css';

function Task({ task, removeTask }) {

  let priorityClass = '';

  switch (task.priority) {
    case 'Normal':
      priorityClass = 'normal';
      break;
    case 'No urgente':
      priorityClass = 'noUrgent';
      break;
    case 'Urgente':
      priorityClass = 'urgent';
      break;
    default:
      break;
  }

  return (
    <div className={`card ${task.priority}`}>
      <h2 className="card__title">{task.name}</h2>
      <p className="card__description">{task.description}</p>
      <h2 className={priorityClass}>{task.priority}</h2>

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
