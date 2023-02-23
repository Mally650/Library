import React from 'react';
import { useNavigate } from 'react-router-dom';

function Open() {
  const navigate = useNavigate();
  return (
    <div className='open'>
     <img src="../images/1.jpg" alt="Italian Trulli"></img>
     <br></br>
      {/* <h1>הספרייה</h1> */}
      <button className='buttonOpen' onClick={() => navigate("/login/customer")}>לקוח</button>
      <button className='buttonOpen' onClick={() => navigate("/login/employee")}>עובד</button>
    </div>)
}

export default Open;