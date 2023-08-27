import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './component/navbar'
import Content from './component/content'
import './index.css'
import React from 'react'



export default function Contain(props) {

   const [toggle, settoggle] = React.useState(false)
   
   function ToggleDark(params) {
      settoggle(prev => !prev)
   }
   
   return(
      <div>
          {
            toggle ? <div className='bg-white text-black '>
            <NavBar 
            toggle={toggle}
            ToggleDark={ToggleDark}
           />
  
           <Content 
           toggle={toggle}
           ToggleDark={ToggleDark}
           />
          </div> : <div className='bg-black text-white '>
          <NavBar 
          toggle={toggle}
          ToggleDark={ToggleDark}
         />

         <Content 
         toggle={toggle}
         ToggleDark={ToggleDark}
         />
        </div>
          }
      </div>
   )
}








