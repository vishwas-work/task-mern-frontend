import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getTasks } from "../features/tasks/taskSlice";
import Spinner from "./Spinner";
import TaskItem from "./TaskItem";
const TaskList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // debugger;
  const { tasks, isError, isLoading, isSuccess, message } = useSelector(
    (state) => state.task
  );

  // debugger;
  console.log(tasks);

  useEffect(() => {
    // debugger;
    dispatch(getTasks());
  }, [isError, message, navigate, dispatch]);

  if (isLoading) {
    return <Spinner tasks={tasks} />;
  }

  return (
    <div>
      <section className="content">
        {tasks.length > 0 ? (
          <div
            className="tasks"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "10px",
            }}
          >
            {tasks.map((task) => (
              <TaskItem task={task} key={task.tasks_id} />
            ))}
          </div>
        ) : (
          <p>No tasks yet.</p> // Or a more descriptive message
        )}
      </section>
    </div>
  );
};

export default TaskList;
