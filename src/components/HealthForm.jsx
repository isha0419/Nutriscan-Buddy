const CONDITIONS = [
  "Diabetes",
  "Hypertension",
  "High Cholesterol",
  "Obesity",
  "Heart Disease",
  "Kidney Disease",
  "Gluten Sensitivity",
  "Lactose Intolerance",
];

export default function HealthForm({ selected, setSelected }) {
  const toggleCondition = (condition) => {
    if (selected.includes(condition)) {
      setSelected(selected.filter((c) => c !== condition));
    } else {
      setSelected([...selected, condition]);
    }
  };

  return (
    <div className="p-6 bg-gray-800 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-green-300 mb-4">
        🩺 Your Health Profile
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {CONDITIONS.map((c) => (
          <button
            key={c}
            onClick={() => toggleCondition(c)}
            className={`px-4 py-2 rounded-lg transition ${
              selected.includes(c)
                ? "bg-green-500 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
