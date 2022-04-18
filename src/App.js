import { useState } from 'react';
import './App.css';
import {Form, Button, Row, Col} from "react-bootstrap";
import DeleteIcon from '@mui/icons-material/Delete';
import {IconButton} from "@mui/material" 
import Swal from 'sweetalert2';
function App() {
  const[todos , setToDos]=useState(["Waking up early in the morning", "Writing daily tasks"])
  const [task , setTask] = useState("")
  function handleSubmit(e){
    e.preventDefault();
    setToDos([...todos, task]);
    Swal.fire({
      icon: 'success',
      title: 'Task added',
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
    })
  }
  function handleDelete(id){
    let temp = todos.filter((todo , index)=> index !== id);
    console.log("temp===>", temp);
    setToDos(temp);
    Swal.fire({
      icon: 'warning',
      title: 'Task deleted',
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
    })
  }
  return (
    <div className="container">
      <h1>To Do</h1>
      <Form className="my-5" onSubmit={(e)=> handleSubmit(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>New to do</Form.Label>
          <Form.Control type="input" placeholder="Enter new task" onChange={(e)=>setTask(e.target.value)}/>
          <Form.Text className="text-danger">
           please enter new tasks
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" disabled={task === ''}>
            create
        </Button>
      </Form>
      <Row>
        {todos && todos.map((todo , id) =>(
          <Col lg="4" key={id}>
            <div className="card">
              <div className="card-body d-flex justify-content-between align-items-center">
              {todo}<IconButton onClick={() => handleDelete(id)} ><DeleteIcon /></IconButton>
              </div>
            </div>
            </Col>
        ))}
      </Row>
    </div>
  );
}

export default App;
