import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Search({ customerId, type }) {
    const [books, setbooks] = useState([]);
    const [authers, setauthers] = useState([]);
    const [categories, setcategories] = useState([]);
    const [countlended, setcountlended] = useState();
    const [filter, setfilter] = useState({ Categories: null, authers: null, word: null })

    const navigate=useNavigate();
    
    useEffect(() => {
        fetch(`http://localhost:3003/api/customer/getvalues/auther`, { method: "GET" })
            .then(response => response.json())
            .then(data => {
                setauthers(data);
            })
            .catch((err) => {
                alert('failed to connect to the server')
            })
        fetch(`http://localhost:3003/api/customer/getvalues/categories`, { method: "GET" })
            .then(response => response.json())
            .then(data => {
                setcategories(data);
            })
            .catch((err) => {
                alert('failed to connect to the server')
            })
        if (customerId != undefined) fetch(`http://localhost:3003/api/customer/search/${customerId}`, { method: "GET" })
            .then(response => response.json())
            .then(data => {
                setcountlended(data[0].counts);
            })
            .catch((err) => {
                alert('failed to connect to the server')
            })
    }, [])
    useEffect(() => {
        fetch(`http://localhost:3003/api/book/search?category=${filter.Categories}&auther=${filter.authers}&startWith=${filter.word}`, { method: "GET" })
            .then(response => response.json())
            .then(data => {
                setbooks(data);
            })
            .catch((err) => {
                alert('failed to connect to the server')
            })
    }, [filter])
    const LendBook = (id) => {
        fetch(`http://localhost:3003/api/customer/lend`, {
            method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
                person_id: customerId,
                book_id: id,
                date: new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDate(),
            })
        })
            .then(response => response.json())
            .then(data => {
                alert("הספר הושאל בהצלחה")
                let arr = [...books]
                arr.map(e => { if (e.id == id) e.CountOfCopies -= 1; return e })
                setbooks(arr);
            })
            .catch((err) => {
                alert('failed to connect to the server ')
            })
    }
    const WaitBook = (id) => {
        fetch(`http://localhost:3003/api/customer/wait`, {
            method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
                person_id: customerId,
                book_id: id,
                date: new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDate() + ' ' + new Date().getHours() + ':' + new Date().getMinutes(),
            })
        })
            .then(response => response.json())
            .then(data => {
                alert("הינך בהמתנה לספר")
            })
            .catch((err) => {
                alert('failed to connect to the server ')
            })
    }

    const changeFilter = (value, key) => {
        if (value == '') value = null;
        const newfilter = { ...filter };
        newfilter[key] = value;
        setfilter(newfilter)
    }
    const AddCopy = (id) => {

        fetch(`http://localhost:3003/api/employee/addCopyBook`, {
            method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
                id: id,
            })
        })
            .then(response => response.json())
            .then(data => {
                alert("הוסף בהצלחה")
            })
            .catch((err) => {
                alert('failed to connect to the server ')
            })
    }
    return (
        <div>
            <div className='header-section'>
                <img className='logo-image' src="../images/small-logo.png" alt="Italian Trulli"></img>
                <div className="back-icon" title="back" onClick={() => Navigate("/")}></div>
            </div>
            <div className='search-wrapper'>
                <h3>חיפוש</h3>
                <div className='filter-area'>
                    <div className='filter-item'>
                        <label>סופר</label>
                        <select name="authers" id="1" onChange={(e) => changeFilter(e.target.value, "authers")}>
                            <option key="0" id="0" value="NULL" ></option>
                            {
                                authers.map(e =>
                                    <option key={e.id} id={e.id} value={e.id}>{e.name}</option>)
                            }
                        </select>
                    </div>
                    <div className='filter-item'>
                        <label>קטגוריה</label>
                        <select name="Categories" id="0" onChange={(e) => changeFilter(e.target.value, "Categories")}>
                            <option key="0" value="NULL"></option>
                            {categories.map(e =>
                                <option key={e.id} value={e.id}>{e.name}</option>)
                            }
                        </select>
                    </div>
                    <div className='filter-item'>
                        <label>שם הספר:</label>
                        <input className='search-input' type="text" onChange={(e) => changeFilter(e.target.value, "word")} />
                    </div>
                </div>
                <br />
                <table>
                    <tr><th>שם ספר</th><th>שם סופר </th><th>קטגוריה</th><th></th></tr>{
                        books.map(e =>
                            <tr key={e.id}>
                                <td>{e.name}</td><td> {e.auther_name}</td><td> {e.name_category}</td><td>
                                    {(type === 1) ?
                                        (countlended < 5 && e.CountOfCopies > 0) ? <button className='add-to-card-icon' onClick={() => LendBook(e.id)} >להשאלה</button>
                                            : <button className='add-wishlist-icon' onClick={() => WaitBook(e.id)} >הוספה לרשימת המתנה</button> :
                                        <button className="add-icon-solid" onClick={() => AddCopy(e.id)}>הוספת עותק</button>}
                                </td> </tr>
                        )
                    }
                </table>
            </div>
        </div>
    )
}

export default Search;
