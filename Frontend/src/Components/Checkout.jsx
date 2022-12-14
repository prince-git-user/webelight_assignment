import "./Checkout.css"
import { useEffect, useState } from "react"


import {Link} from "react-router-dom"




export const Checkout =()=>{

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
    
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


    return <div className="checkout"> 
        <div className="left">
            <div className="details">
                <img src="https://in.sugarcosmetics.com/desc-images/PriceDetails.svg" alt="details" />
                <p>Price Details</p>
            </div>
            <div className="details">
                <img src="https://in.sugarcosmetics.com/desc-images/CartSubtotal.svg" alt="cart" />
                <p>Cart Sub Total:</p><p>₹{total}</p>
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
                <p>Amount Payable:</p><p key={total}>₹{total+49}</p>
            </div>
            <div  className="details">
                <img src="https://in.sugarcosmetics.com/desc-images/shopping_cart.svg" alt="amount" />
                <p>Order Summary</p>
            </div>
            {data.map(d=>
            <div className="product">
                <img src= {d.imgSrc} alt="product" className="prdimg1"/>
                <div>
                 <p>{d.Name}</p>
                 <p>₹{d.price}</p>

                </div>
            </div>
            )}
        </div>
        <div className="right">
            <div  className="details">
                <img src="https://in.sugarcosmetics.com/desc-images/CustomerInformation.svg" alt="contact" />
                <p>Contact Information</p>
            </div>
            <div className="contact">
               <div className="name">
                   <p>Full Name:</p>
                   <p>Mobile Number:</p>
               </div>
               <p>Email:</p>
               <div className="addnew">
                   <p>Delivery Address</p>
                   <button onClick={toggleModal}>Add New Address</button>
               </div>
               {modal && ( <div className="overlay" onClick={toggleModal}>
        <div className="main">
        <div className="title">
            <div>
                 <img src="https://in.sugarcosmetics.com/desc-images/Add_Address.svg" alt="location" />
                 <h3>Add New Delivery Address</h3>
            </div>
            <div className="closeform">
                <button onClick={toggleModal} >close</button>
            </div>
          
        </div>
        <div className="name_no">
            <div>
                <p className="heading">Full Name</p>
                <input type="text" placeholder="Enter Full Name"/>
            </div>
            <div>
                <p className="heading">Mobile Number</p>
                <input type="Number" placeholder="Enter Mobile Number"/>
            </div>
        </div>
       
        <div className="add">
            <p>Address</p>
            <input type="text" className="addline" placeholder="Address line 1"/><br />
            <input type="text" className="addline"  placeholder="Address line 2"/><br />
            <input type="text" placeholder="Pincode"/><br />
            <input type="text" placeholder="Country"/><br />
            <input type="text" placeholder="City" /><br />
            <input type="text" placeholder="State"/>
        </div>
        <div className="butt">
            <button  value={submit} className="butt1">Save and use this Address</button>
            <button  className="butt2">Cancel</button>
        </div>
    
    </div>
    </div>)}
               <div className="addressdetails">

               </div>
              <Link to="/payment"> <button className="pay">Proceed To Payment</button></Link>
            </div>
        </div>
    </div>
    
}
