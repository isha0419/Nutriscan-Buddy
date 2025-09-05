import { useState } from "react";
import Tesseract from "tesseract.js";

export default function UploadBox({ onExtracted }) {
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    try {
      const { data: { text } } = await Tesseract.recognize(file, "eng");
      onExtracted(text);
    } catch (err) {
      console.error("OCR Error:", err);
      onExtracted("❌ Could not read text from image.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6 text-center">
      <h2 className="text-lg font-semibold mb-3">Upload Nutrition Label</h2>
      <input 
        type="file" 
        accept="image/*"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
                   file:rounded-lg file:border-0 file:text-sm file:font-semibold
                   file:bg-green-100 file:text-green-700 hover:file:bg-green-200"
      />
      {loading && <p className="mt-4 text-green-600">⏳ Scanning image...</p>}
    </div>
  );
}
