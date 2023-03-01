
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Link, useNavigate } from 'react-router-dom';

const schema = yup.object({
  name: yup.string().required().matches(/^[aA-zZ]+$/, "Only alphabets are allowed for this field "),
  address: yup.string().required(),
  phone: yup.string().required(),
  mail: yup.string().email().required(),
  password: yup.string().required()
}).required();

export default function Signin({ signin, type }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const navigate = useNavigate();

  const onSubmit = async data => {
    debugger
    await fetch(`http://localhost:3003/api/customer/signin`, {
      method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
        name: data.name,
        address: data.address,
        phone: data.phone,
        mail: data.mail,
        password: data.password,
        type: type
      })
    })
      .then(response => response.json())
      .then(data => {
        signin(data[0], type)
        if (type == 3) navigate('/customer')
        else navigate('/manager')
      })
      .catch((err) => {
        alert('failed to connect to the server ')
      })
  };

  return (
    <div>
      <div className="header-section">
        <img className='logo-image' src="../images/small-logo.png" alt="Italian Trulli"></img>
        <div className="back-icon" title="back" onClick={() => navigate("/")}></div>

      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="enter-form">
      {type == 3 ? <h3>הרשמה לספרייה</h3> : <h3>הוספת עובד</h3>}

        <input {...register("name")} placeholder="Name" type="text" />
        <p className='error-label'>{errors.name?.message}</p>
        <input {...register("address")} placeholder="Address" />
        <p className='error-label'>{errors.address?.message}</p>
        <input {...register("phone")} placeholder="Phone" />
        <p className='error-label'>{errors.phone?.message}</p>
        <input {...register("mail")} placeholder="Mail" />
        <p className='error-label'>{errors.mail?.message}</p>
        <input {...register("password")} type="password" placeholder="Password" />
        <p className='error-label'>{errors.password?.message}</p>
        <input id="toSubmitEnter" type="submit" className="login-btn-customer"/>
        <Link to="/signin/login">Back</Link>
      </form>
    </div>
  );
}