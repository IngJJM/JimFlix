import React, { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CategoriesData } from "./../../Data/CategoriesData";
import { FaAngleDown, FaCheck } from "react-icons/fa";

const YearData = [
  { title: "Ordenar por Año" },
  { title: "1700 - 1800" },
  { title: "1800 - 1900" },
  { title: "1900 - 2000" },
  { title: "2000 - 2010" },
  { title: "2010 - 2030" },
];
const TimesData = [
  { title: "Ordenar por Hora" },
  { title: "1 - 5 Horas" },
  { title: "5 - 10 Horas" },
  { title: "10 - 15 Horas" },
  { title: "15 - 20 Horas" },
];
const RatesData = [
  { title: "Ordenar por Popularidad" },
  { title: "1 Estrella" },
  { title: "2 Estrellas" },
  { title: "3 Estrellas" },
  { title: "4 Estrellas" },
  { title: "5 Estrellas" },
];

function Filters() {
  const [category, setCategory] = useState({ title: "Categoria" });
  const [year, setYear] = useState(YearData[0]);
  const [times, setTimes] = useState(TimesData[0]);
  const [rates, setRates] = useState(RatesData[0]);

  const Filter = [
    {
      value: category,
      onChange: setCategory,
      items: CategoriesData,
    },
    {
      value: year,
      onChange: setYear,
      items: YearData,
    },
    {
      value: times,
      onChange: setTimes,
      items: TimesData,
    },
    {
      value: rates,
      onChange: setRates,
      items: RatesData,
    },
  ];
  return (
    <div className="my-6 bg-dry border text-dryGray border-gray-800 grid md:grid-cols-4 grid-cols-1 lg:gap-12 gap-2 rounded p-6">
      {Filter.map((item, index) => (
        <Listbox key={index} value={item.value} onChange={item.onChange}>
          <div className="relative">
            <Listbox.Button className="relative border border-gray-800 w-full text-white bg-main rounded-lg cursor-default py-4 pl-6 pr-10 text-left text-xs ">
              <span className="block truncate">{item.value.title}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-2">
                <FaAngleDown
                  className="h-4 w-4"
                  aria-hidden="true"
                ></FaAngleDown>
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white border border-gray-800 text-dryGray rounded-md shadow-lg msx-h-60 py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {item.items.map((iterm, i) => (
                  <Listbox.Option
                    key={i}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-subMain text-white" : "text-main"
                      }`
                    }
                    value={iterm}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncated ${
                            selected ? "font-semibold" : "font-normal"
                          }`}
                        >
                          {iterm.title}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <FaCheck className="h-3 w-3" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      ))}
    </div>
  );
}
export default Filters;
