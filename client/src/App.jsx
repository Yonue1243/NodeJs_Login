import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import TaskPage from "./pages/TasksPage";
import HomePage from './pages/HomePage';
import TaskFormPage from './pages/TaskFormPage';
import ProfilePage from './pages/ProfilePage';
import ProtectedRoute from "./ProtectedRoute";
import { TaskProvider } from "./context/TasksContext";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>{<HomePage/>}</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route element={<ProtectedRoute/>}>
          <Route path="/tasks" element={<h1>{<TaskPage/>}</h1>} />
          <Route path="/add-task" element={<h1>{<TaskFormPage/>}</h1>} />
          <Route path="/tasks/:id" element={<h1>{<TaskFormPage/>}</h1>} />
          <Route path="/profile" element={<h1>{<ProfilePage/>}</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
