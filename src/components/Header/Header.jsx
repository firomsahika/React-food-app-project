import React, { useState, useEffect } from "react";
import { FaBars,  FaSearch, FaSearchDollar, FaSearchPlus, FaShoppingCart, FaTimes } from "react-icons/fa";
import { IoSearchCircle } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import "../../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css";


const Header = () => {
  const [toggle, setToggle] = useState(false);
  const  [find, setFind]= useState(false);

  const onClickChange = () => {
    setToggle(!toggle);
  };
  const onClickSearch = () =>{
    setFind(!find);
  }

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className=" flex items-center justify-center h-20 m-auto font-poppins">
      <div className="flex items-center justify-center gap-24  md:gap-50 lg:gap-56 md:p-10 ">
        <NavLink to="/">
          <div>
            <img
              className="w-24 md:w-40 lg:w-32"
              src="./src/assets/logo/Frame 2.png"
              alt="logo"
            />
          </div>
        </NavLink>
        <div className="hidden md:flex">
          <nav className="flex list-none lg:gap-16 md:gap-10">
            <NavLink
              exact
              to="/"
              activeClassName="active"
              style={({isActive}) =>
                isActive
                  ? {
                      color: "#FF2626",
                      textDecoration: "underline",
                      textDecorationColor: "black",
                    }
                  : null
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/menu"
              activeClassName="active"
              style={({isActive}) =>
                isActive
                  ? {
                      color: "#FF2626",
                      textDecoration: "underline",
                      textDecorationColor: "black",
                    }
                  : null
              }
            >
              <li>Menu</li>
            </NavLink>
            <NavLink
              to="/service"
              activeClassName="active"
              style={({isActive}) =>
                isActive
                  ? {
                      color: "#FF2626",
                      textDecoration: "underline",
                      textDecorationColor: "black",
                    }
                  : null
              }
            >
              <li>Service</li>
            </NavLink>
            <NavLink
              to="/delivery"
              activeClassName="active"
              style={({isActive}) =>
                isActive
                  ? {
                      color: "#FF2626",
                      textDecoration: "underline",
                      textDecorationColor: "black",
                    }
                  : null
              }
            >
              <li>Delivery</li>
            </NavLink>
          </nav>
        </div>
        <div className="flex items-center gap-4 relative">
          {/* <img
            className="w-24 md:w-28 lg:w-24"
            src="./src/assets/cart-search/Frame 6.png"
            alt="cart-search"
          /> */}
          <div className="flex  items-center absolute lg:relative pl-2 md:pl-0">
          <IoSearchCircle  onClick={onClickSearch} className=""  size={40}/> </div>
         <div className="absolute lg:relative pl-12 md:pl-0  lg:pl-0">
         <FaShoppingCart size={30}/></div>
         {
          find && (
            <div  data-aos="zoom-right"
            className="absolute z-10 lg:right-28 md:right-28  flex flex-col items-center font-semibold transition-transform transform translate-y-0 rounded-2xl shadow-2xl duration-500 customRed">
              <input type="text" placeholder="Search Food.." 
              className="py-2 px-6 w-44 rounded-2xl outline-none focus:placeholder-transparent"
              />
              <FaTimes onClick={onClickSearch}  className="absolute right-4 top-3 text-black"/>
            </div>
          )
        }
        </div>
        
        <div
          onClick={onClickChange}
          className="flex p-2 border-2 rounded-lg md:hidden lg:hidden "
        >
          <FaBars size={20} className="text-black " />
        </div>
        {toggle && (
          <div
            data-aos="fade-right"
            className="absolute z-10 left-0 flex flex-col items-center w-full px-6 py-2 font-semibold transition-transform transform translate-y-0 rounded-lg shadow-2xl duration-500 md:hidden lg:hidden bg-white top-20 customRed"
          >
            <nav className="flex flex-col gap-3 list-none ">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                style={({isActive}) => (isActive ? { color: "black" } : null)}
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                to="/menu"
                activeClassName="active"
                style={({isActive}) =>
                  isActive
                    ? {
                        color: "black",
                        textDecoration: "underline",
                        textDecorationColor: "black",
                      }
                    : null
                }
              >
                <li>Menu</li>
              </NavLink>
              <NavLink
                to="/service"
                activeClassName="active"
                style={({isActive}) =>
                  isActive
                    ? {
                        color: "black",
                        textDecoration: "underline",
                        textDecorationColor: "black",
                      }
                    : null
                }
              >
                <li>Service</li>
              </NavLink>
              <NavLink
                to="/delivery"
                activeClassName="active"
                style={({isActive}) =>
                  isActive
                    ? {
                        color: "black",
                        textDecoration: "underline",
                        textDecorationColor: "black",
                      }
                    : null
                }
              >
                <li>Delivery</li>
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
