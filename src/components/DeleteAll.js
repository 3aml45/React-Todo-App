import React from 'react';

const DeleteAll = ({ todos,setTodos }) => {
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
  const deleteAllHandler = () => {
    const confirm = window.confirm('sure to trash all tasks for ever cuz even i dont know where them go')
    if (confirm){
      setTodos([])
    } else {
      alert('OK be carefull with that button, i dont know how to get back that info T.T ')
    }
  }
  return (
    <div className="total-task-container">
      <h1 className='total-task'>Total task: {todos.length} </h1>
      <h2 className='completed-task'>Completed task: {completedTasksCount()} </h2>
      <h3 className='uncompleted-task'>Uncompleted task: {uncompletedTasksCount()}</h3>
      <button onClick={deleteAllHandler} className='delete-all-btn'>Delete All</button>
    </div>
  );
};

export default DeleteAll;