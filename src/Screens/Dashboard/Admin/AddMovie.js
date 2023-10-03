import React from "react";
import { Input, Message, Select } from "../../../Components/Home/UsedInputs";
import Uploder from "../../../Components/Uploder";
import SideBar from "./../SideBar";
import { CategoriesData } from "./../../../Data/CategoriesData";
import { UsersData } from "./../../../Data/MovieData";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ImUpload } from "react-icons/im";
import CastsModal from "../../../Components/Modals/CastsModal";
import { useState } from "react";
import { useEffect } from "react";
function AddMovie() {
  const [modalOpen, setModalOpen] = useState(false);
  const [cast, setCast] = useState(null);

  useEffect(() => {
    if (modalOpen === false) {
      setCast();
    }
  }, [modalOpen]);
  return (
    <SideBar>
      <CastsModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        cast={cast}
      ></CastsModal>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Crear pelicula</h2>
        <div className="w-full grid md:grid-cols-2 gap-6">
          <Input
            label="Titulo de la pelicula"
            placeholder="Juegos del hambre"
            type="text"
            bg={true}
          ></Input>
          <Input
            label="Duración"
            placeholder="Tiempo duración"
            type="text"
            bg={true}
          ></Input>
          <Input
            label="Idioma"
            placeholder="Idioma"
            type="text"
            bg={true}
          ></Input>
          <Input
            label="Año de publiecación"
            placeholder="Año"
            type="number"
            bg={true}
          ></Input>
          {/*Imagenes*/}
          <div className="w-full grid md:grid-cols-2 gap-6">
            {/*img sin titulo*/}
            <div className="flex flex-col gap-2">
              <p className="text-border font-semibold text-sm">
                Imagen sin titulo
              </p>
              <Uploder></Uploder>
              <div className="w-32 h-32 p-2 bg-main border border-border rounded">
                <img
                  src="/images/movies/2.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded"
                ></img>
              </div>
            </div>
            {/*img con titulo*/}
            <div className="flex flex-col gap-2">
              <p className="text-border font-semibold text-sm">
                Imagen con titulo
              </p>
              <Uploder></Uploder>
              <div className="w-32 h-32 p-2 bg-main border border-border rounded">
                <img
                  src="/images/movies/4.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded"
                ></img>
              </div>
            </div>
          </div>
        </div>
        {/*Descripcion*/}
        <Message
          label="Descripción de la pelicula"
          placeholder="Haz lo corto"
        ></Message>
        {/*Categoria*/}
        <div className="text-sm w-full">
          <Select label="Categoria" options={CategoriesData}></Select>
        </div>
        {/*Video*/}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-border font-semibold text-sm">
            Video pelicula
          </label>
          <Uploder></Uploder>
        </div>
        {/*Reparto*/}
        <div className="w-full grid lg:grid-cols-2 gap-6 items-start">
          <button 
          onClick={() => {
            setModalOpen(true);
          }}
          className="w-full py-4 bg-main border border-subMain border-dashed text-white rounded"
          >
            Añadir reparto
          </button>
          <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4">
            {UsersData.map((user, i) => (
              <div
                key={i}
                className="p-2 italic text-xs text-text rounded flex-colo bg-main border border-border"
              >
                <img
                  src={`/images/${user.image ? user.image : "user.png"}`}
                  alt={user.fullName}
                  className="w-full h-24 object-cover rounded mb-2"
                ></img>
                <p>{user.fullName}</p>
                <div className="flex-rows mt-2 w-full gap-2">
                  <button className="w-6 h-6 flex-colo bg-dry border border-border text-subMain rounded">
                    <MdDelete></MdDelete>
                  </button>
                  <button 
                   onClick={() => {
                    setCast(user);
                    setModalOpen(true);
                  }}
                  className="w-6 h-6 flex-colo bg-dry border border-border text-green-600 rounded">
                    <FaEdit></FaEdit>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="bg-subMain w-full flex-rows font-medium transitions hover:bg-dry border border-subMain text-white py-4 rounded">
          <ImUpload></ImUpload> Publicar pelicula
        </button>
      </div>
    </SideBar>
  );
}

export default AddMovie;
