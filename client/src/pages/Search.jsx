import axios from "axios";
import { useState } from "react";
import Table from 'react-bootstrap/Table';


const Search=()=>{
const [input , setInput]=useState("")
const[mydata ,  setmydata]=useState([])

const SearchData=()=>{
 let api="http://localhost:8000/admin/datasearch";
 axios.post(api, {input:input} ).then((res)=>{
    console.log(res.data)
    setmydata(res.data)
 })
}

const ans=mydata.map((key)=>{
    return(
        <>
        <tr>
            <td>{key.name}</td>
            <td>{key.email}</td>
            <td>{key.city}</td>
           
        </tr>
        </>
    )
})
    return(
        <>
       <h1>Search Data</h1> 
       <div style={{margin:"20px"}}>
       Enter  Name : <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
       <button onClick={SearchData}>Search</button>
       </div>
       <hr/>
       <Table striped bordered hover style={{width:"50%"}}>
      <thead>
        <tr>
        
          <th> Name</th>
          <th>Email</th>
          <th>City</th>
         
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>
        </>
    )
}
export default Search;