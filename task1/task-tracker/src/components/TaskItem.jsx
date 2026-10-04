// TaskItem ko 3 props mil rahe hain:
//
// task
// onToggle
// onDelete
//
// Ye props App.jsx se aa rahe hain.

function TaskItem({ task, onToggle, onDelete }) {
  return (
    // Task ka main card
    <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
      {/* Left side: checkbox + task text */}
      <div className="flex items-center gap-3">
        {/* Checkbox */}
        <input
          type="checkbox"
          // Checkbox checked hoga agar task completed hai.
          checked={task.completed}
          // Checkbox click hone par parent ka
          // onToggle function call hoga.
          onChange={() => onToggle(task.id)}
          className="w-5 h-5"
        />

        {/* Task text */}
        <span
          // Agar task complete hai to line-through.
          //
          // Agar complete nahi hai to normal text.
          className={
            task.completed ? "line-through text-gray-400" : "text-gray-800"
          }
        >
          {/* Actual task text */}
          {task.text}
        </span>
      </div>

      {/* Delete button */}
      <button
        // Button click hone par delete function call.
        onClick={() => onDelete(task.id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
