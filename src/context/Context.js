import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const Context = createContext();

const Provider = Context.Provider;

function MyContext({ children }) {


  // Get Data Upload

  const [listCar, setListCar] = useState([]);

  const getData = async () => {
    try {
        const response = await axios.get(`http://localhost:8000/car`);
        if (response.status === 200) {
            setListCar(response.data)
        }
    } catch (error) {
        console.log("err", error);
    }
}

console.log(listCar);
  useEffect(() => {
    getData();
  }, [setListCar]);

  return (
    <Provider
      value={{ listCar }}
    >
      {children}
    </Provider>
  );
}

export { Context, MyContext };