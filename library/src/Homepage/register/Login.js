import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate, Link } from 'react-router-dom';


const schema = yup.object({
  password: yup.string().required(),
  id: yup.number().positive().integer().required(),
}).required();

export default function Login({ logedin, type }) {
  console.log(type)
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const navigate = useNavigate();
  const onSubmit = async data => {
    console.log(data)
    await fetch(`http://localhost:3003/api/customer/login`, {
      method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
        id: data.id,
        password: data.password,
        type: type
      })
    })
      .then(response => response.json())
      .then(data => {
        if (type != 3) if (data[0].id_Type == 1) { logedin(data[0]); alert('שלום ' + data[0].name + "אתה לאזור מנהל"); navigate('/manager') }
        else if (data[0].id_Type == 2) { logedin(data[0]); alert('שלום ' + data[0].name + "אתה לאזור עובד"); navigate('/employee') }
        else alert('פרטי עובד שגויים')
        else if (data[0].id_Type == 3) {
          logedin(data[0]);
         navigate('/customer')
        } else
          alert('נא הרשם, -פרטי לקוח שגויים')
      })
      .catch((err) => {
        alert('failed to connect to the server ')
      })

  };

  return (
    <div > <img id="logo1" src="../images/logo1.png" alt="Italian Trulli"></img>
      <h3>כניסה לספרייה</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="enter">
        <input id="inputEnter" {...register("id")} className="inputs" placeholder="id" />
        <p>{errors.id?.message}</p>

        <input id="inputEnter"{...register("password")} className="inputs" type="password" placeholder="Password" />
        <p>{errors.password?.message}</p>

        <input type="submit" className="inputs" id="toSubmitEnter" />
      </form>
      {(type === 3) ?
        <Link to="/signin/customer">לקוח חדש? הרשם</Link> : ""
      }
     </div>

  );
}