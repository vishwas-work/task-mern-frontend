import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { toast } from "react-toastify";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = useCallback(() => {
    dispatch(deleteTask(task.tasks_id))
      .unwrap()
      .then((response) => {
        // console.log(response);

        toast.success("Task deleted successfully!");
      })
      .catch(() => {
        toast.error("Failed to delete task. Please try again.");
      });
  }, [dispatch, task.tasks_id]);

  return (
    <div
      className="bg-purple-300 p-4 rounded-md shadow-md"
      style={{ background: "#bb86fc7d", padding: "10px", borderRadius: "5px" }}
    >
      <button
        onClick={handleDeleteTask}
        className="text-red-600 float-right deleteButton"
      >
        ✖
      </button>
      <div className="text-gray-600 text-sm">
        {new Date(task.created_at).toLocaleString("en-US")}
      </div>
      <h2 className="text-lg font-semibold mt-2">
        {task.task?.slice(0, 20)}
        {task.task?.length > 20 && "..."}
      </h2>
    </div>
  );
};

export default TaskItem;
