import axios from "axios";
import { useState } from "react"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";


const Update=()=>{
    const [mydata, setMydata]=useState([])
const navigate=useNavigate()
    const loadData=async()=>{
        let api="http://localhost:8000/admin/displaydata";
        try {
            const response=await axios.get(api)
            setMydata(response.data)
            console.log(response.data)
        } catch (error) {
          console.log(error)  
        }
    }

useState(()=>{
    loadData()
},[])


const deleteData=(id)=>{
    let api="http://localhost:8000/admin/deletedata";
    try {
        const response= axios.post(api, {id:id})
      alert("Data Delete")
       } catch (error) {
      console.log(error)  
    }
    loadData()
   }

   const editData=(id)=>{
    navigate(`/dashborad/edit/${id}`)
   }

const ans=mydata.map((key)=>{
    return(
        <>
       <tr>
        <td>{key.name}</td>
        <td>{key.email}</td>
        <td>{key.city}</td>
        <td>
     
        <Button variant="danger" onClick={()=>{deleteData(key._id)}}>Delet</Button>
        </td>
        <td>
        <Button variant="warning" onClick={()=>{editData(key._id)}}>Edit</Button>
        </td>
         </tr> 
        
        </>
    )
})

    return(
        <>
      <center>
        <h1>Display Data</h1>
        <Table striped bordered hover>
      <thead>
        <tr>
         <th> Name</th>
          <th>Email</th>
          <th>City</th>
          <th>Delet</th>
          <th>Edit</th>
       
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
        </Table>
        </center>  
        </>
    )
}
export default Update
