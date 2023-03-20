import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddsPopup from '../Popups/AddsPopup';
import { format } from "date-fns";

function Manager({ manager, logout }) {
    const current = new Date();
    const date = current.getFullYear() + '-' + current.getMonth() + '-' + current.getDate()
    const navigate = useNavigate();

    return (
        <div>
            <div className='header-section'>
                <img className='logo-image' src="../images/Library.jpg" alt="Italian Trulli"></img>

                <div className='details-box flex-column'>
                    <label id="date">תאריך: {format(new Date(date), "dd-MM-yyyy")} </label>
                    <label>שם:{manager.name}</label>
                </div>
                <div className='actions-bar'>

                    <div className="icon order-1">
                        <div className='logout-icon' onClick={() => { navigate('/'); logout() }} title="התנתק"></div>

                    </div>
                    <div className="icon order-2">
                        <div className="back-icon" onClick={() => navigate("/")} title="חזור"></div>
                    </div>
                </div>
            </div>
            <div className='left-navbar'>
                <div className='navbar-item add-user' onClick={() => navigate("/manager/addemployee")}>הוספת עובד</div>
                <div className='navbar-item add-book' onClick={() => navigate("/manager/addBook")}>הוספת ספר</div>
                <div className='navbar-item search-icon' onClick={() => navigate("/manager/search")}>חיפוש ספר</div>
            </div>
            <div className='popup-area'>
                <AddsPopup id={4} name="סופר" update={() => { }} />
                <AddsPopup id={1} name="קטגוריה" update={() => { }} />
                <AddsPopup id={2} name="עמודה" update={() => { }} />
                <AddsPopup id={3} name="מדף" update={() => { }} />
            </div>
        </div>)
}
export default Manager;