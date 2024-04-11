import React, { useState, useEffect } from "react";
import { FaBars,  FaSearch, FaSearchDollar, FaSearchPlus, FaShoppingCart, FaTimes } from "react-icons/fa";
import { IoSearchCircle } from "react-icons/io5";
import logo from "../../assets/Logo/Frame 2.png"
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
    <div className="flex items-center justify-center h-20 m-auto font-poppins">
      <div className="flex items-center justify-center gap-24 md:gap-50 lg:gap-56 md:p-10 ">
        <NavLink to="/">
          <div>
            <img
              className="w-24 md:w-40 lg:w-32"
              src={logo}
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
        <div className="relative flex items-center gap-4">
          {/* <img
            className="w-24 md:w-28 lg:w-24"
            src="./src/assets/cart-search/Frame 6.png"
            alt="cart-search"
          /> */}
          <div className="absolute flex items-center pl-2 lg:relative md:pl-0">
          <IoSearchCircle  onClick={onClickSearch} className=""  size={40}/> </div>
         <div className="absolute pl-12 lg:relative md:pl-0 lg:pl-0">
         <FaShoppingCart size={30}/></div>
         {
          find && (
            <div  data-aos="zoom-right"
            className="absolute z-10 flex flex-col items-center font-semibold transition-transform duration-500 transform translate-y-0 shadow-2xl lg:right-28 md:right-28 rounded-2xl customRed">
              <input type="text" placeholder="Search Food.." 
              className="px-6 py-2 outline-none w-44 rounded-2xl focus:placeholder-transparent"
              />
              <FaTimes onClick={onClickSearch}  className="absolute text-black right-4 top-3"/>
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
            className="absolute left-0 z-10 flex flex-col items-center w-full px-6 py-2 font-semibold transition-transform duration-500 transform translate-y-0 bg-white rounded-lg shadow-2xl md:hidden lg:hidden top-20 customRed"
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
