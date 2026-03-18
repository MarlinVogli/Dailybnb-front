import './App.css';
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import Navigation from "./components/Nav";
import Properties from "./pages/Properties";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Guides from "./pages/Guides";
import About from "./pages/About";
import Register from './pages/Register';
import Login from './pages/Login';
import AddProperty from './pages/addProperty';
import GetUsers from './pages/getUsers';
import GetProperty from './pages/getProperty';

function App() {
  return (
    <div className="App">
      <Navigation />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/list" element={
            <ProtectedRoute>
              <AddProperty />
            </ProtectedRoute>
          } />
          <Route path="/getUsers" element={
          <ProtectedRoute>
            <GetUsers />
          </ProtectedRoute>
        } />
          <Route path="/getProperty" element={
            <ProtectedRoute>
              <GetProperty />
            </ProtectedRoute>
          } />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
