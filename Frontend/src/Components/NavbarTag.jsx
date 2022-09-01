
  import "./NvbarTag.css"
 import styled from "styled-components";
 import {Link} from "react-router-dom"


 export const NavbarTag=()=> {

  const A = styled.a`
   text-decoration: none;
   font-size: 15px;
  
 
 `;





     const navdata=[{ title:"MAKEUP",to:"/makeup" }, { title:"BRUSHES",to:"/brush" },{ title:"SKINCARE",to:"/skincare" },{ title:"TRENDING",to:"/trending" },{ title:"Cart",to:"/cart" }
    
   ]
  return (
    
     <div className="nav-tag">
          {navdata.map((e)=>{
        return(
          
             <Link className="link-tag" to={e.to} ><A className="btn-tag" 
             > {e.title}</A></Link> 
       
         )
       })} 





      
    </div>
  )
 }





















