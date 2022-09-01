
import { useEffect, useState } from "react"

import "./cart.css"

import { NavbarTag } from "./NavbarTag";

import {Link} from "react-router-dom"


export const Cart =()=>{

    const [data,setData] = useState([]);

    

    useEffect(()=>{
        getData();

        return function cleanup(){
            
        }
    },[]);

    const getData=async()=>{
        const data=await fetch("https://sugarcosmetic.herokuapp.com/carts")
          .then((d)=>
            d.json()
           );
           setData(data.cart);
     
    }







   
    const total = data.map(d => d.price).reduce((prev, curr) => prev + curr, 0); 

     function handledelete (id){
         console.log("deleted")
       fetch(`https://sugarcosmetic.herokuapp.com/carts${id}`,{method:'DELETE'
       }).then((result)=>{
           result.json().then((res)=>{
               console.warn(res)
           })
       })
     }
    
    return(
        <>
        
        <NavbarTag/>
        
        <div className="cart"> 
        <div className="left">
            
            
            <div  className="details">
                <img src="https://in.sugarcosmetics.com/desc-images/shopping_cart.svg" alt="amount" />
                <p>Order Summary</p>
                <div className="crt">
                  <p>Cart Total:</p><p>Rs:{total}</p>
                </div>
            </div>
            {data.map(d=>
            <div className="product">
                <img src= {d.imgSrc} alt="product" className="imgprd"/>
                <div>
                 <p>{d.Name}</p>
                 <p>₹{d.price}</p>
                 <button onClick={()=>{
                     handledelete(id)
                     getData()
                 }
               
                }>Delete</button>
                </div>
            </div>
            )}
        </div>
        <div className="right">
            <div  className="details">
                <img src="https://in.sugarcosmetics.com/desc-images/Offers_price_details.svg" alt="amount" />
                <p>Offers and Price Details</p>
            </div>
            <div className="priceamount">
            <div className="details">
                <img src="https://in.sugarcosmetics.com/desc-images/PriceDetails.svg" alt="details" />
                <p>Price Details</p>
            </div>
              
               <div className="amount">
                   
               <div className="details">
                <img src="https://in.sugarcosmetics.com/desc-images/CartSubtotal.svg" alt="cart" />
                <p >Cart Sub Total:</p><p key={total}>₹{total}</p>
            </div>
            
            <div  className="details">
                <img src="https://in.sugarcosmetics.com/desc-images/Shipping_Cost.svg" alt="shipping" />
                <p>Shipping Cost:</p><p>₹49</p>
            </div>
            <div  className="details">
                <img src="https://in.sugarcosmetics.com/desc-images/Discount.svg" alt="discount" />
                <p>Discount Applied:</p><p>₹0.00</p>
            </div>
            <div  className="details">
                <img src="https://in.sugarcosmetics.com/desc-images/AmountPayable.svg" alt="amount" />
                <p>Amount Payable:</p><p>₹{total+49}</p>
            </div>
               </div>
               <Link to="/checkout"> <button className="pay">Delivery Information</button></Link>
               
            </div>
        </div>
    </div>
   
    </>)
}
















// import {useEffect,useState} from "react";
// import './product.css'
// export const Cart=()=>{
//     const [Cart,setCart]=useState([]);
  
//     useEffect(()=>{
//         getData();

//         return function cleanup(){
            
//         }
//     },[]);

//     const getData=async()=>{
//         const data=await fetch("http://localhost:8080/cart")
//           .then((d)=>
//             d.json()
//            );
//            setCart(data);
    
         
//     }

    

// return(
//     <div className="cointainer" >
           
//               {Cart.map((t)=>(
//              <div className="Apsara">
//                  <img className="imagekasize" src={t.imgSrc} alt="" />
//                  <h4> {t.Name}</h4>
//                  <p>Rs{t.price}</p>
//                  <p>{t.ratingNum}<span>
               
//                  ({t.amount})</span></p>
//                  <button  
//                  >ADD TO CART</button>
//              </div>
//          ))}
//          </div>)}
