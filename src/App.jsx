import { Route, Routes } from "react-router-dom"
import About from "./Pages/About"
import Contact from "./Pages/contac"
import Home from "./Pages/Home"

function App(){
  
  return <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/About" element={<About/>}/>
<Route path="/Contact" element={<Contact/>}/>
   
   
 </Routes>
}

export default App