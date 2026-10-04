// useState input ki value ko store karega.
import { useState } from "react";

// Parent App se onAddTask prop receive kar rahe hain.
function TaskForm({ onAddTask }) {
  // Input ki current value yahan store hogi.
  //
  // Initially input empty hai.
  const [taskText, setTaskText] = useState("");

  // Form submit hone par ye function chalega.
  function handleSubmit(event) {
    // Browser ka default form behaviour rok rahe hain.
    // Normally form submit hone par page reload hota hai.
    event.preventDefault();

    // Agar user ne sirf spaces enter ki hain
    // to task add nahi hoga.
    if (taskText.trim() === "") {
      return;
    }

    // Parent component ka function call kar rahe hain.
    //
    // taskText ko App.jsx bhej rahe hain.
    onAddTask(taskText);

    // Task add hone ke baad input empty kar do.
    setTaskText("");
  }

  return (
    // Form submit hone par handleSubmit chalega.
    <form onSubmit={handleSubmit} className="flex gap-2">
      {/* User yahan task type karega */}
      <input
        type="text"
        // Input ki value state se aa rahi hai.
        value={taskText}
        // Jab user type karega,
        // state update hogi.
        onChange={(event) => setTaskText(event.target.value)}
        placeholder="Enter a task..."
        className="flex-1 border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Form submit button */}
      <button
        type="submit"
        className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700"
      >
        Add
      </button>
    </form>
  );
}

export default TaskForm;
