import React from "react";
import Layout from "./../Layout/Layout";
import Head from "../Components/Home/Head";
import { FiMail, FiPhoneCall, FiMapPin } from "react-icons/fi";

function ContactUs() {
  const ContactData = [
    {
      id: 1,
      title: "Email",
      info: "Desarro lla de forma interactiva ideas de backed para modelos multiplataforma",
      icon: FiMail,
      contact: "jimmy-45@hotmail.com",
    },
    {
      id: 2,
      title: "Llamanos",
      info: "Desarrolla de forma interactiva ideas de backed para modelos multiplataforma",
      icon: FiPhoneCall,
      contact: "+52 712 179 3802",
    },
    {
      id: 3,
      title: "Ubicación",
      info: "Alberto Garduño SN, La Teneria, San Felipe del Progreso, Edo Mex 50640.",
      icon: FiMapPin,
      contact: "",
    },
  ];

  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Head title="Contactanos" />
        <div className="grid mg:grid-cols-2 gap-6 lg:my-20 my-10 lg:grid-cols-3 xl:gap-8">
          {ContactData.map((item) => (
            <div
              key={item.id}
              className="border border-border flex-colo p-10 bg-dry rounded-lg text-center"
            >
              <span className="flex-colo w-20 h-20 mb-4 rounded-full bg-main text-subMain text-2xl">
                <item.icon />
              </span>
              <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
              <p className="mb-0 text-sm text-text leading-7">
                <a href={`mailto:${item.contact}`} className="text-blue-600">
                  {item.contact}
                  </a>{' '}
                  {item.info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default ContactUs;
