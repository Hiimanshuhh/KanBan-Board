# 🗂️ Kanban Board - Task Management & Workflow Visualization App

A fully-featured **Kanban board application** for managing tasks and visualizing workflows efficiently. This app supports **user authentication**, **drag-and-drop task management**, **multi-device responsiveness**, and **rich card details** — making it an ideal tool for personal or team productivity.

---

## 🚀 Features

- 🔐 **User Registration & Login** — Secure, personalized access.
- 🗂️ **Lists & Cards** — Organize work into lists (To Do, In Progress, Testing, Done, etc.) and cards (tasks).
- 🎯 **Drag-and-Drop Support** — Seamlessly move cards across lists.
- 📅 **Task Details** — Assign names, due dates and descriptions.
- 📱 **Responsive Design** — Fully functional on mobile, tablet, and desktop.

---

## 🛠️ Tech Stack

| Frontend      | Backend              | Database           | Authentication | Styling        | Others                          |
|---------------|----------------------|--------------------|----------------|----------------|---------------------------------|
| React.js      | Node.js + Express.js | MongoDB + Mongoose | JWT            | Tailwind CSS   | Multer (file upload), React DnD |

---

## 📦 Installation

> 📝 Prerequisites:
> - Node.js and npm installed
> - MongoDB installed and running

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/kanban-board.git
cd kanban-board
```
## Install Dependencies
> 📁 Backend
```bash
cd server
npm install
```
> 📁 Frontend
```bash
cd KanBan Board
npm install
```
## Run The Application
> 🚀 Backend
```bash
cd server
node index.js
```
>💻 Frontend
```bash
cd KanBan Board
npm run dev
```
## 🧭 Folder Structure
```bash
KanBan-Board/
├── KanBan Board/                 
│   ├── public/                   
│   ├── src/                      
│   │   ├── components/           
│   │   ├── contexts/              
│   │   ├── data/                 
│   │   ├── pages/                 
│   │   ├── App.jsx                
│   │   ├── main.jsx              
│   │   └── index.css             
│   ├── index.html                
│   ├── vite.config.js            
│   ├── package.json
│   ├── package-lock.json
│   ├── eslint.config.js
│   ├── .gitignore
│   └── README.md                  
│
├── server/                        
│   ├── middleware/               
│   ├── models/                   
│   │   ├── Task.js
│   │   └── User.js
│   ├── routes/                   
│   │   ├── auth.js
│   │   └── tasks.js
│   ├── .env                      
│   ├── index.js                   
│   ├── package.json
│   └── package-lock.json
```
## 🔐 User Authentication Flow

> - Registration: User signs up → credentials stored securely (bcrypt + JWT)
> - Login: Validates credentials → returns access token
> - Protected Routes: Access user-specific boards and cards using token

## ✨ Screenshots

<img width="852" height="595" alt="image" src="https://github.com/user-attachments/assets/5695d634-e6ef-4e62-937a-e3061b3ddee0" />
<img width="845" height="608" alt="image" src="https://github.com/user-attachments/assets/1a166051-2f32-4835-a034-d641e37fb549" />
<img width="1823" height="496" alt="image" src="https://github.com/user-attachments/assets/4cca7e93-7138-4bf0-b569-4cadc94f33d7" />
<img width="1761" height="493" alt="image" src="https://github.com/user-attachments/assets/a7ca4b59-d6c8-410b-93b8-e1a70ca22963" />
<img width="610" height="732" alt="image" src="https://github.com/user-attachments/assets/a9f820fd-7255-4805-81ca-a3a0068ea4fb" />

## 🧪 Future Enhancements

- 📊 Analytics for board activity
- 👥 Team collaboration (invite users to boards)
- 🔔 Real-time notifications
- 🌐 i18n (Internationalization support)
- 🔍 Search and filter cards

 ## 🧑‍💻 Contributing
 
- Contributions are welcome! Follow these steps:
- Fork the repository
- Create your branch (git checkout -b feature/your-feature)
- Commit your changes (git commit -m 'Add your message')
- Push to the branch (git push origin feature/your-feature)
- Open a Pull Request


## 🙋‍♂️ Support

Have questions? Need help?

- Create an issue on the repository
- Email: joshihimanshu2213@gmail.com

