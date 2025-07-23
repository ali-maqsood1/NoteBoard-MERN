# 📝 NoteBoard - MERN Stack Notes App

NoteBoard is a full-stack note-taking application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to create, view, and manage notes through a sleek, responsive interface with rate-limit protection and a neon-themed UI.

**Live Demo:**
👉 [https://noteboard-mern.onrender.com](https://noteboard-mern.onrender.com)

---

## 🚀 Features

* 📒 Create, read, update, and delete notes
* ⚡ Rate-limit handling UI (429 error feedback)
* 🎨 Neon blue aesthetic with TailwindCSS
* 🌐 Fully responsive and accessible design
* 🔧 Easy to deploy on Render or other platforms
* 🧠 Built with best practices using Vite + React + Express

---

## 🛠️ Tech Stack

**Frontend**

* React + Vite
* Tailwind CSS
* Axios
* Lucide Icons

**Backend**

* Express.js
* MongoDB + Mongoose
* CORS, dotenv

---

## ScreenShots
*CreateNote page
<img width="1440" height="753" alt="Screenshot 2025-07-23 at 5 28 42 PM" src="https://github.com/user-attachments/assets/f579e5c3-36cc-4bdd-9591-d239fbfb4440" />

*Home Page
<img width="1440" height="754" alt="Screenshot 2025-07-23 at 5 31 40 PM" src="https://github.com/user-attachments/assets/944f7ec6-7c33-426e-a225-22d073c61dd0" />




## 📆 Project Structure

```
NoteBoard-MERN/
├── backend/
│   ├── server.js
│   ├── models/
│   └── routes/
├── frontend/
│   ├── index.html
│   ├── src/
│   └── tailwind.config.js
├── package.json (workspace root)
└── .env
```

---

## 🚧 Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/ali-maqsood1/NoteBoard-MERN.git
cd NoteBoard-MERN
```

### 2. Install dependencies

```bash
npm install --prefix backend
npm install --prefix frontend
```

### 3. Setup environment variables

Create a `.env` file in `/backend`:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
```

### 4. Run in development

```bash
npm run start    # Starts backend (port 5001)
npm run dev --prefix frontend    # Starts frontend (port 5173 or 3000)
```

---

## 🏗️ Build for Production

```bash
npm run build
```

This installs all dependencies and builds the frontend for deployment.

---

## 🌍 Deployment (Used on Render)

* Backend is deployed on Render with environment variables
* Frontend is built and served using static hosting

---

## 💡 Future Improvements

* ✨ User authentication (JWT)
* 📁 Note categories/tags
* 🔍 Search & filter
* 🗑️ Trash bin / archive
* 🌙 Light/dark mode toggle

---

## 🙌 Acknowledgements

* [Tailwind CSS](https://tailwindcss.com/)
* [Lucide Icons](https://lucide.dev/)
* [Render](https://render.com/)
* [Vite](https://vitejs.dev/)

---

## 🧑‍💻 Author

Made with 💙 by [Ali Maqsood](https://github.com/ali-maqsood1)

---
