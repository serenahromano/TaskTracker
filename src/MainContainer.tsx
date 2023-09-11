import React, { useState } from 'react';
import ToDoList from './ToDoList';
import AddTasks from './AddTasks';
import LoginForm from './Login';
import SignupForm from './Signup';

const MainContainer = () => {
  const handleLogin = (username: string, password: string) => {
    // Implement your login logic here
    // This is where you would typically send a request to a server for authentication
    // For this example, we'll just log the username and password to the console
    console.log(`Username: ${username}, Password: ${password}`);
  };
  // Define a function to handle the signup action
  const handleSignup = (
    firstName: string,
    username: string,
    email: string,
    password: string
  ) => {
    // Implement your signup logic here
    // This is where you would typically send a POST request to create a new user
    // For this example, we'll just log the user input to the console
    console.log(
      `First Name: ${firstName}, Username: ${username}, Email: ${email}, Password: ${password}`
    );
  };

  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (newTask: string) => {
    setTasks([...tasks, newTask]);
  };

  const completeTask = (index: number) => {
    // Implement logic to mark a task as completed - NEED TO DO
    // You can update the state or perform other actions here
  };
  //declare dekete
  const deleteTask = (index: number) => {
    // Implement logic to delete a task - NEED TO DO
    // You can update the state or perform other actions here
  };

  return (
    <div>
      <LoginForm onLogin={handleLogin} />
      <SignupForm onSignup={handleSignup} />
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
