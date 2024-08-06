
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './pages/userPages/registration';
import TaskRegistrationPage from './pages/taskPages/taskRegistration';
import Signin from './pages/userPages/signin';
import UserList from './pages/userPages/allUsers';
import NavBar from './components/NavBar'; 
import Footer from './components/Footer'; 
import './App.css';
import AllTasks from './pages/taskPages/allTasks';

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <NavBar />
                <main style={{ minHeight: '80vh', padding: '1rem' }}>
                    <Routes>
                        <Route path="/signup" element={<Registration />} />
                        <Route path="/users" element={<UserList />} />
                        <Route path="/task" element={<TaskRegistrationPage />} />
                        <Route path="/tasks" element={<AllTasks />} />
                        <Route path="/signin" element={<Signin />} />
                    </Routes>
                </main>
                <Footer /> {/* Place the Footer here */}
            </BrowserRouter>
        </div>
    );
}

export default App;









// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Registration from "./pages/userPages/registration";
// import TaskRegistrationPage from "./pages/taskPages/taskRegistration";
// import './App.css'
// import Signin from "./pages/userPages/signin";
// import UserList from "./pages/userPages/allUsers";

// function App() {
//   return (
//     <div className="app">
//       <BrowserRouter>
//           <Routes>
//               <Route path="/user" element={<Registration />} />
//               <Route path="/users" element={<UserList />} />
//               <Route path="/task" element={<TaskRegistrationPage />} />
//               <Route path="/signin" element={<Signin />} />
            
//           </Routes>
//           </BrowserRouter>
//     </div>
//   );
// }

// export default App;

