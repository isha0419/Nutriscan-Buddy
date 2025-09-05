import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function Stats({ history }) {
  if (!history.length)
    return <p className="text-gray-400">No stats available.</p>;

  // Count based on severity labels in the result
  const safeCount = history.filter((h) => h.result.includes("✅")).length;
  const moderateCount = history.filter((h) => h.result.includes("⚠️ Moderate")).length;
  const highRiskCount = history.filter((h) => h.result.includes("❌ High")).length;

  const data = [
    { name: "Safe", value: safeCount },
    { name: "Moderate Risk", value: moderateCount },
    { name: "High Risk", value: highRiskCount },
  ];

  const COLORS = ["#22c55e", "#facc15", "#ef4444"]; // green, yellow, red

  return (
    <div className="p-6 bg-gray-800 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-green-300 mb-4">📊 Stats</h2>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={100}
          label
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value, name) => [`${value}`, `${name}`]}
        />
        <Legend />
      </PieChart>
    </div>
  );
}
