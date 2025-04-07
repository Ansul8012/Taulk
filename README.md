# Taulk - Real-Time Chat Application

Taulk is a real-time chat application that allows users to connect, communicate, and share moments with friends and family. Built with a modern tech stack, Taulk provides a seamless and interactive user experience.

## Features

### 1. **User Authentication**
- **Sign Up**: Users can create an account with their full name, email, and password.
- **Login**: Existing users can log in securely using their credentials.
- **Logout**: Users can log out of their accounts securely.
- **Profile Management**: Users can update their profile picture and view their account details.

### 2. **Real-Time Messaging**
- **Send Messages**: Users can send text messages to other users in real-time.
- **Image Sharing**: Users can upload and share images in their conversations.
- **Message History**: View the complete chat history with other users.

### 3. **User Sidebar**
- **Contact List**: Displays a list of all users except the logged-in user.
- **Online Status**: Shows which users are currently online.
- **Filter Online Users**: Option to filter and display only online users.

### 4. **Responsive Design**
- Fully responsive UI that works seamlessly on both desktop and mobile devices.

### 5. **Real-Time Notifications**
- Users receive real-time notifications for new messages.

### 6. **Account Information**
- View account details such as full name, email, and member since date.
- Displays account status (e.g., Active).

### 7. **Secure Authentication**
- JWT-based authentication with secure cookies.
- Passwords are hashed using bcrypt for security.

### 8. **Cloudinary Integration**
- Profile pictures and shared images are uploaded and stored securely using Cloudinary.

### 9. **Skeleton Loaders**
- Skeleton loaders are displayed while data is being fetched, ensuring a smooth user experience.

### 10. **Themes**
- Multiple themes are available, including light, dark, retro, and more.

## Tech Stack

### Frontend
- **React**: For building the user interface.
- **Vite**: For fast development and build processes.
- **Tailwind CSS**: For styling the application.
- **DaisyUI**: For pre-designed UI components.
- **Zustand**: For state management.
- **Socket.IO Client**: For real-time communication.

### Backend
- **Node.js**: For server-side logic.
- **Express.js**: For building RESTful APIs.
- **MongoDB**: For storing user and message data.
- **Mongoose**: For MongoDB object modeling.
- **Socket.IO**: For real-time communication.
- **Cloudinary**: For image storage and management.

### DevOps
- **Nodemon**: For automatic server restarts during development.
- **dotenv**: For managing environment variables.

## Installation and Setup

### Prerequisites
- Node.js and npm installed on your system.
- MongoDB database connection string.
- Cloudinary account for image storage.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/Taulk.git
   cd Taulk