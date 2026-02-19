# 🏨 Room Allocation System

A responsive Room Management & Allocation Web Application built using **React.js (Vite)** and deployed on Vercel.

This project allows users to add rooms, search rooms, and intelligently allocate the smallest suitable room based on given requirements.

---

## 🚀 Live Demo

🔗 https://smart-hostel-room-allocation.vercel.app/

---

## 📌 Project Overview

The Room Allocation System is designed to manage hostel rooms efficiently.  

It allows users to:

- Add new rooms
- View all rooms
- Search rooms
- Allocate rooms based on requirements
- Delete rooms
- Persist room data using localStorage

The system ensures that the **smallest possible room** satisfying the requirements is allocated.

---

## ✅ Functional Requirements Implemented

### 1️⃣ Add Room
Users can add new hostel rooms with:
- Room Number
- Capacity
- AC Availability (Yes / No)
- Attached Washroom (Yes / No)

---

### 2️⃣ View All Rooms
Displays:
- Room Number
- Capacity
- AC Status
- Washroom Type
- Delete Option

---

### 3️⃣ Search Rooms
Users can filter rooms by:
- Minimum Required Capacity
- AC Required (Yes / No)
- Attached Washroom Required (Yes / No)

---

### 4️⃣ Allocate Room

`AllocateRoom(students, needsAC, needsWashroom)`

- Allocates the smallest suitable room
- Displays success message with room details
- Shows "No room available" if no matching room exists

---

## 🎨 UI Features

- Clean and centered layout
- Responsive design (Mobile / Tablet / Desktop)
- Styled buttons and cards
- Success & error message highlighting
- Production CSS debugging handled

---

## 🛠 Tech Stack

- Frontend: React.js (Vite)
- Styling: Custom CSS (Responsive Design)
- State Management: React Hooks (useState, useEffect)
- Data Persistence: Browser localStorage
- Deployment: Vercel
- Version Control: Git & GitHub

---

## 📂 Project Structure

```
src/
 ├── App.jsx
 ├── App.css
 ├── main.jsx
 └── assets/
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/your-repository-name.git
```

### 2️⃣ Navigate to Project

```bash
cd your-repository-name
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Run Development Server

```bash
npm run dev
```

### 5️⃣ Build for Production

```bash
npm run build
```

---

## 🌍 Deployment

This project is deployed using Vercel.

Steps:
1. Push project to GitHub
2. Import repository into Vercel
3. Automatic CI/CD deployment

---

## 🧠 Allocation Logic (Core Concept)

1. Filter rooms that:
   - Have sufficient capacity
   - Match AC requirement
   - Match washroom requirement

2. Sort filtered rooms by capacity (ascending)

3. Allocate the smallest suitable room

This ensures optimal space utilization.

---

## 📱 Responsive Design

The application is fully responsive and works on:

- Mobile Devices
- Tablets
- Laptops
- Desktop Screens

---

## 🚀 Future Improvements

- Backend Integration (Node.js + Express)
- Database (MongoDB)
- Authentication (Admin Login)
- Room Availability Status Tracking
- Advanced Sorting & Filtering
- Tailwind CSS Migration
- UI Animation Enhancements

---

## 👩‍💻 Author

**Akhila Sanga**  
Java Developer | React Developer | Software Engineer

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!
