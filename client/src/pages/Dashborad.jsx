import Nav from 'react-bootstrap/Nav';
import { Link, Outlet } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
const DashBorad=()=>{
    return(
        <>
      <div style={{width:"100%", backgroundColor:"lightblue", height:"40", textAlign:"center"}}>
        <h4>WelCome to AdminDasborad </h4>{localStorage.getItem("username")}  Email: {localStorage.getItem("email")}</div> 
      <div style={{display:"flex",textAlign:"center"}}>
        <div style={{width:"20%", backgroundColor:"blue", height:"100vh", color:"yellow", paddingTop:"50px"}}>
<ul>
    <li><Nav.Link as={Link} to="displaydata">Display User</Nav.Link></li><br/>
    <li> <Nav.Link as={Link} to="update">Update</Nav.Link></li><br/>
    <li> <Nav.Link as={Link} to="search">Search</Nav.Link></li><br/>
    <li> <Button>Logout</Button></li><br/><br/>
</ul>

        </div>
        <div style={{width:"80%", height:"100vh",textAlign:"center"}}></div>
        <Outlet/>
        </div> 
        </>
    )
}
export default DashBorad
