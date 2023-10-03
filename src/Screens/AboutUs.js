import React from "react";
import Layout from "./../Layout/Layout";
import Head from "../Components/Home/Head";

function AboutUs() {
  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Head title="Sobre Nosotros" />
        <div className="xl:py-20 py-10 px-4">
          <div className="grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center">
            <div>
              <h3 className="text-xl lg:text-3xl mb-4 font-semibold">
                Bienvenidos a JimFlix
              </h3>
              <div className="mt-3 text-sm leading-8 text-text">
                <p>
                  Lorem Ipsum es simplemente el texto de relleno de las
                  imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
                  relleno estándar de las industrias desde el año 1500, cuando
                  un impresor desconocido usó una galería de textos y los mezcló
                  de tal manera que logró hacer un libro de textos especimen. No
                  sólo sobrevivió 500 años, sino que tambien ingresó como texto
                  de relleno en documentos electrónicos, quedando esencialmente
                  igual al original. Fue popularizado en los 60s con la creación
                  de las hojas "Letraset", las cuales contenian pasajes de Lorem
                  Ipsum, y más recientemente con software de autoedición, como
                  por ejemplo Aldus PageMaker, el cual incluye versiones de
                  Lorem Ipsum.
                </p>
                <p>
                  Es un hecho establecido hace demasiado tiempo que un lector se
                  distraerá con el contenido del texto de un sitio mientras que
                  mira su diseño. El punto de usar Lorem Ipsum es que tiene una
                  distribución más o menos normal de las letras, al contrario de
                  usar textos como por ejemplo "Contenido aquí, contenido aquí".
                  Estos textos hacen parecerlo un español que se puede leer.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 ">
                <div className="p-8 bg-dry rounded-lg">
                  <span className="text-3xl block font-extrabold">
                   10K
                  </span>
                  <h4 className="text-lg font-semibold mb-2">Listed Movies</h4>
                  <p className="mb-0 text-text leading-7 text-sm">
                  "No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor."
                  </p>
                </div>
                <div className="p-8 bg-dry rounded-lg">
                  <span className="text-3xl block font-extrabold">
                   8K
                  </span>
                  <h4 className="text-lg font-semibold mb-2">Lovely Users</h4>
                  <p className="mb-0 text-text leading-7 text-sm">
                  Completa gratis tu registro
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <img 
              src="/images/abouts2.jpg"
              alt="aboutus" 
              className="w-full xl:block hidden h-header rounded-lg object-cover"></img>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AboutUs;
