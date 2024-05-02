//import DragD from "./components/drag_and_drop"

import Home from "./components/Home"
import AboutUs from "./components/aboutUs"
import News from "./components/News"
import Login from "./components/Login"
import Register from "./components/Register"
import LoginH from "./components/loginUI/loginHome"


// https://github.com/fireclint/data-finance-react-tailwind/blob/main/src/components/Analytics.jsx
// https://www.youtube.com/watch?v=hYv6BM2fWd8
// https://www.youtube.com/watch?v=MvNyJohJdSc
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
            {/* <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/news" element={<News />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login_page/:id" element={<lComponent/>} />
            
            <Route path="/dashboard" element={<Dashboard />} /> */}

          </Routes>

        </Router>
    </>
  )
}
