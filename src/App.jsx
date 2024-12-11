import tasks from "../tasks.js"

function App() {
  // Data
  const currentTasks = tasks.filter(curTask => curTask.state === "backlog" || curTask.state === "in_progress");
  const completedTasks = tasks.filter(curTask => curTask.state === "completed");

  // Functions
  const printTasks = (tasksArray) => tasksArray.map(curTask =>
    <li className="task-list" key={curTask.id}>
      <h3 className="title">{curTask.title}</h3>
      <span className="state-tag">{curTask.state}</span>
      <div className="inner-list">
        <p>Priority: {curTask.priority}</p>
        <p>Est. time {curTask.estimatedTime}</p>
      </div>
    </li>)

  // Output
  return (
    <>
      <header className="header">
        <h1>Task Manager</h1>
      </header>
      <main className="main">
        <div className="current-tasks">
          <h2>Current tasks ({currentTasks.length})</h2>
          <ul>{printTasks(currentTasks)}</ul>
        </div>
        <hr />
        <div className="completed-tasks">
          <h2>Completed Tasks ({completedTasks.length})</h2>
          <ul>{printTasks(completedTasks)}</ul>
        </div>
      </main>
    </>
  )
}

export default App
