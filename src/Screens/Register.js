import React from "react";
import Layout from "./../Layout/Layout";
import { Input } from './../Components/Home/UsedInputs';
import { Link } from "react-router-dom";
import { FiLogIn } from 'react-icons/fi';

function Register() {
  return (
    <Layout>
      <div className="container mx-auto px-2 my-24 flex-colo">
        <div className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry rounded-lg border border-border">
          <img
            src="/images/log.png"
            alt="logo"
            className="w-full h-12 object-contain"
          ></img>
          <Input
            label="Nombre completo"
            placeholder="Escribe tu nombre completo"
            type="email"
            bg={true}
          ></Input>
          <Input
            label="Email"
            placeholder="jimmy-45@hotmail.com"
            type="email"
            bg={true}
          ></Input>
           <Input
            label="Contraseña"
            placeholder="********"
            type="password"
            bg={true}
          ></Input>
          <Link to="/dashboard" className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full">
            <FiLogIn></FiLogIn>Crear
          </Link>
          <p className="text-center text-border">
            Ya tengo una cuenta.{" "}
            <Link to="/login" className="text-dryGray font-semibold ml-2">Inicio</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Register;