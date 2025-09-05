# NutriScan-Buddy 🍏

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-F24E1E?style=for-the-badge)
![Recharts](https://img.shields.io/badge/Recharts-FF6F61?style=for-the-badge)

**NutriScan-Buddy** is an interactive, AI-assisted web app that helps users track dietary habits, analyze health conditions, and receive healthy alternatives for cravings.  

---

## 🌟 Features

- **Modern UI**  
  - Dark gradient background with responsive layout  
  - Smooth animations using **Framer Motion**  
  - Custom icons and images  

- **Upload Box**  
  - Drag-and-drop or click to upload images of packaged product ingredients  
  - Simulated OCR reads the ingredient list from the image  
  - Automatically analyzes the ingredients based on your selected health conditions  
  - Provides a **risk evaluation** for the product:  
    - **High Risk** – Not suitable for your condition  
    - **Moderate Risk** – Consume occasionally with caution  
    - **Safe** – Suitable for your condition  

- **Health Form**  
  - Select your health conditions (e.g., diabetes, hypertension, obesity, etc.)  
  - Personalized suggestions and warnings based on your conditions  
  - Ingredient analysis from uploaded products is evaluated against your health profile to guide safe consumption  

- **Cravings Recommender**  
  - Detects common cravings like:  
    - Cake, Biscuits, Sweets  
    - Something spicy  
    - Cold drinks / soda  
    - Pasta, Noodles  
    - Burger, Namkeen  
  - Suggests healthy alternatives for each craving  
  - Default fallback: "Try fruits, nuts, or balanced snacks!"  

- **History Tracker**  
  - Records uploaded analyses and user selections in **localStorage**  
  - Easily accessible via the **History** tab  

- **Statistics & Visualization**  
  - Track your health data and cravings over time  
  - Interactive charts using **Recharts**  

- **Navigation**  
  - Responsive **Navbar** to access Upload Box, Health Form, History, and Stats  

---

## 🛠️ Tech Stack

- **Frontend:** React  
- **Styling:** TailwindCSS  
- **Animations:** Framer Motion  
- **Data Visualization:** Recharts  
- **State Management:** React Hooks + localStorage  

---

## 🔮 Future Enhancements

- Real OCR integration
- AI-based diet recommendations
- Multi-user support with authentication
- Export health reports as PDF


## 🚀 Getting Started

### **Prerequisites**

- Node.js (v16+)  
- npm (v8+)  

### **Clone Repository**

```bash
git clone https://github.com/<your-username>/NutriScan-Buddy.git
cd NutriScan-Buddy
