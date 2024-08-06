import React from 'react'
import ReactDOM from 'react-dom/client'
// import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '@fortawesome/fontawesome-free/css/all.min.css'; // Optional: You may need to import FontAwesome CSS for icons used in MDBReact components
import 'mdbreact/dist/css/mdb.css'; // Import MDBReact CSS
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)