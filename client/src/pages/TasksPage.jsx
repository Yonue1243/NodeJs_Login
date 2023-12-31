import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";

const TasksPage = () => {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  if(tasks.length === 0) return (<h1>No tasks</h1>)

  return (
    <div>
      {tasks.map((task) => (
        <div key={task._id}>
          <h1>{task.tittle}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TasksPage;
