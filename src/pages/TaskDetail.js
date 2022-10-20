import { useParams } from 'react-router-dom';
import tasks from '../data/data';

const TaskDetail = (props) => {
    const params = useParams();

  return (
    <section>
     <h1> Task Detail </h1>
      <p>{params.taskId}</p>
    </section> 
  );
};

export default TaskDetail;
