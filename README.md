# 👨‍💼 Employee Management System (Frontend Only)

A **frontend-only Employee Management System (EMS)** built using **React.js**, designed to manage employee data such as adding, editing, deleting, and viewing employee details.  
All data is stored and managed using **Browser Local Storage**, without using any backend or database.

---

## 📖 Overview

This Employee Management System is a single-page web application that demonstrates core frontend development concepts including component-based architecture, state management, form handling, and data persistence using Local Storage.

The project simulates real-world employee management functionality while keeping the implementation lightweight and easy to understand.

---

## ✨ Features

- ➕ Add new employees  
- ✏️ Edit employee details  
- ❌ Delete employee records  
- 👁️ View employee list  
- 🔍 Search and filter employees  
- 💾 Data persistence using Local Storage  
- 📱 Responsive and user-friendly UI  

---

## 🛠️ Tech Stack

- React.js  
- JavaScript (ES6+)  
- HTML5  
- CSS3 / Tailwind CSS  
- Browser Local Storage  

---

## 📂 Project Structure

employee-management-system/
│
├── src/
│ ├── components/
│ ├── pages/
│ ├── hooks/
│ ├── utils/
│ └── App.jsx
│
├── public/
├── package.json
└── README.md


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Dharmendra4455/EMS_Code.git

2️⃣ Install dependencies
npm install

3️⃣ Run the project
npm run dev

💾 Local Storage Usage

Employee data is stored in the browser using Local Storage to maintain persistence across page refreshes.

Example:

localStorage.setItem("employees", JSON.stringify(employeeList));


Retrieve data:

const data = JSON.parse(localStorage.getItem("employees")) || [];

🧠 Learning Outcomes

✨React component-based architecture

✨State management using hooks

✨CRUD operations with Local Storage

✨Form validation and controlled inputs

✨Responsive UI design

Frontend project structuring

🚀 Future Enhancements

✨Backend integration (Node.js + MongoDB)

✨Role-based access control

✨Authentication system

✨Export employee data (CSV / PDF)

✨Cloud deployment
