import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const EditDate=()=>{
    const { id } = useParams();
    const [input, setInput] = useState({});
    const navigate = useNavigate();

    const loadData = () => {
        let api = "http://localhost:8000/admin/editdatadisplay";
        axios.post(api, { id: id}).then((res) => {
          setInput(res.data);
        });
      };
    
      useEffect(() => {
        loadData();
      }, []);
    
      const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput((values) => ({ ...values, [name]: value }));
      };
      const handleSubmit = () => {
        let api = "http://localhost:8000/admin/editdatasave";
        axios.post(api, input).then((res) => {
          console.log(res.data);
          alert("Data Successfully Updated");
          navigate("/dashborad/update");
        });
      };

    return(
        <>
       <div style={{width:"40%", margin:"auto"}}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Enter Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" name="name" value={input.name} onChange={handleInput} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Email</Form.Label>
          <Form.Control type="text" placeholder="Email" name="email"  value={input.email} onChange={handleInput} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">City</Form.Label>
          <Form.Control type="text" placeholder="City" name="city"  value={input.city} onChange={handleInput} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="disabledTextInput">Password</Form.Label>
          <Form.Control type="passwword" placeholder="password" name="password"  value={input.password} onChange={handleInput}/>
        </Form.Group>
        <Form.Group className="mb-3">
         <Button onClick={handleSubmit}>Submit</Button>
         </Form.Group>

         </div> 
        </>
    )
}
export default EditDate