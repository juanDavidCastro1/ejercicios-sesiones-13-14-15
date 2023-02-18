import React from "react";

function Task({ task, removeTask }) {
  return (
    <div>
      <h2>{task.name}</h2>
      <p>{task.description}</p>
      <h2>{task.priority}</h2>

      <button
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
