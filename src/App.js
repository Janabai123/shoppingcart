import React from 'react'
import { useState } from 'react';
import data from './Components/Back/Data/data';
import Header from './Components/Front/Header/Header';
import {BrowserRouter,Routes,Route} from "react-router-dom";
 import Product from "./Components/Front/Products/Product";
import Signup from './Components/Front/Signup/Signup';
import Cart from "./Components/Front/Cart/Cart";
const App = () => {
  const[cartItem,setCartItem]=useState([]);
const {productItems}=data;

const handleAddProduct=(product)=>{
  const productExit=cartItem.find((item)=>item.id===product.id);
  if(productExit){
    setCartItem(cartItem.map((item)=>item.id===product.id ? 
    {...productExit,quantity:productExit.quantity+1}:item))
  }
  else{
    setCartItem([...cartItem,{...product,quantity:1}])
  }
}

const handleRemoveProduct=(product)=>{
  const productExit=cartItem.find((item)=>item.id===product.id);
  if(productExit.quantity===1){
    setCartItem(cartItem.filter((item)=>item.id!==product.id));
  }
  else{
    setCartItem(
      cartItem.map((item)=>item.id===product.id ? 
      {...productExit,quantity:productExit.quantity-1}:item)
    )
  }
}

const handleCartClearance=()=>{
  setCartItem([]);
}
  return (
    <BrowserRouter>
    <Header cartItem={cartItem} />
      <Routes>
      {/* <Route path="/"  element={<Header productItems={productItems} handleAddProduct={handleAddProduct}
      cartItem={cartItem}/>} /> */}
    <Route path="/" element={<Product productItems={productItems} handleAddProduct={handleAddProduct} />} />
    
<Route path="/signup" element={<Signup/>} />
<Route path="/cart" exact element={<Cart cartItem={cartItem} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}/>}/>
    </Routes>
    </BrowserRouter>
    
    
      
    
  )
}
export default App;
