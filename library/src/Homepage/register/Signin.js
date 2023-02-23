
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';

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
      {type == 3 ? <h3>הרשמות לספרייה</h3> : <h3>הוספת עובד</h3>}
      <form onSubmit={handleSubmit(onSubmit)} className="enter">
        <input id="inputEnter"{...register("name")} placeholder="Name" type="text" />
        <p>{errors.name?.message}</p>
        <input id="inputEnter"{...register("address")} placeholder="Address" />
        <p>{errors.address?.message}</p>
        <input id="inputEnter"{...register("phone")} placeholder="Phone" />
        <p>{errors.phone?.message}</p>
        <input id="inputEnter"{...register("mail")} placeholder="Mail" />
        <p>{errors.mail?.message}</p>
        <input id="inputEnter"{...register("password")} type="password" placeholder="Password" />
        <p>{errors.password?.message}</p>
        <input id="toSubmitEnter" type="submit" />
      </form>
      <img id="logo1" src="../images/logo1.png" alt="Italian Trulli"></img>
    </div>
  );
}