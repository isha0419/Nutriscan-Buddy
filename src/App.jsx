import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import UploadBox from "./components/UploadBox";
import AnalysisResult from "./components/AnalysisResult";
import HealthForm from "./components/HealthForm";
import History from "./components/History";
import Stats from "./components/Stats";
import Cravings from "./components/Cravings";   // ✅ NEW
import { motion } from "framer-motion";
import { analyzeWithAI } from "./utils/ai";

export default function App() {
  const [extractedText, setExtractedText] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [conditions, setConditions] = useState([]);
  const [history, setHistory] = useState([]);
  const [loadingAI, setLoadingAI] = useState(false);

  const homeRef = useRef(null);
  const healthRef = useRef(null);
  const cravingsRef = useRef(null);   // ✅ NEW
  const historyRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem("scanHistory");
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("scanHistory", JSON.stringify(history));
  }, [history]);

  const handleAnalysis = async (text) => {
    setLoadingAI(true);
    const result = await analyzeWithAI(text, conditions);
    setAnalysis(result);

    setHistory((prev) => [
      ...prev,
      { text, result, date: new Date().toLocaleString() },
    ]);
    setLoadingAI(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white font-sans">
      <Navbar refs={{ homeRef, healthRef, cravingsRef, historyRef, statsRef }} />

      {/* Hero Section */}
      <section ref={homeRef} className="text-center py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-green-400"
        >
          🍏 NutriScan Buddy
        </motion.h1>
        <p className="mt-4 text-gray-300 text-lg">
          Scan. Analyze. Eat Better. Stay Healthy.
        </p>
      </section>

      <main className="max-w-5xl mx-auto p-6 space-y-16">
        {/* Health Profile */}
        <section ref={healthRef}>
          <HealthForm selected={conditions} setSelected={setConditions} />
        </section>

        {/* Upload & Analysis */}
        <section>
          <UploadBox
            onExtracted={(text) => {
              setExtractedText(text);
              handleAnalysis(text);
            }}
          />

          {loadingAI && (
            <p className="mt-4 text-green-400 animate-pulse">
              🤖 Analyzing with AI...
            </p>
          )}

          {extractedText && !loadingAI && (
            <AnalysisResult text={extractedText} result={analysis} />
          )}
        </section>

        {/* Cravings Recommender */}
        <section ref={cravingsRef}>
          <Cravings />
        </section>

        {/* History */}
        <section ref={historyRef}>
          <History items={history} />
        </section>

        {/* Stats */}
        <section ref={statsRef}>
          <Stats history={history} />
        </section>
      </main>
    </div>
  );
}
