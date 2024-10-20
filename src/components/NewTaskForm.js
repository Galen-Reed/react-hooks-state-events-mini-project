import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const filteredCategories = categories.slice(1);

  const [text, setText] = useState("");
  const [category, setCategory] = useState(filteredCategories[0]);

  function formHandler(event) {
    event.preventDefault()
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory(filteredCategories[0]);
  }

  return (
    <form className="new-task-form" onSubmit={formHandler}>
      <label>
        Details
        <input 
        type="text" 
        name="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select 
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        >
          {filteredCategories.map((category) => (
            <option 
            key={category}
            value={category}
            >
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
