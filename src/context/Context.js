import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const Context = createContext();

const Provider = Context.Provider;

function MyContext({ children }) {


  // Get Data Upload

  const [listCar, setListCar] = useState([]);
  const [listPhone, setPhone ] = useState([]);
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

const getUser = async () => {
  try {
      const response = await axios.get(`http://localhost:8000/user`);
      if (response.status === 200) {
          setPhone(response.data)
      }
  } catch (error) {
      console.log("err", error);
  }
}

  useEffect(() => {
    getData();
    getUser();
  }, [setListCar, setPhone]);

  return (
    <Provider
      value={{ listCar, listPhone }}
    >
      {children}
    </Provider>
  );
}

export { Context, MyContext };