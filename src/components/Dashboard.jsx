import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TaskForm from "./TaskForm";
import { reset } from "../features/tasks/taskSlice";
const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true); // Initially true

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      setLoading(false); // Set to false once user data is available
    }
  }, [user, navigate]);

  return (
    <>
      <section className="heading">
        {loading ? <h1>Loading...</h1> : <h1>Welcome {user?.name}</h1>}
        <p>Task DashBoard</p>
      </section>
      <TaskForm />
    </>
  );
};

export default Dashboard;
