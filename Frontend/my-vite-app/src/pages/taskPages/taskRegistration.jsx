
import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import axios from 'axios';
const TaskRegistrationPage = () => {
    const [formData, setFormData] = useState({
      title: '',
      description: '',
      duration: null,
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          // Get the token from localStorage
          const token = localStorage.getItem("token");
  
          // Ensure the token exists
          if (!token) {
              console.error("No token found in localStorage");
              return;
          }
  
          // Set up the request headers to include the token
          const config = {
              headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json'
              }
          };
  
          // Make the request with the token included in the headers
          const response = await axios.post('http://localhost:5000/api/task/addtask', formData, config);
  
          // Handle the response
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
  };
  


  
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form onSubmit={handleSubmit}>
              <h2 className="h5 text-center mb-4">Add a task</h2>
              <div className="grey-text">
                <MDBInput
                  label="Title"
                  icon="pencil-alt"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
                <MDBInput
                  label="Description"
                  icon="book"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
                <MDBInput
                  label="Duration"
                  icon="clock"
                  group
                  type="number"
                  validate
                  error="wrong"
                  success="right"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                />
                {/* <MDBInput
                  label="Your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                /> */}
              </div>
              <div className="text-center">
                <MDBBtn type="submit">Add</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  };
  
  export default TaskRegistrationPage;