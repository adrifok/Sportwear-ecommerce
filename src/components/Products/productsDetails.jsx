import React, {useContext, useEffect, useState} from 'react';
import { DataContext } from "context/DataProvider";
import { useParams } from "react-router-dom";
import { productItem } from "./ProductItem.jsx";

export const productsdetails = () => {
  const value = useContext(DataContext);
  const [products] = value.products;
  const addCart = value.addCart;
  const [detail, setDetail] = useState([])
  const [url, setUrl]= useState(0)
  const [images, setImages] = useState('')
  const params = useParams();
  let item = 0;

  useEffect(() =>{
    console.log('re render' , params.id)
    item=0;
    products.forEach(product =>{
      if(product.id === parseInt(params.id)){
        setDetail(product)
        setUrl(0)
      }
    })
  },[params.id, products])

  console.log(url)

  useEffect(() =>{
    const values = `${detail.img1}${url}${detail.img2}`;
    setImages(values) 
  },[url, params.id])

  const handleInput = (e) =>{
  const number = e.target.value.toString().padStart(2,'01')
   setUrl(number)
  }

  if(detail.length < 1) return null;

  return (
    <>
    {
        <div className="details">
          <h2>{detail.title}</h2>
          <p className="price">${detail.price}</p>
          <div className="grid">
          <p className="new">New</p>
          <div className="size">
            <select placeholder="Size" >
              <option value="1">1</option>
              <option value="1">2</option>
              <option value="1">3</option>
              <option value="1">4</option>
              <option value="1">5</option>
              <option value="1">6</option>
              <option value="1">7</option>
              <option value="1">8</option>
            </select>
            <p>Size</p>
          </div>
          </div>
          <button onClick={() => addCart(detail.id)}>
            Add to cart
          </button>
          
          {
            url ? <img src={images} alt={detail.title}/> : <img src={detail.image} alt={detail.title}/>
          }
          <input type="range" min="1" max="36" step="1" value={url} onChange={handleInput} />
          <div className="description">
          <p><b>description: </b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum necessitatibus soluta alias porro, 
          saepe facere expedita asperiores quos fugit inventore ex, itaque sapiente quae pariatur beatae optio repellat aperiam quia possimus mollitia 
          repellendus? Illo natus quam eaque impedit omnis pariatur!</p>
          <br/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam vitae accusantium omnis, 
            facere laudantium ipsa hic reprehenderit blanditiis quibusdam quos repellendus id illo reiciendis magni, aliquid beatae, consequatur sapiente! 
            Sequi facere itaque,</p>
          </div>
          
        </div>
   
    }
    <h2 className="related">related products</h2>
    <div className="products">
      {
        products.map((product)=>{
          if((item < 6)&&(detail.category === product.category)){
            item++;
          return <productItem 
          key={product.id}
          title={product.title}
          image={product.image}
          category={product.category}
          price={product.price}
          id={product.id}
          />
          }
          
        
        })
      }
     
    </div>
    </>
  )
}