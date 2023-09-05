import React, { useState } from 'react';
//define an interface AddTasksProps with expected prop onAddTask - a function that takes a single arg of task (string) and doesnt return any value
interface AddTasksProps {
  onAddTask: (task: string) => void;
}

//React.FC = Function Component for react
//declare AddTasks func, passing in AddTasksProps, destructuring onAddTask
const AddTasks: React.FC<AddTasksProps> = ({ onAddTask }) => {
  //initializing state- state will store the text entered by the user in the input field- taskTest is type string
  const [taskText, setTaskText] = useState<string>('');

  //declare handleInputChange so we can call it when user types tasks in input field
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskText(e.target.value);
  };

  //declare handleAddTask function so we can call it when the AddTask button is clicked
  const handleAddTask = () => {
    //if the text is NOT empty after ridding of whitespace
    if (taskText.trim() !== '') {
      // Call the onAddTask prop to add the task to your task list
      onAddTask(taskText);
      // Clear the input field
      setTaskText('');
    }
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Enter to do item here'
        value={taskText}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTasks;
