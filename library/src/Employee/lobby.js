import React from 'react';
import { useNavigate} from 'react-router-dom';
import EmployeeTasks from './Components/Tasks';

import { date } from 'yup';
function Employee({ employee, logout }) {

  const current = new Date();
  const date = current.getFullYear() + '-' + current.getMonth() + '-' + current.getDate()
  const navigate = useNavigate();

  return (
    <div><div className='navbar'>
    <img id="logo" src="../images/logo1.png"  alt="Italian Trulli"></img>
<label id="date">תאריך:{date}</label>
          <label>שם:{employee.name}</label>
      <button className='logoutB' onClick={() => { navigate('/'); logout() }}>התנתק</button>
      <button onClick={() => navigate("/employee/addBook")}>הוספת ספר</button>
      <button onClick={() => navigate("/employee/search")}>חיפוש ספר</button>
      </div>
      <EmployeeTasks />
    
    </div>)
}

export default Employee;