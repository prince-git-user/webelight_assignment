import {useEffect,useState} from "react";

import { NavbarTag } from "./NavbarTag";
 import './product.css'
export const Makeup=()=>{
    const [makeup,setMakeup]=useState([]);
  
    useEffect(()=>{
        getData();

        return function cleanup(){
            
        }
    },[]);

    const getData=async()=>{
        const data=await fetch("https://sugarcosmetic.herokuapp.com/makeups")
          .then((d)=>
            d.json()
           );
           setMakeup(data.makeup);
     
    }

    

return(
    <>
    
       
        <NavbarTag/>
        <div className="grid" >
            <div>
              {makeup.map((t)=>(
             <div className="Apsara">
                 <img className="imagekasize" src={t.imgSrc} alt="" />
                 <h4> {t.Name}</h4>
                 <p>Rs{t.price}</p>
                 <p>{t.ratingNum}<span>
               
                 ({t.amount})</span></p>
                 <br/>
                 <button  onClick={()=>{
                  console.log("clicked")
                  alert("Product added to cart")
                 
                const data=t;
               fetch("https://sugarcosmetic.herokuapp.com/carts",{
                   method:"POST",
                 headers:{
                     "content-type":"application/json"
                 },
                 body:JSON.stringify(data)
               })

            }}
                 
                 
                 
                 >ADD TO CART</button>
                
             </div>
          
         ))}
        </div>
         </div>

</>


         )}
