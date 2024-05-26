//import DragD from "./components/drag_and_drop"

import Home from "./components/Home"
import AboutUs from "./components/aboutUs"
import News from "./components/News"
import Login from "./components/Login"
import Register from "./components/Register"
import LoginH from "./components/loginUI/loginHome"
import Curso from "./components/loginUI/Curso"
import Prueba from "./components/loginUI/prueba"
import ActivityView from "./components/loginUI/activityView"
import Drag from "./components/loginUI/drag_and_drop"
import Queries from "./components/loginUI/Queries"
import MultipleChoiceQuestion from "./components/loginUI/mcq"
// https://github.com/fireclint/data-finance-react-tailwind/blob/main/src/components/Analytics.jsx

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Logout from "./components/logout"
import { ProtectedRoute } from "./components/protectedRoute/ProtectedRoute"

import { useState } from "react";

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      {/* <Home/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/prueba" element={<Prueba />} />
          <Route path="/news" element={<News />} />
          <Route path="/login" element={<Login setIsLogin={setIsLogin} isLogin={isLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/loginH" element={
            <ProtectedRoute isLogin={isLogin}>
              <LoginH />
            </ProtectedRoute>
          } />
          <Route path="/contenido/:idmodule" element={
            <ProtectedRoute isLogin={isLogin}>
              <Curso />
            </ProtectedRoute>} />            
          <Route path="/prueba" element={<ProtectedRoute isLogin={isLogin}>
            <Prueba />
          </ProtectedRoute>} />
          <Route path="/actividad" element={<ProtectedRoute isLogin={isLogin}>
            <ActivityView />
          </ProtectedRoute>} />
          <Route path="/drag/:idmodule" element={<ProtectedRoute isLogin={isLogin}>
            <Drag />
          </ProtectedRoute>} />
          <Route path="/queries/:idmodule" element={<ProtectedRoute isLogin={isLogin}>
            <Queries />
          </ProtectedRoute>} />
          <Route path="/mcq/:idmodule" element={<ProtectedRoute isLogin={isLogin}>
            <MultipleChoiceQuestion />
          </ProtectedRoute>} />
          <Route path="*" element={<Home />} />
          <Route path="/logout" element={<Logout setIsLogin={setIsLogin} />} />
        </Routes>
      </Router>
    </>
  )
}
