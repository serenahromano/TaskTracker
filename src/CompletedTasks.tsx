// //when user clicks "check mark button" to do list items will render here

import React from 'react';

interface CompletedTasksProps {
  completedTasks: string[]; // Pass completed tasks as a prop
}

const CompletedTasks: React.FC<CompletedTasksProps> = ({ completedTasks }) => {
  return (
    <div>
      <h3>Completed Tasks</h3>
    </div>
  );
};

export default CompletedTasks;

// import React from 'react';

// const CompletedTasks = () => {
//   <div>
//     <h3>Completed Tasks</h3>
//   </div>;
// };

// export default CompletedTasks;
