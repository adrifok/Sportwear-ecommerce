import React, { useState, useEffect, createContext } from "react";
import Data from "./Data";
export const DataContext = createContext(); //creamos una const q es nuestro contexto q
//maneja nuestras variables globales(los productos, el cart, la lista de produts y los detalles)

export const DataProvider = (props) => {
  const [products, setProducts] = useState([]); //useState maneja nuestro estado local. "Nuestros productos" es un objeto
  const [menu, setMenu] = useState(false); //el estado se setea en false
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    //useEffect se inicia al recargar la pagina
    const product = Data.items; //Data es mi json
    if (product) {
      setProducts(product); //setProduct es un manejador de estado local
    } else {
      setProducts([]);
    }
  }, []);

  const addCart = (id) => {
    //guardamos datos en ese cart
    const check = cart.every((item) => {
      //el metodo every de js evalua el item.id es diferente del id
      return item.id !== id; //cuando esto ocurre envia un false
    });
    if (check) {
      const data = products.filter((product) => {
        return product.id === id;
      });
      setCart([...cart, ...data]); //sumamos lo q tenemos en cart mas la data q es el filtro de los carts
    } else {
      alert("this item has been added to your cart");
    }
  };

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    //con useEffect revisamos lo q tenemos en nuestro local storage(cart)
    //el localStorage es un archivo string por lo q debemos parsearlo
    if (dataCart) {
      setCart(dataCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart)); //setItem guarda en nuestro cart
  }, [cart]);

  useEffect(() => {
    const getTotal = () => {
      const rest = cart.reduce((prev, item) => {
        return prev + (item.price * item.quantity);
      }, 0)
      setTotal(rest)
    }
    getTotal();
  }, [cart]);

  const value = {
    //creamos una constante value q pasamos x props y tendra la constante del producto
    products: [products],
    menu: [menu, setMenu], //exportamos la varaible menu
    addCart: addCart,
    cart: [cart, setCart],
    total: [total, setTotal],
  };

  return (
    //renderizamos el dataContext
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
