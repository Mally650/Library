import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddsPopup from '../Popups/AddsPopup';
function Manager({ manager, logout }) {
    const current = new Date();
    const date = current.getFullYear() + '-' + current.getMonth() + '-' + current.getDate()
    const navigate = useNavigate();

    return (
        <div>
            <div className='header-section'>
                <img className='logo-image' src="../images/small-logo.png" alt="Italian Trulli"></img>
                
                <div className='flex-column'>
                    <label id="date">תאריך:{date}</label>
                    <label>שם:{manager.name}</label>
                </div>
                <div className="back-icon" title="back" onClick={() => navigate("/")}></div>
                <div className='logout-icon' onClick={() => { navigate('/'); logout() }} title="התנתק"></div>

            </div>
            <div className='left-navbar'>
                <div className='navbar-item' onClick={() => navigate("/manager/addemployee")}>הוספת עובד</div>
                <div className='navbar-item' onClick={() => navigate("/manager/addBook")}>הוספת ספר</div>
                <div className='navbar-item' onClick={() => navigate("/manager/search")}>חיפוש ספר</div>
            </div>
            <AddsPopup id={4} name="סופר" update={() => { }} />
            <AddsPopup id={1} name="קטגוריה" update={() => { }} />
            <AddsPopup id={2} name="עמודה" update={() => { }} />
            <AddsPopup id={3} name="מדף" update={() => { }} />
        </div>)
}
export default Manager;