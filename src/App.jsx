import tasks from "../tasks.js"

function App() {
  // Data
  const currentTasks = tasks.filter(curTask => curTask.state === "backlog" || curTask.state === "in_progress");
  const completedTasks = tasks.filter(curTask => curTask.state === "completed");
  
  // Functions
  // const printTasks = () => currentTasks
  return (
    <>
      <header>
        <h1>Task Manager</h1>
      </header>
      <main>
        <div>
          <h2>Current tasks</h2>
          <ul></ul>
        </div>

      </main>
    </>
  )
}

export default App
