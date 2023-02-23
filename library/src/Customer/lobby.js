import React from 'react';
import { useNavigate } from 'react-router-dom';
import LendedBooks from './Components/LendedBooks';
import Wishedbooks from './Components/WishedBooks';

function Customer({ customer, logout }) {
    const navigate = useNavigate();
    const current = new Date();
    const date=current.getFullYear()+'-'+current.getMonth() +'-'+current.getDate()
 
    return (
        <div> <div className='navbar'>
                 <img id="logo" src="../images/logo1.png"  alt="Italian Trulli"></img>
            <label id="date">תאריך:{date}</label>
                       <label>שם:{customer.name}</label>
           {/* <div className='btn-group'> */}
            <button className='logoutB' onClick={() => { navigate('/'); logout() }}>התנתק</button>
            <button onClick={() => navigate('/customer/search')}>חיפוש ספר להשאלה</button>
            </div><br></br>
            <LendedBooks customerId={customer.id} />
            <br />
            <Wishedbooks customerId={customer.id} />
            <br />
            
            {/* </div> */}
        </div>)
}

export default Customer;
