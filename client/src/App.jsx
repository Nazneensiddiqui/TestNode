import {BrowserRouter ,Routes, Route } from "react-router-dom"
import Layout from "./Layout";
import SignUp from "./pages/Singup";
import Login from "./pages/Login";
import DashBorad from "./pages/Dashborad";
import DisplayData from "./pages/DispalyData";
import Update from "./pages/Update";

const App=()=>{
  return(
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Login/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="signup" element={<SignUp/>}/>
    </Route>
    <Route path="dashborad"element={<DashBorad/>}>
    <Route path="displaydata" element={<DisplayData/>}/>
    <Route path="update" element={<Update/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
    
    </>
  )
}
export default App;