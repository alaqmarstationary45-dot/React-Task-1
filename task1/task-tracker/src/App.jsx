import { useState } from "react";

import TaskForm from "./components/Taskform";
import TaskItem from "./components/TaskItem";
import TaskStats from "./components/TaskStats";

function App() {
  // tasks mein saare tasks ki list store hogi
  // setTasks se hum tasks ko update karenge
  const [tasks, setTasks] = useState([]);

  // Ye function new task add karega
  function addTask(taskText) {
    // Naya task ek object hoga
    const newTask = {
      // Date.now() current time ka number deta hai
      // Isko hum unique ID ke liye use kar rahe hain
      id: Date.now(),

      // User ka likha hua task
      text: taskText,

      // New task initially incomplete hoga
      completed: false,
    };

    // Purane tasks + new task
    setTasks([...tasks, newTask]);
  }

  // Ye function task ko complete/incomplete karega
  function toggleTask(id) {
    // map() har task ko check karega
    const updatedTasks = tasks.map((task) => {
      // Agar current task ki ID clicked task ki ID
      // ke equal hai
      if (task.id === id) {
        // Task ki copy banao
        // aur completed ko opposite kar do
        return {
          ...task,
          completed: !task.completed,
        };
      }

      // Baaki tasks ko same rakho
      return task;
    });

    // Updated tasks ko state mein save karo
    setTasks(updatedTasks);
  }

  // Ye function task delete karega
  function deleteTask(id) {
    // Sirf woh tasks rakho
    // jinki ID selected ID ke equal nahi hai
    const remainingTasks = tasks.filter((task) => task.id !== id);

    // Updated list save karo
    setTasks(remainingTasks);
  }

  // Completed tasks ka count
  const completedTasks = tasks.filter((task) => task.completed).length;

  // Remaining tasks
  const remainingTasks = tasks.length - completedTasks;

  // IMPORTANT:
  // return App function ke ANDAR hona chahiye
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">Task Tracker</h1>

        <p className="text-center text-gray-500 mb-8">
          Manage your daily tasks
        </p>

        {/* TaskForm ko addTask function de rahe hain */}
        <TaskForm onAddTask={addTask} />

        {/* TaskStats ko task counts de rahe hain */}
        <TaskStats
          total={tasks.length}
          completed={completedTasks}
          remaining={remainingTasks}
        />

        <div className="space-y-3 mt-6">
          {/* Har task ke liye TaskItem create hoga */}
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
