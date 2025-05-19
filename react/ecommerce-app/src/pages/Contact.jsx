import { useState } from "react"
import { Form, Container, Button } from "react-bootstrap"

const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    })

    const handleSubmit = async (event) =>{
      event.preventDefault()

    try{

        const response = await fetch("https://e-commerce-2496-default-rtdb.asia-southeast1.firebasedatabase.app/contact.json",{
            method: "POST",
            body: JSON.stringify(formData),
            headers : {
                'Content-Type' : "application/json"
            }
        });

        if(!response.ok) {
          throw new Error("Something went wrong")
        }

        const data = await response.json();
        console.log(data)

      }
      catch(error){
        console.log(error.message)
      }

      setFormData({
        name: "",
        email: "",
        phone: ""
      })
      
    }

    const handleChange = (e) => {
        setFormData((prevData) => {
            return {
                ...prevData, 
                [e.target.name] : e.target.value
            }
        })
    }

  return (
    <Container className="mt-4" style={{ maxWidth: '500px' }}>
      <h3>Contact Form</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email ID</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPhone" className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Contact