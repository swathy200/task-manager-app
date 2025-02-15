import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Checkbox, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);



  const handleDelete = async (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleToggle = async (id, completed) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !completed } : task));
  };

  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task.id}>
          <Checkbox checked={task.completed} onChange={() => handleToggle(task.id, task.completed)} />
          <ListItemText primary={task.title} />
          <IconButton onClick={() => handleDelete(task.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
