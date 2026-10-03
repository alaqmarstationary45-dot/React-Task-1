import { useState } from "react"
import TaskForm from "./components/TaskForm"
import TaskItem from "./components/TaskItem"
import TaskStats from "./components/TaskStats"

function App() {

  const [tasks, settasks] = useState([])

  function addtask(tasktext){
    const newtask = {
      id:Date.now , 
      text : tasktext,
      completed:false
    }

    settasks([...tasks,newtask])
  }

  
}

export default App