import React from 'react';
import { useNavigate } from 'react-router-dom';

function Open() {
  const navigate = useNavigate();
  return (
    <div>
      <div className='header-section'>
         <img className='logo-image' src="../images/Library.jpg" alt="Italian Trulli"></img>
        <div className='actions-bar'>
          <div className="icon order-3">
            <div className="back-icon" onClick={() => navigate("/")} title="חזור"></div>
          </div>
        </div>
      </div>
      <div className='login-frame'>
        <div>איזה סוג משתמש אתה?
        </div>
        <button className='login-btn-customer' onClick={() => navigate("/login/customer")}>לקוח</button>
        <button className='login-btn-employee' onClick={() => navigate("/login/employee")}>עובד</button></div>
    </div>)
}

export default Open;