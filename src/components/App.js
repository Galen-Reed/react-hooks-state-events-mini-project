import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategories, setSelectedCategories] = useState("All");

  function handleDelete(text) {
    const newTasks = tasks.filter((item) => item.text !== text);
    setTasks(newTasks);
  }

  function handleCategoryChange(category) {
  setSelectedCategories(category);
  }

  function handleTaskFormSubmit(newTask) {
    setTasks([... tasks, newTask]);
  }

  const filteredTasks =
  selectedCategories === "All"
    ? tasks
    : tasks.filter(task => task.category === selectedCategories);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={CATEGORIES} 
      handleCategoryChange={handleCategoryChange}
      selectedCategories={selectedCategories}
      
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit}/>
      <TaskList tasks={filteredTasks} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
