import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createTask } from "../features/tasks/taskSlice.js";

const TaskForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (e) => {
    // debugger;
    e.preventDefault(); // Prevents page refresh
    dispatch(createTask(text));

    setText(""); // Clears the input field after submission
    navigate("/allTasks");
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Task</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};
export default TaskForm;
