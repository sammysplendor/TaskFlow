# TaskFlow

TaskFlow is a frontend-only SaaS task management application featuring a conversion-focused landing page and an interactive dashboard for task tracking and progress insights. Built to demonstrate modern React architecture, reusable components, and polished UI/UX.

Live Demo:

https://taskflow-rust-three.vercel.app/

## Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![CSS Modules](https://img.shields.io/badge/CSS%20Modules-1572B6?style=for-the-badge&logo=cssmodules&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## Design Decisions & Architecture

TaskFlow follows a component-driven architecture using React to maximize reusability and maintainability. The project separates concerns into:

- Pages (high-level routes)
- Components (reusable UI pieces)
- Layouts (structural shells)
- Routes (navigation)

State is handled locally within components where appropriate, keeping the project lightweight and frontend-focused.

Routing is managed with React Router to provide a single-page application experience while maintaining clean, bookmarkable URLs.

The landing page is designed to be conversion-driven, guiding users toward authentication and dashboard access — simulating a SaaS product flow.

Deployment is handled via Vercel, ensuring fast global delivery and continuous deployment.

## Features

- Conversion-focused SaaS landing page
- Authentication UI (Sign up & Login)
- Interactive task management dashboard
- Sidebar navigation system
- Task overview and progress insights
- Responsive layout for multiple screen sizes
- Modular and reusable component architecture

## Project Structure

``` bash
src
 ├─ assets
 ├─ components
 │   ├─ common
 │   ├─ navbar
 |   └─ sidebar
 ├─ data
 ├─ pages
 │   ├─ auth
 │   ├─ dashboard
 │   └─ landing
 ├─ layout
 └─ routes

 ```

 ## Prerequisites
 ``` bash
 Node.js >= 18
 npm or yarn
```

 ## Getting Started
 
 Follow these simple steps to run the project locally:

 **1. Clone the repository**
 ``` bash
   git clone https://github.com/yourusername/taskflow.git
 ```

 **2. Navigate into the project directory**
 ``` bash
   cd taskflow
 ```

 **4. Install dependencies**
 ``` bash
   npm install
 ```

 **5. Run the development server**
 ``` bash
   npm run dev
 ```

  The app will run at:
  ``` bash
  http://localhost:5173
 ```

 ## Deployment

 The application is deployed on Vercel.
 ``` bash
  npm run build
 ```

 ## Notes

 This project is a frontend MVP focused on the core dashboard experience. Some sidebar sections are placeholders for future expansion.

 Future improvements:
 - Backend integration
 - Authentication system
 - Real-time task updates
 - Database persistence

 ## Author
 
 Samuel Ezeh
 
 Frontend Developer
