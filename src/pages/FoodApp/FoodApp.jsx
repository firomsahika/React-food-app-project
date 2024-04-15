import React,{useEffect} from 'react'
import { BiLogoGoogle, BiLogoPlayStore } from 'react-icons/bi'
import { FaAppStoreIos } from 'react-icons/fa'
import app from "../../assets/app/Frame 54.png"
import iphone from "../../assets/app/Group 7.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGooglePlay } from 'react-icons/fa6'



const FoodApp = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1500
    });
  }, []);


  return (
    <section className='items-center max-h-screen justify-center font-poppins'>
       <div 
       data-aos="fade-up"
       className='relative flex flex-col items-center justify-center px-6 lg:flex lg:py-20'>
         <div className='bg-black hidden lg:flex h-[50vh] w-[70rem] rounded-2xl relative '>

          <div className='flex '>
          <FaGooglePlay size={50}  className=' absolute left-32 top-40  text-amber-500'/>
          <p className='text-xl absolute left-20 top-20 text-white'>Download ios & Android App</p>
          <p className='absolute left-28 top-56  text-white'>Play Store</p>
          <FaAppStoreIos size={50} className='absolute left-52 top-40 text-amber-500'/>
          <p className='font-poppins absolute left-52 top-56  text-white'>Apple Store</p>
          </div>
         </div>
         <div className='flex flex-col items-center justify-center '>
         <p className='text-3xl font-bold text-center lg:hidden  lg:5xl md:4xl'>Download ios & Android App</p>
         <div className='flex gap-4 py-4 lg:hidden'>
         <BiLogoPlayStore 
         className='text-blue-400'
         size={40}/>
         <FaAppStoreIos 
         className='text-blue-400'
         size={40}/>
         </div>
            <img
            
            className='lg:absolute p-0 w-[20rem] lg:w-[50rem]  lg:left-[25rem] lg:top-[-9rem] '
            src={iphone} alt="group 7" />
         </div>
       </div>
    </section>
  )
}

export default FoodApp
