import tasks from "../tasks.js"

function App() {
  // Data
  const currentTasks = tasks.filter(curTask => curTask.state === "backlog" || curTask.state === "in_progress");
  const completedTasks = tasks.filter(curTask => curTask.state === "completed");

  // Functions
  const printTasks = (tasksArray) => tasksArray.map(curTask =>
    <li key={curTask.id}>
      {curTask.title} <span>{curTask.state}</span>
      <ul>
        <li key="{curTask.id}.1">Priority: {curTask.priority}</li>
        <li key="{curTask.id}.2">Est. time {curTask.estimatedTime}</li>
      </ul>
    </li>)

  // Output
  return (
    <>
      <header>
        <h1>Task Manager</h1>
      </header>
      <main>
        <div>
          <h2>Current tasks ({currentTasks.length})</h2>
          <ul>{printTasks(currentTasks)}</ul>
        </div>
        <div>
          <h2>Completed Tasks ({completedTasks.length})</h2>
          <ul>{printTasks(completedTasks)}</ul>
        </div>
      </main>
    </>
  )
}

export default App
