import React, { useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import rectangle1 from "../../assets/rectangles/Rectangle 148.png";
import rectangle2 from "../../assets/rectangles/Rectangle 149.png";
import customers from "../../assets/customers/Frame 49.png";
import rate from "../../assets/rate/Frame 50.png";
import profile1 from "../../assets/customer-review/Frame 44.png";
import profile2 from "../../assets/customer-review/person_1.jpg";
import profile3 from "../../assets/customer-review/person_3.jpg";



import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    id:1,
    quote:
      "Overall, my visit to FoodBox exceeded all expectations. I highly recommend it to anyone looking for an extraordinary culinary adventure.",
    name: "Samantha Smith",
    occupation: "Food Lover",
    photo: profile1
  },
  {
    id:2,
    quote:
    "My visit to FoodBox surpassed expectations; I highly recommend it for an exceptional culinary journey.",
  occupation: "Food Lover",
  name:"Kevin Steve",
   photo:profile2
  },
  {
    id:2,
    quote:
    "FoodBox went above and beyond during my visit; I strongly suggest it for an unforgettable culinary experience.",
  name: "John Smith",
  occupation: "Cheff",
   photo:profile3
  },

];

const CustomerReview = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  const settings = {
  
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000
  };

  return (
    <section className="h-screen mx-auto font-poppins">
      <div className="flex flex-col items-center justify-center gap-16 px-10 mx-auto md:flex-row lg:flex-row md:gap-20 lg:gap-44">
        <div
          data-aos="fade-left"
          className="relative duration-300 hover:scale-105 lg:pl-32 lg:pb-32"
        >
          <img
            className=" lg:w-60 lg:h-[16rem] lg:left-8 md:w-40 w-60 relative"
            src={rectangle2}
            alt="rectangle"
          />
          <img
            className="absolute lg:max-w-sm lg:top-10 top-8 right-6 lg:right-0 "
            src={rectangle1}
            alt="rectangle"
          />
          <img
            className="lg:w-40 w-32 left-6 lg:left-20 top-[15rem] absolute lg:top-[23rem]"
            src={customers}
            alt="customers"
          />
        </div>
        <div
          data-aos="fade-right"
          className="flex flex-col items-center gap-2 "
        >
          <p className="py-2 text-3xl font-bold md:text-4xl lg:text-5xl">
            Customer Reviews
          </p>
          <div style={{ maxWidth: "350px", width: "100%" }} className="lg:w-100 lg:max-w-[400px] ">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-slide">
                  <FaQuoteLeft size={50} className="text-[#FFE6E6]" />
                  <p className="max-w-md text-lg text-start grayColor lg:text-start ">
                    {testimonial.quote}
                  </p>
                  <img
                    className="w-40 py-4 lg:pl-0 md:pl-0"
                    src={rate}
                    alt="rate"
                  />
                  <div className="flex gap-6">
                    <img
                      className="w-14 md:w-16 lg:w-16 rounded-full"
                      src={testimonial.photo}
                      alt="profile"
                    />
                    <div className="flex flex-col items-start justify-center">
                      <p className="font-bold text-md md:text-xl lg:text-2xl">
                        {testimonial.name}
                      </p>
                      <p className="text-sm grayColor md:text-md lg:text-md">
                        {testimonial.occupation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;