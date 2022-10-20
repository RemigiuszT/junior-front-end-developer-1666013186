import { Link, } from "react-router-dom";
import tasks from "../data/data";
import './Tasks.css';
import Task from "./Task";

const Tasks = () => {
  return (
    <section>
      <h1>YOUR TASKS:</h1>
      <ul className="Tasks">
        {tasks.map((task) => (
            <Task {...task}/>
        ))}
      </ul>
    </section>
  );
};

export default Tasks;
