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

// https://github.com/fireclint/data-finance-react-tailwind/blob/main/src/components/Analytics.jsx

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


export default function App() {
  // const listItems = [
  //   {
  //     id: "item1",
  //     label: "item1"
  //   },
  //   {
  //     id: "item2",
  //     label: "item2"
  //   },
  //   {
  //     id: "item3",
  //     label: "item3"
  //   },
  //   {
  //     id: "item4",
  //     label: "item4"
  //   }
  // ]

  // const draggedItems = [ {id: "item10", label: "Item10"}]
  return (
    <>
      
      {/* <Home/> */}
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/news" element={<News />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/LoginH" element={<LoginH />} />
            <Route path="/contenido" element={<Curso />} /> {/*Cambiar nombre*/}
            <Route path="/prueba" element={<Prueba />} />
            <Route path="/actividad" element={<ActivityView />} />
            <Route path="/drag" element={<Drag/>} />
            <Route path="/queries" element={<Queries/>} />
            

            

          </Routes>

        </Router>
    </>
  )
}
