import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import AddsPopup from '../Popups/AddsPopup';
import { useNavigate } from "react-router-dom";

const schema = yup.object({
    name: yup.string().required().matches(/^[aA-zZ]+$/, "Only alphabets are allowed for this field "),
    year: yup.string().required(),
    cnt: yup.number().positive().integer().required(),
}).required();

export default function NewBook() {
    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        resolver: yupResolver(schema)
    });
    const categoreisArray = [];
    const shelvesArray = [];
    const columnsArray = [];
    const [authers, setauthers] = useState([])
    const [categoreis, setcategories] = useState([])
    const [shelves, setshelves] = useState([])
    const [columns, setcolumns] = useState([])
    const [update, setupdate] = useState()
    const watchCategory = watch('categories');
    const watchColumn = watch('Column');
    const watchShelf = watch('Shelf');

    const navigate = useNavigate();

    useEffect(() => {
        const newColmn = columns.filter(x => x.Category_id == watchCategory)
        setcolumns(newColmn);
        console.log("colu", newColmn)
        const newShelf = shelves.filter(a => newColmn.find(x => x.id == a.Column_id) != undefined)
        setshelves(newShelf);
        console.log("sh", newShelf)
        console.log("watchCategory", watchCategory)
    }, [watchCategory])
    useEffect(() => {
        const newShelf = shelves.filter(x => x.Column_id == watchColumn)
        setcolumns(newShelf);
        const newCategory = categoreis.filter(k => watchColumn == k.id)
        setcategories(newCategory)
        console.log("watchColumn", watchColumn)
    }, [watchColumn])
    useEffect(() => {
        let shelf = shelvesArray.find(x => x.id == watchShelf);
        const newColmn = columns.filter(x => x.id == shelf.column_id)
        setcolumns(newColmn);
        const newCategory = categoreis.filter(k => newColmn.find(c => c.Category_id == k.id) != undefined)
        setcategories(newCategory)
        console.log("watchColumn", watchColumn)
    }, [watchShelf])
    useEffect(() => {
        fetch(`http://localhost:3003/api/employee/getvalues/auther`, { method: "GET" })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data) {
                    setauthers(data);
                }
                else {
                    alert('you have got problem in your details ')
                }
            })
            .catch((err) => {
                alert('failed to connect to the server')
            })
        fetch(`http://localhost:3003/api/employee/getvalues/categories`, { method: "GET" })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data) {
                    setcategories(data);
                    // categoreisArray=[...data];
                }
                else {
                    alert('you have got problem in your details ')
                }
            })
            .catch((err) => {
                alert('failed to connect to the server')
            })
        fetch(`http://localhost:3003/api/employee/getvalues/shelves`, { method: "GET" })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data) {
                    setshelves(data);
                    //shelvesArray=[...data];
                }
                else {
                    alert('you have got problem in your details ')
                }
            })
            .catch((err) => {
                alert('failed to connect to the server')
            })
        fetch(`http://localhost:3003/api/employee/getvalues/columns_lib`, { method: "GET" })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data) {
                    setcolumns(data);
                    //columnsArray=[...data];
                }
                else {
                    alert('you have got problem in your details ')
                }
            })
            .catch((err) => {
                alert('failed to connect to the server')
            })
    }, [update])

    const onSubmit = async data => {
        console.log(data);
        await fetch(`http://localhost:3003/api/employee/addBook`, {
            method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
                name: data.name,
                cnt: data.cnt,
                year: data.year,
                auther_id: data.authers,
                shelf_id: data.shelf
            })
        })
            .then(response => {
                console.log(response)
                return response.json()
            })
            .then(x => {
                alert("הספר הוסף בהצלחה")
                navigate('/')
            })
            .catch((err) => {
                console.log('failed to connect to the server ', err)
            })
    };

   return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='navbar'>
                 <img id="logo1" src="../images/logo1.png"  alt="Italian Trulli"></img>
          <h3>הוספת ספר</h3>
            </div>
            <input id="inputEnter"  {...register("name")} placeholder="שם" type="text" />
            <p>{errors.name?.message}</p>
            <label>סופר</label>
            <select id="inputEnter"{...register("authers")} name="authers">
                <option key="0" id="0" value="NULL" ></option>
                {authers.map(e =>
                    <option key={e.id} value={e.id}>{e.name}</option>)
                }
            </select>
            <AddsPopup id={4} name="סופר" update={() => setupdate(1)} />
            <br />
            <label>קטגוריה</label>
            <select id="inputEnter"{...register("categories")} >
                <option key="0" value="NULL"></option>
                {categoreis.map(e =>
                    <option key={e.id} value={e.id}>{e.name}</option>)
                }
            </select>
            <AddsPopup id={1} name="קטגוריה" update={() => setupdate(2)} />
            <br />
            <label>עמודה</label>
            <select id="inputEnter"{...register("column")} >
                <option key="0" value="NULL"></option>
                {columns.map(e =>
                    <option key={e.id} value={e.id}>{e.name}</option>)
                }
            </select>
            <AddsPopup id={2} name="עמודה" update={() => setupdate(3)} />
            <br />
            <label>מדף</label>
            <select id="inputEnter"{...register("shelf")} >
                <option key="0" value="NULL"></option>
                {shelves.map(e =>
                    <option key={e.id} value={e.id}>{e.name}</option>)
                }
            </select>
            <AddsPopup id={3} name="מדף" update={() => setupdate(4)} />
            <br />
            <br />
            <input id="inputEnter" {...register("year")} placeholder="שנת הוצאה" />
            <p>{errors.year?.message}</p>
            <input id="inputEnter"{...register("cnt")} placeholder="כמות עותקים" />
            <p>{errors.cnt?.message}</p>
            <input id="toSubmitEnter"type="submit" value="הוספה" />
        </form>
    );
}