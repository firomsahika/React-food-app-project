import React from 'react'
import { BiLogoGoogle, BiLogoPlayStore } from 'react-icons/bi'
import { FaAppStoreIos } from 'react-icons/fa'
import app from "../../assets/app/Frame 54.png"
const FoodApp = () => {
  return (
    <section className='items-center justify-center font-poppins'>
       <div className='relative flex flex-col items-center justify-center px-6 lg:flex '>
         <img
         className='lg:h-[60vh] lg:flex hidden'
         src={app} />
         
         <div className='flex flex-col items-center justify-center '>
         <p className='text-3xl font-bold text-center lg:hidden lg:5xl md:4xl'>Download ios & Android App</p>
         <div className='flex gap-4 py-4 lg:hidden'>
         <BiLogoPlayStore 
         className='text-blue-400'
         size={40}/>
         <FaAppStoreIos 
         className='text-blue-400'
         size={40}/>
         </div>
            <img
            className='lg:absolute p-0 w-[20rem] lg:w-[50rem]  lg:left-[24rem] lg:top-[-12rem] '
            src="./src/assets/app/Group 7.png" alt="group 7" />
         </div>
       </div>
    </section>
  )
}

export default FoodApp
