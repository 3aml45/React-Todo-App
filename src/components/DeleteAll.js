import React from 'react';

const DeleteAll = ({ todos }) => {
  const completedTasksCount = () => {
    let tasksCompleted = 0;
    todos.forEach(todo=> {
      if (todo.completed){
        tasksCompleted = tasksCompleted + 1;
      }
    })
    return tasksCompleted;
  }
  const uncompletedTasksCount = () => {
    let tasksUncompleted = 0;
    todos.forEach(todo=> {
      if (!todo.completed){
        tasksUncompleted = tasksUncompleted + 1;
      }
    })
    return tasksUncompleted;
  }
  return (
    <div className="total-task-container">
      <h1 className='total-task'>Total task: {todos.length} </h1>
      <h2 className='completed-task'>Completed task: {completedTasksCount()} </h2>
      <h3 className='uncompleted-task'>Uncompleted task: {uncompletedTasksCount()} </h3>
    </div>
  );
};

export default DeleteAll;