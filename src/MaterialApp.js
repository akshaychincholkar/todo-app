import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Container, TextField, IconButton, Checkbox, List, ListItem, ListItemText, Fab, Paper, Divider } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import FilterListIcon from '@mui/icons-material/FilterList';


const MaterialApp = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a To-Do App", completed: false },
    { id: 3, text: "Explore Material UI", completed: false },
  ]);

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const addTask = () => {
    const newTask = { id: tasks.length + 1, text: `New Task ${tasks.length + 1}`, completed: false };
    setTasks([...tasks, newTask]);
  };

  return (
    <Container maxWidth="sm">
      {/* App Bar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            To-Do App
          </Typography>
          <IconButton color="inherit">
            <FilterListIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Search Field */}
      <TextField
        label="Search tasks"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      {/* Task List */}
      <List>
        {tasks.map((task) => (
          <Paper key={task.id} style={{ marginBottom: "10px" }}>
            <ListItem>
              <Checkbox
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
                color="primary"
              />
              <ListItemText
                primary={task.text}
                style={{ textDecoration: task.completed ? "line-through" : "none" }}
              />
            </ListItem>
            <Divider />
          </Paper>
        ))}
      </List>

      {/* Add Task Button */}
      <Fab
        color="primary"
        aria-label="add"
        style={{ position: "fixed", bottom: 16, right: 16 }}
        onClick={addTask}
      >
        <AddIcon />
      </Fab>
    </Container>
  );
};

export default MaterialApp;
