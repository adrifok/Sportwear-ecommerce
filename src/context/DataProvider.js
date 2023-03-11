import React, {useState,useEffect, createContext} from "react";

export const DataContext = createContext();

export const DataProvider = (props) =>{
    const [products, setProducts] = useState([])
}