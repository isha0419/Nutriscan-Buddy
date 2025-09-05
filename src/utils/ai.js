// Enhanced rules-based local AI with severity ranking
export async function analyzeWithAI(text, conditions = []) {
  const txt = text.toLowerCase();

  let warningCount = 0; // Counts matched risk factors
  let messages = [];

  // Common processed/unhealthy snack keywords
  const processedSnacks = [
    "kurkure",
    "puffcorn",
    "chips",
    "namkeen",
    "instant noodles",
    "maggi",
    "fried",
    "packaged snack",
    "junk food",
    "cookie",
    "cake",
    "pastry",
    "soda",
    "cola",
  ];

  // Ingredients or keywords linked to health risks
  const sugarKeywords = ["sugar", "honey", "glucose", "sweet", "syrup"];
  const sodiumKeywords = ["sodium", "salted", "salt"];
  const fatKeywords = ["fat", "butter", "cream", "oil", "ghee"];
  const transFatKeywords = ["trans fat", "hydrogenated"];
  const proteinKeywords = ["protein", "soy", "milk"];
  const glutenKeywords = ["wheat", "gluten", "barley", "rye", "maida"];
  const lactoseKeywords = ["milk", "cheese", "butter", "yogurt", "cream", "lactose"];
  const lowIronKeywords = ["low iron"];
  const processedKeywords = ["processed", "fried", "junk food", "instant noodles", "packaged"];

  const hasKeyword = (keywords) => keywords.some((k) => txt.includes(k));

  // --------------------------
  // Condition-specific checks
  // --------------------------
  if (conditions.includes("Diabetes") && (hasKeyword(sugarKeywords) || hasKeyword(processedSnacks))) {
    messages.push("High sugar or processed food detected. Avoid for diabetes.");
    warningCount++;
  }

  if (conditions.includes("Obesity") && (hasKeyword(processedSnacks) || hasKeyword(sugarKeywords) || hasKeyword(fatKeywords))) {
    messages.push("High calorie or processed food. Avoid if managing weight.");
    warningCount++;
  }

  if (conditions.includes("Hypertension") && (hasKeyword(sodiumKeywords) || hasKeyword(processedSnacks))) {
    messages.push("High sodium or processed food. Risky for hypertension.");
    warningCount++;
  }

  if (conditions.includes("High Cholesterol") && (hasKeyword(fatKeywords) || hasKeyword(transFatKeywords) || hasKeyword(processedSnacks))) {
    messages.push("High fat or trans fat detected. Bad for cholesterol.");
    warningCount++;
  }

  if (conditions.includes("Heart Disease") && (hasKeyword(transFatKeywords) || hasKeyword(fatKeywords) || hasKeyword(processedSnacks))) {
    messages.push("Unhealthy fats or processed food detected. Risky for heart health.");
    warningCount++;
  }

  if (conditions.includes("Kidney Disease") && (hasKeyword(proteinKeywords) || hasKeyword(processedSnacks))) {
    messages.push("High protein or processed food. Stressful for kidney issues.");
    warningCount++;
  }

  if (conditions.includes("Gluten Sensitivity") && hasKeyword(glutenKeywords)) {
    messages.push("Contains gluten. Avoid for gluten sensitivity.");
    warningCount++;
  }

  if (conditions.includes("Lactose Intolerance") && hasKeyword(lactoseKeywords)) {
    messages.push("Contains lactose. Risky for lactose intolerance.");
    warningCount++;
  }

  if (conditions.includes("Anemia") && hasKeyword(lowIronKeywords)) {
    messages.push("Low iron content. Not good for anemia.");
    warningCount++;
  }

  if (conditions.includes("PCOS") && (hasKeyword(sugarKeywords) || hasKeyword(processedKeywords))) {
    messages.push("Processed or sugary food. Not recommended for PCOS.");
    warningCount++;
  }

  // --------------------------
  // Severity Ranking
  // --------------------------
  let severity = "✅ Safe to consume"; // default

  if (warningCount === 1) {
    severity = "⚠️ Moderate risk – consume with caution";
  } else if (warningCount > 1) {
    severity = "❌ High risk – avoid consuming";
  }

  // Combine severity with messages
  if (messages.length > 0) {
    return `${severity}. ${messages.join(" ")}`;
  }

  return severity; // safe
}
