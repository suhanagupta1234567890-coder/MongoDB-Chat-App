# MongoDB-Chat-App
# Chat App 

A simple chat application built using **Node.js, Express.js, MongoDB, and EJS**. This project helped me practice backend development, database operations, and CRUD functionality.

## About the Project

This application allows users to create chats, view existing conversations, and edit messages. It uses MongoDB to store chat data and Express.js to handle routes and requests.

## Features

- Create a new chat
- View all existing chats
- Edit chat messages
- Store chat details in MongoDB
- Display chat creation and update timestamps
- Use EJS to render dynamic pages

## Tech Stack

- **Node.js** — JavaScript runtime
- **Express.js** — Server and routing
- **MongoDB** — Database
- **Mongoose** — MongoDB object modeling
- **EJS** — Dynamic HTML templates
- **HTML/CSS** — Page structure and styling

## Project Structure

```text
MONGO3/
├── models/
│   └── chats.js
├── public/
│   └── style.css
├── views/
│   ├── index.ejs
│   ├── new.ejs
│   └── edit.ejs
├── index.js
├── init.js
├── package.json
└── .gitignore
```

## Getting Started

### 1. Clone the Repository

```bash
git clone <your-repository-url>
```

### 2. Open the Project Folder

```bash
cd Chat-App-MongoDB
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start MongoDB

Make sure MongoDB is installed and running on your system.

The application currently uses a local MongoDB connection. If your database configuration is different, update the connection string in `index.js`.

### 5. Run the Application

```bash
node index.js
```

If you use Nodemon, you can run:

```bash
npx nodemon index.js
```

### 6. Open in Browser

Visit:

```text
http://localhost:8080/chats
```

## What I Learned

- Creating routes using Express.js
- Connecting a Node.js application to MongoDB
- Using Mongoose schemas and models
- Performing basic CRUD operations
- Rendering dynamic pages with EJS
- Working with form submissions and HTTP methods

## Future Improvements

- Add delete functionality
- Improve the user interface
- Add user authentication
- Add real-time messaging

## Author

**Suhana Gupta**

A learning project created to practice backend development using Node.js and MongoDB.
