import React from 'react';
import { useNavigate } from 'react-router-dom';
import LendedBooks from './Components/LendedBooks';
import Wishedbooks from './Components/WishedBooks';
import { format } from "date-fns";

function Customer({ customer, logout }) {
    const navigate = useNavigate();
    const current = new Date();
    const date = current.getFullYear() + '-' + current.getMonth() + '-' + current.getDate()

    return (
        <div>

            {/* <div className='navbar'> */}
            <div className='header-section'>
                <img className='logo-image' src='../images/Library.jpg'></img>
                {/* <img id="logo" src="../images/small-logo.png" alt="Italian Trulli"></img> */}


                <div className='flex-column'>
                    <label id="date">תאריך: {format(new Date(date), "dd-MM-yyyy")} </label>
                    <label>שם:{customer.name}</label>
                </div>
                <button className='search-icon' onClick={() => navigate('/customer/search')}>חיפוש ספר להשאלה</button>
                <div className='flex-row'>
                    <div className="back-icon" title="back" onClick={() => navigate("/")}></div>
                    <div className='logout-icon' onClick={() => { navigate('/'); logout() }} title="התנתק"></div></div>
            </div>


            <br></br>
            <LendedBooks customerId={customer.id} />
            <br />
            <Wishedbooks customerId={customer.id} />
            <br />


        </div>)
}

export default Customer;
