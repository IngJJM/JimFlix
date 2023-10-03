import React from "react";
import MainModals from "./MainModals";

import { Input } from "../Home/UsedInputs";
import Uploder from './../Uploder';

function CastsModal({ modalOpen, setModalOpen, cast }) {
  return (
    <MainModals modalOpen={modalOpen} setModalOpen={setModalOpen}>
      <div className="inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full bg-main text-white rounded-2xl">
        <h2 className="text-3xl font-bold">
          {cast ? "Actualizar Reparto" : "Crear Reparto"}
        </h2>
        <form className="flex flex-col gap-6 text-left mt-6">
          <Input
            label="Nombre del reparto"
            placeholder={cast ? cast.title : "Margot Robbie"}
            type="text"
            bg={false}
          ></Input>
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
          <button
            onClick={() => setModalOpen(false)}
            className="w-full flex-rows gap-4 py-3 text-lg transitions hover:bg-dry border-2 border-subMain rounded bg-subMain text-white"
          >
            {cast ? "Actualizar" : "Añadir"}
          </button>
        </form>
      </div>
    </MainModals>
  );
}

export default CastsModal;
