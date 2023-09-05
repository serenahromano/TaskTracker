import React, { useState } from 'react';
import ToDoList from './ToDoList';
import AddTasks from './AddTasks';

const MainContainer = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (newTask: string) => {
    setTasks([...tasks, newTask]);
  };

  const completeTask = (index: number) => {
    // Implement logic to mark a task as completed - NEED TO DO
    // You can update the state or perform other actions here
  };

  const deleteTask = (index: number) => {
    // Implement logic to delete a task - NEED TO DO
    // You can update the state or perform other actions here
  };

  return (
    <div>
      <AddTasks onAddTask={addTask} />
      <ToDoList
        tasks={tasks}
        onCompleteTask={completeTask}
        onDeleteTask={deleteTask}
      />
    </div>
  );
};

export default MainContainer;
