import { useState } from "react";

const SUGGESTIONS = {
  chips: ["Baked veggie chips", "Roasted makhana", "Air-popped popcorn"],
  chocolate: ["Dark chocolate (70%+)", "Dates with cocoa", "Protein bars"],
  soda: ["Sparkling water", "Lemon water", "Herbal tea"],
  icecream: ["Frozen yogurt", "Fruit sorbet", "Blended banana nice-cream"],
  pizza: ["Whole wheat pizza with veggies", "Paneer wrap", "Veggie quesadilla"],
  cake: ["Banana bread", "Oatmeal muffins", "Fruit cake with less sugar"],
  biscuits: ["Oat biscuits", "Digestive cookies", "Almond cookies"],
  spicy: ["Roasted chickpeas with spices", "Spiced popcorn", "Grilled veggie skewers"],
  sweets: ["Dates with nuts", "Chia seed pudding", "Fruit parfaits"],
  colddrinks: ["Sparkling water with fruit", "Coconut water", "Herbal iced tea"],
  pasta: ["Whole wheat pasta with veggies", "Zucchini noodles", "Quinoa pasta salad"],
  noodles: ["Stir-fried veggies with soba noodles", "Rice noodles with tofu", "Whole wheat noodles"],
  namkeen: ["Roasted makhana", "Sprout chaat", "Baked veggie sticks"],
  burger: ["Veggie burger with whole wheat bun", "Grilled paneer sandwich", "Chickpea patty wrap"],
};

export default function Cravings() {
  const [craving, setCraving] = useState("");
  const [alternatives, setAlternatives] = useState([]);

  const handleSuggest = () => {
    const key = craving.toLowerCase().trim();
    setAlternatives(SUGGESTIONS[key] || ["🥗 Try fruits, nuts, or balanced snacks!"]);
  };

  return (
    <div className="p-6 bg-gray-800 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-green-300 mb-4">
        😋 Craving Something?
      </h2>
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="e.g., Chips, Chocolate, Cake..."
          value={craving}
          onChange={(e) => setCraving(e.target.value)}
          className="flex-1 p-3 rounded-lg bg-gray-700 text-white focus:outline-none"
        />
        <button
          onClick={handleSuggest}
          className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg"
        >
          Suggest
        </button>
      </div>
      {alternatives.length > 0 && (
        <ul className="mt-4 space-y-2 text-gray-200">
          {alternatives.map((alt, i) => (
            <li key={i} className="p-2 bg-gray-900 rounded-md">
              ✅ {alt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
