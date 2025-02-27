import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios"

const SignUp=()=>{
    const[input ,setInput]=useState({})

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values, [name]:value}))
       
    }

    const handleSubmit=async()=>{
    let api="http://localhost:8000/admin/adminsingup";
    try {
       const response= await axios.post(api, input)
       console.log(response.data)
       alert("Successfully SignUp")
       setInput({
        name:"", email:"", city:"", password:""
       })
    } catch (error) {
        console.log(error)
    }
}

    return(
        <>
        
        <div style={{width:"40%", margin:"auto"}}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Enter Name</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Enter Name" name="name" onChange={handleInput} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Email</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="Email" name="email" onChange={handleInput} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">City</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="City" name="city" onChange={handleInput} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Password</Form.Label>
          <Form.Control id="disabledTextInput" placeholder="password" name="password" onChange={handleInput}/>
        </Form.Group>
        <Form.Group className="mb-3">
         <Button onClick={handleSubmit}>Submit</Button>
         </Form.Group>

         </div>
      
       
       
        </>
    )
}
export default SignUp;