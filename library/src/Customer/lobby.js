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
            <div className='header-section'>
                <img className='logo-image' src="../images/Library.jpg" alt="Italian Trulli"></img>
                 <div className='details-box flex-column'>
                    <label id="date">תאריך: {format(new Date(date), "dd-MM-yyyy")} </label>
                    <label>שם:{customer.name}</label>
                </div>
                <div className='actions-bar'>
                    <div className="icon order-4">
                        <div className='logout-icon' onClick={() => { navigate('/'); logout() }} title="התנתק"></div>

                    </div>
                    <div className="icon order-3">
                        <div className="back-icon" onClick={() => navigate("/")} title="חזור"></div>
                    </div>
                    <div className="order-1">
                    <button className='search-icon' onClick={() => navigate('/customer/search')}>חיפוש ספר להשאלה</button>
                    </div>
                </div>
            </div>

            <br></br>
            <LendedBooks customerId={customer.id} />
            <br />
            <Wishedbooks customerId={customer.id} />
            <br />


        </div>)
}

export default Customer;
