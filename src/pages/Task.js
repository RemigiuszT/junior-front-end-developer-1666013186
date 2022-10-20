import React from "react";
import { Link } from "react-router-dom";
import "../data/data";
import "./Tasks.css";



export default function Task(task) {
  console.log(task);
  return (
    <li key={task.id}>
      <Link to={`/tasks/${task.id}`} key={task.id}>
        <div className="task-title">{task.title}</div>
        <div className={`task-status ${task.status}`}>{task.status}</div>
      </Link>
    </li>
  );
}
