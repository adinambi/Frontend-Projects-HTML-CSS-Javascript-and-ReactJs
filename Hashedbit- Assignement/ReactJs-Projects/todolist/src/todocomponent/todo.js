import React, { useState } from 'react';
import './todo.css';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [taskHistory, setTaskHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const addTask = () => {
    if (newTask.trim()) {
      const newTaskObj = {
        id: Date.now(),
        text: newTask.trim(),
        number: tasks.length + 1
      };

      const updatedTasks = [...tasks, newTaskObj].sort((a, b) => a.id - b.id);
      
      setTasks(updatedTasks);
      setTaskHistory(prev => [...prev, newTaskObj]);
      setNewTask('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const completeTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const restoreTask = (task) => {
    setTasks(prev => [...prev, task].sort((a, b) => a.id - b.id));
    setShowHistory(!showHistory);
  };

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  const clearHistory = () => {
    setTaskHistory([]);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div className="todo-container">
      <div className="input-container">
        <input 
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add Task</button>
        <button onClick={toggleHistory} className="history-btn">
          {showHistory ? 'Hide History' : 'Show History'}
        </button>
      </div>

      {tasks.length === 0 ? (
        <p className="empty-state">No tasks yet. Add a task!</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task.id}>
              <span>Task: {task.number} - {task.text}</span>
              <div className="task-actions">
                <button 
                  onClick={() => completeTask(task.id)} 
                  className="complete-btn"
                >
                  ✓
                </button>
                <button 
                  onClick={() => deleteTask(task.id)} 
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {showHistory && (
        <div className="history-section">
          <div className="history-header">
            <h3>Task History</h3>
            <div className="history-actions">
              <button 
                onClick={clearHistory} 
                className="clear-history-btn"
              >
                Clear History
              </button>
            </div>
          </div>
          {taskHistory.length === 0 ? (
            <p className="empty-state">No task history</p>
          ) : (
            <ul className="history-list">
              {taskHistory.map((task) => (
                <li key={task.id}>
                  <span>Task: {task.number} - {task.text}</span>
                  <button 
                    onClick={() => restoreTask(task)} 
                    className="restore-btn"
                  >
                    Restore
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default TodoList;