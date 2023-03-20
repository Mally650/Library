import React from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeTasks from './Components/Tasks';
import { format } from "date-fns";
import { date } from 'yup';
function Employee({ employee, logout }) {

  const current = new Date();
  const date = current.getFullYear() + '-' + current.getMonth() + '-' + current.getDate()
  const navigate = useNavigate();

  return (
    <div><div className='header-section'>
      <img className='logo-image' src="../images/Library.jpg" alt="Italian Trulli"></img>

      <div className='flex-column'>
      <label id="date">תאריך: {format(new Date(date), "dd-MM-yyyy")} </label>
        <label>שם:{employee.name}</label>
      </div>
      <button className='add-book' onClick={() => navigate("/employee/addBook")}>הוספת ספר</button>
      <button className='search-icon' onClick={() => navigate("/employee/search")}>חיפוש ספר</button>
      <div className="back-icon" title="back" onClick={() => navigate("/")}></div>
      <div className='logout-icon' onClick={() => { navigate('/'); logout() }} title="התנתק"></div>
    </div>
      <EmployeeTasks />

    </div>)
}

export default Employee;