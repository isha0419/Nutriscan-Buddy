export default function AnalysisResult({ text, result }) {
  return (
    <div className="mt-6 p-6 bg-gray-800 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold text-green-300 mb-2">
        Extracted Info:
      </h2>
      <pre className="text-gray-200 bg-gray-900 p-4 rounded-lg overflow-x-auto">
        {text}
      </pre>
      <h2 className="text-xl font-semibold text-green-300 mt-4 mb-2">
        AI Analysis:
      </h2>
      <p className="text-gray-100">{result}</p>
    </div>
  );
}
