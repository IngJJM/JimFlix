import React from "react";
import MainModals from "./MainModals";
import { Input } from "../Home/UsedInputs";

function CategoryModal({ modalOpen, setModalOpen, category }) {
  return (
    <MainModals modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full bg-main text-white rounded-2xl">
        <h2 className="text-3xl font-bold">
          {category ? "Actualizar" : "Crear"}
        </h2>
        <form className="flex flex-col gap-6 text-left mt-6">
          <Input
            label="Nombre de la categoria"
            placeholder={category ? category.title : "Nombre de la categoria"}
            type="text"
            bg={false}
          ></Input>
          <button
            onClick={() => setModalOpen(false)}
            className="w-full flex-rows gap-4 py-3 text-lg transitions hover:bg-dry border-2 border-subMain rounded bg-subMain text-white"
          >
            {category ? "Actualizar" : "Añadir"}
          </button>
        </form>
      </div>
    </MainModals>
  );
}

export default CategoryModal;
