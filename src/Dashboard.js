// Dashboard.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const savedName = localStorage.getItem("username");
    if (!savedName) {
      // No user? Go back to signup
      navigate("/");
    } else {
      setUsername(savedName);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Welcome, {username}!</h1>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}

export default Dashboard;
