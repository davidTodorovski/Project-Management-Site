import { Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// styles
import "./App.css";

// pages and components
import Dashboard from "./pages/dashboard/Dashboard";
import Create from "./pages/create/Create";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Project from "./pages/project/Project";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import OnlineUsers from "./components/OnlineUsers";

function App() {
  const { user, authIsReady} = useAuthContext()
  

  return (
    <div className="App">
      {authIsReady && (
        <>
      {user && <Sidebar />}
      <div className="container">
        <Navbar />
        <Routes>
          <Route exact path="/" 
          element={user ? <Dashboard /> : <Navigate replace to="/login"/> } 
          />
          <Route path="create" element={user ? <Create /> : <Navigate replace to="/login"/>} />
          <Route path="projects/:id" element={user ? <Project /> : <Navigate replace to="/login"/>} />
          <Route path="login" element={!user ? <Login /> : <Navigate replace to="/"/>} />
          <Route path="signup" element={!user ? <Signup /> : <Navigate replace to="/"/>} />
        </Routes>
      </div>
      {user && <OnlineUsers />}
      </>
)}
    </div>
  );
}

export default App;
