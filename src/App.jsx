import tasks from "../tasks.js"

function App() {
  // Data
  const currentTasks = tasks.filter(curTask => curTask.state === "backlog" || curTask.state === "in_progress");
  const completedTasks = tasks.filter(curTask => curTask.state === "completed");

  // Functions
  /**
   * Funzione che assegna un colore in base allo stato del tag
   * @param {object} tag 
   * @returns {string}
   */
  const tagAssigment = (tag) => {
    if (tag.state === "backlog") {
      return "red";
    } else if (tag.state === "in_progress") {
      return "yellow";
    } else {
      return "green";
    }
  }

  /**
   * Funzione che stampa una lista partendo da un array 
   * @param {array} tasksArray
   */
  const printTasks = (tasksArray) => tasksArray.map(curTask =>
    <li className="task-list" key={curTask.id}>
      <h3 className="title">{curTask.title}</h3>
      <span className="state-tag" mytagtype={tagAssigment(curTask)}>{curTask.state}</span>
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
