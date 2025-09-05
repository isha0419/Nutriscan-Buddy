export default function History({ items }) {
  if (!items.length)
    return <p className="text-gray-400">No scans yet.</p>;

  return (
    <div className="p-6 bg-gray-800 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-green-300 mb-4">📜 History</h2>
      <ul className="space-y-4">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="p-4 bg-gray-900 rounded-lg shadow-md text-gray-200"
          >
            <p className="text-sm text-gray-400">{item.date}</p>
            <pre className="mt-2">{item.text}</pre>
            <p className="mt-2 text-green-400">{item.result}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
