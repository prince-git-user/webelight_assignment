import { useState } from 'react'

import {Routes,Route} from "react-router-dom"
import { Makeup } from './Components/Makeup'
import { Brush } from './Components/Brush'
import { Trending } from './Components/Trending'
import { Skincare } from './Components/Skincare'
import { Cart } from './Components/Cart'




import { Checkout } from './Components/Checkout'
import { PaymentOption } from './Components/Payment'
import { NavbarTag } from './Components/NavbarTag'


// import { Payments } from '@mui/icons-material'


function App() {
  
  

  return (
    <div >
      
       
      <Routes>
        <Route path='/' element={<Makeup/>}></Route>
        <Route path='/makeup' element={ <Makeup/>}></Route>
        <Route path='/brush' element={ <Brush/>}></Route>
        <Route path='/trending' element={ <Trending/>}></Route>
        <Route path='/skincare' element={<Skincare/>}></Route>
        <Route path='/cart' element={<Cart/>}> </Route>
        
        
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/payment' element={<PaymentOption/>}></Route>
      </Routes>

     
    </div>
  )
}


export default App
