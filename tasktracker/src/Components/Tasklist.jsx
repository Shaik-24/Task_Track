export default function TaskList({ tasks, updateTask, deleteTask }) {
  const toggleComplete = (index) => {
    const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
    updateTask(updatedTask, index);
  };

  return (
    <div className='task-list'>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            {/* Add a flex container for alignment */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
              <div>
                <span>{task.text}</span>
                <small> ({task.priority}, {task.category})</small>
              </div>
              <div>
                <button onClick={() => toggleComplete(index)}>
                  {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button onClick={() => deleteTask(index)}>
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
