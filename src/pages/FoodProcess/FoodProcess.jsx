import React, {useEffect} from 'react'
import packing from "../../assets/food-process/Frame 36 (1).png"
import prepare from "../../assets/food-process/Frame 36.png"
import deliver from "../../assets/food-process/Frame 36 (2).png"
import AOS from "aos";
import "aos/dist/aos.css";

const FoodProcess = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
    const datas = [
        {
            id:1,
            image:prepare,
            title:"Prepare",
            text:"Restaurants offer a variety of dining experiences."
        },
        {
           id:2,
           image:packing,
           title:"Packing",
           text:"Catering companies specialize in providing food and beverage services"

        },
        {
          id:3,
          image:deliver,
          title:"Deliver",
          text:"Meal delivery services deliver freshely prepared meals directly to customers."
        }
    ]
  return (
    <div className='min-h-screen py-10 m-auto md:py-2 lg:py-0 font-poppins'>
        <div className=''>
          <div className='flex flex-col items-center justify-center gap-10 px-20'>
          <p className='text-3xl font-bold text-center md:text-4xl lg:text-5xl md:py-10 lg:py-8'>Our Food Process</p>
          <div className='flex flex-col items-center gap-10 md:flex-row lg:flex-row'>
          {
            datas.map((data)=>(
              <div
              data-aos="fade-up"
              key={data.id}
              data-aos-delay={
                data.id === 1 ? "0" :
                data.id === 2 ? "200" :
                data.id === 3 ? "400" :
                "0"
              }
            
              className='flex flex-col items-center justify-center text-center'
              >
               <div 
               data-aos-delay={
                data.id === 1 ? "0" :
                data.id === 2 ? "200" :
                data.id === 3 ? "400" :
                "0"
              }
               className='flex flex-col items-center justify-center gap-8 md:flex-row lg:flex-row md:relative lg:relative'>
               <img src={data.image} alt="prepare"
                className='w-40 md:w-20 lg:w-32'
                />
            
               {
                 data.id !== 3 ?  <p 
                  className='md:absolute lg:absolute w-40 lg:left-[12rem] md:left-[6rem] items-center justify-center md:border-b-2 lg:border-b-2 border-dashed border-customRed '></p> : ''
                 
               }
                
               </div>
                <p className='py-2 text-xl font-semibold md:py-8 lg:py-8'>{data.title}</p>
                <p className='max-w-sm text-center grayColor'>{data.text}</p>
              </div>
            ))
          }
          </div>
          </div>
        </div>
    </div>
  )
}

export default FoodProcess
