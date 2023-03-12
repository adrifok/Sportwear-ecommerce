import React, { useContext } from "react";
import Card from "../../images/img08.jpg";
import "boxicons";
import {DataContext} from  "../../context/DataProvider";

export const Cart = () => {
const value = useContext(DataContext) //tienen los valores q pasamos a traves del DataProvider
const [menu, setMenu] = value.menu;//para hacer consumo del menu
const [cart, setCart] = value.cart;
const [total] = value.total;

const tooglefalse =()=>{//fn para volver falso el menu
  setMenu(false);
};
const reduce = id =>{
  cart.forEach(item =>{
    if(item.id === id){
      item.quantity === 1 ? item.quantity = 1: item.quantity -=1;
    }
    setCart([...cart])
  })
}
const increase = id =>{
  cart.forEach(item =>{
    if(item.id === id){
      item.quantity +=1;
    }
    setCart([...cart])
  })
}


const removeProduct = id=>{
  if(window.confirm("would you like to delete this item?")){
    cart.forEach((item, index) =>{
      if(item.id === id){
        item.quantity =1;//inicializo quantity en 1
        cart.splice(index, 1)//elimina el cart al q pertenece ese id
      } 
    })
    setCart([...cart]) //como ha sido modificado el cart lo guardo en setCart
  }
}
const show1 = menu ? "carts show" : "carts";//si menu existe crea una clase cart->show carts
const show2 = menu ? "cart show" : "cart";//si menu existe crea una clase carts->show cart


  return (
    <div className={show1}>  {/*si hay menu se agrega el show*/ }
      <div className={show2}> {/*si no hay menu no se agrega el show*/ }
      <div onClick={tooglefalse} className="cart_close">
          <box-icon name="x"></box-icon>
        </div>
        <h2>your cart</h2>
        <div className="cart_center">
					{
					
					
					cart.length === 0 ? <h2 style={{textAlign: "center", fontSize: "3rem"}}>empty cart </h2> :<>
					{
					cart.map((product) => (
            <div className="cart_item" key={product.id}>
              <img src={Card} alt={product.title} />
              {/* <img src={product.image} alt={product.title} /> */}
                   {/* <img src={product.image.default} alt={product.title} /> */}
              <div>
                <h3> {product.title} </h3>
                <p className="price">${product.price}</p>
              </div>
              <div>
								<box-icon 
									onClick={() => increase(product.id)} name="up-arrow" 
									type="solid"
									/>
                <p className="quantity">{product.quantity}</p>
								<box-icon 
									onClick={() => reduce(product.id)} 
									name="down-arrow" 
									type="solid" 
									/>
              </div>
							<div 
							onClick={() => removeProduct(product.id)} 
							className="remove_item"
							>
                <box-icon name="trash" />
              </div>
            </div>
					))
				};
					
					</>
					}
        </div>

        <div className="cart_footer">
          <h3>Total: ${total}</h3>
          <button className="btn">Payment</button>
        </div>
      </div>
    </div>
  );
};