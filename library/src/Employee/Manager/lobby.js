import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddsPopup from '../Popups/AddsPopup';
function Manager({ manager, logout }) {
    const current = new Date();
    const date = current.getFullYear() + '-' + current.getMonth() + '-' + current.getDate()
    const navigate = useNavigate();

    return (
        <div>
            <div className='navbar'>
                <img id="logo" src="../images/logo1.png" alt="Italian Trulli"></img>
                <label id="date">תאריך: {date}</label>
                <label>{manager.name} :שם</label>
                <button className='logoutB' onClick={() => { navigate('/'); logout() }}>התנתק</button>
                <button onClick={() => navigate("/manager/addemployee")}>הוספת עובד</button>
                <button onClick={() => navigate("/manager/addBook")}>הוספת ספר</button>
                <button onClick={() => navigate("/manager/search")}>חיפוש ספר</button>
               
            </div> 
                    <AddsPopup id={4} name="סופר" update={() => {}} />
                    <AddsPopup id={1} name="קטגוריה" update={() => {}} />
                    <AddsPopup id={2} name="עמודה" update={() => {}} />
                    <AddsPopup id={3} name="מדף" update={() =>{}} />
        </div>)
}
export default Manager;