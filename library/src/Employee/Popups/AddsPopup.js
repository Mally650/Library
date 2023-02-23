import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function AddsPopup({ id, name, update }) {
    const [categoreis, setcategories] = useState([])
    const [columns, setcolumns] = useState([])
    const [selectCategory, setSelectCategory] = useState("")
    const [selectColumn, setSelectColumn] = useState("")
    const [ADDname, setADDname] = useState("")
    console.log(update,id ,name)
    useEffect(() => {
        if (id === parseInt(2))
            fetch(`http://localhost:3003/api/employee/getvalues/categories`, { method: "GET" })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    if (data) {
                        setcategories(data);
                    }
                    else {
                        alert('you have got problem in your details ')
                    }
                })
                .catch((err) => {
                    alert('failed to connect to the server')
                })
        if (id === 3)
            fetch(`http://localhost:3003/api/employee/getvalues/columns_lib`, { method: "GET" })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    if (data) {
                        setcolumns(data);
                    }
                    else {
                        alert('you have got problem in your details ')
                    }
                })
                .catch((err) => {
                    alert('failed to connect to the server')
                })
    }, [])

    const add = (finish) => {
        if (id == 1) {
            fetch(`http://localhost:3003/api/employee/addCategory`, {
                method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
                    name: ADDname,

                })
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
                .catch((err) => {
                    alert('failed to connect to the server ')
                })
        }
        else if (id == 2) {
            fetch(`http://localhost:3003/api/employee/addCaloumn`, {
                method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
                    name: ADDname,
                    Category_id: selectCategory
                })
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
                .catch((err) => {
                   alert('failed to connect to the server ')
                })
        }
         else if (id == 3) {
            fetch(`http://localhost:3003/api/employee/AddShelf`,{ method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
                    name: ADDname,
                    Column_id: selectColumn
                })})
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
                .catch((err) => {
                    alert('failed to connect to the server ')
                })
         }
        else{
            fetch(`http://localhost:3003/api/employee/addAuther`, {
                method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
                    name: ADDname
                })
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                })
                .catch((err) => {
                    alert('failed to connect to the server ')
                })
        }
        finish()
        update()
    };
    const addItem = ($event) => {
        console.log($event.target.value)
        setADDname($event.target.value);
    }
    function handleChange(event) {
        if (event.target.id == 'Categories')
            setSelectCategory(event.target.value)
        else
            setSelectColumn(event.target.value)
    }
    return (
        <Popup trigger={<button type='button'> הוספת {name}</button>} position="right center">
            {close => (
                <div>
                    <a className="close" onClick={close}>
                        &times;
                    </a>
                    <label>הוספת {name}</label> <br />
                    <input type="text" placeholder={" שם " + name} id="name" required onChange={addItem}></input>
                    {
                        id === 2 ? <div><label>קטגוריה</label>
                            <select name="Categories" id="Categories" value={selectCategory}
                                onChange={handleChange}>
                                <option key="0" value=""></option>
                                {categoreis.map(e =>
                                    <option key={e.id} value={e.id}>{e.name}</option>)
                                }
                            </select></div> : id === 3 ? <div><label>עמודה</label>
                                <select name="column" id="column"
                                    value={selectColumn}
                                    onChange={handleChange}
                                >
                                    <option key="0" value="NULL"></option>
                                    {columns.map(e =>
                                        <option key={e.id} value={e.id}>{e.name}</option>)
                                    }
                                </select></div> : ''
                    }
                    <button onClick={()=>add(()=>close())}>הוספה</button>
                </div>
            )}
        </Popup>)
}