

import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import axios from 'axios';
import { Navigate, redirect } from 'react-router-dom';
const Signin = () => {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:5000/api/users/signin', formData);
        console.log(response.data);
        localStorage.setItem("token", response.data.token); // Store the token in localStorage
        console.log("Token creatd Succefully");
        window.location.replace("/task"); // Redirect to TaskPage upon success
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form onSubmit={handleSubmit}>
            {/* <form action='http://localhost:5000/api/users/signin' method='post'> */}
              <h2 className="h5 text-center mb-4">Sign in</h2>
              <div className="grey-text">
                <MDBInput
                  label="Your email"
                  icon="envelope"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <MDBInput
                  label="Your Password"
                  icon="key"
                  group
                  type="password"
                  validate
                  error="wrong"
                  success="right"
                  name="password"
                 value={formData.password}
                 onChange={handleChange}
                />
              </div>
              <div className="text-center">
                <MDBBtn type="submit">Sign in</MDBBtn>
              </div>
            </form>

            <form action='/signup' className='text-center'>
              <p>Don't have an accout? →</p>
              <MDBBtn type='submit' className='sign-in'>Sign Up</MDBBtn>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  };
  
  export default Signin;


