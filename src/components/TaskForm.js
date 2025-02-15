import React, { useState } from "react";
import { TextField, Button, Grid2 } from "@mui/material";

const TaskForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    
    const newTask = { title, completed: false };
    
    setTitle("");
  };

  return (
    < Grid2 sx={{margin:'45px',display:'flex',alignItems:'center'}}>
    <form onSubmit={handleSubmit} style={{display:'flex',alignItems:'center'}}>
      <TextField
        label="New Task"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">Add Task</Button>
    </form>
    </Grid2>

  );
};

export default TaskForm;
