// TaskStats ko parent se 3 props mil rahe hain:
//
// total
// completed
// remaining

function TaskStats({ total, completed, remaining }) {
  return (
    // 3 columns ka layout
    <div className="grid grid-cols-3 gap-3 mt-6">
      {/* Total Tasks */}
      <div className="bg-white p-4 rounded-lg text-center shadow-sm">
        {/* Number */}
        <p className="text-2xl font-bold">{total}</p>

        {/* Label */}
        <p className="text-gray-500 text-sm">Total</p>
      </div>

      {/* Completed Tasks */}
      <div className="bg-white p-4 rounded-lg text-center shadow-sm">
        <p className="text-2xl font-bold text-green-600">{completed}</p>

        <p className="text-gray-500 text-sm">Completed</p>
      </div>

      {/* Remaining Tasks */}
      <div className="bg-white p-4 rounded-lg text-center shadow-sm">
        <p className="text-2xl font-bold text-orange-500">{remaining}</p>

        <p className="text-gray-500 text-sm">Remaining</p>
      </div>
    </div>
  );
}

export default TaskStats;
