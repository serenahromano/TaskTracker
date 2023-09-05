import React from 'react';

interface ToDoListProps {
  tasks: string[];
  onCompleteTask: (index: number) => void;
  onDeleteTask: (index: number) => void;
}

const ToDoList: React.FC<ToDoListProps> = ({
  tasks,
  onCompleteTask,
  onDeleteTask,
}) => {
  return (
    <div>
      <h2>Your To-Do List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => onCompleteTask(index)}>✓</button>
            <button onClick={() => onDeleteTask(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
