import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
//icons
import {VscClose} from 'react-icons/vsc';
import {HiBars2} from 'react-icons/hi2';
import {BiPhoneCall} from 'react-icons/bi';
import {BsFacebook, BsInstagram, BsTwitter, BsPinterest, BsReddit} from 'react-icons/bs';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const changeOpenMenu = () =>{
        setOpenMenu(!openMenu)
    }
    const links = [
      {
        name:'Home',
        link: '/'
      },
      {
        name:'Shop',
        link: '/shop'
      },
      {
        name:'Contact',
        link: '/contact'
      },
    ]
    return (
        <div className=' relative p-2'>
            <div className='header text-xs md:text-sm  font-light flex justify-around'>
              <div className='flex flex-wrap justify-start md:justify-center items-center gap-3'>
                <address>RoseLands, Sydney, Australia</address>
                <div className='flex justify-center items-center gap-2'>
                  <BiPhoneCall className='text-base'/>
                  <p>0402342345</p>
                </div>
              </div>
              <div className='flex justify-center items-center gap-2 lg:gap-5 text-lg px-2 cursor-pointer'>
                <BsFacebook className='hover:text-blue-500'/>
                <BsInstagram className='hover:text-pink-500'/>
                <BsTwitter className='hover:text-blue-400'/>
                <BsPinterest className='hover:text-red-500'/>
                <BsReddit className='hover:text-orange-500'/>

              </div>
            </div>
            <hr />
            <header className=" sticky top-0 header lg:px-5 py-3 lg:py-0 text-xs md:text-base lg:text-lg backdrop-blur-3xl z-30">
                <nav className=' flex flex-col md:gap-4 lg:flex-row justify-between  w-full '>
                    <div className='text-[2rem] lg:text-[3rem] font-extralight flex justify-between items-start'>
                        <NavLink to={'/'} onClick={()=>setOpenMenu(false)}>
                        <p className='p-2'>E-Green</p>
                        </NavLink>
                        <div className='text-3xl lg:hidden cursor-pointer' onClick={changeOpenMenu}>
                            {openMenu? <VscClose/> :<HiBars2/>}
                        </div>
                    </div>
                    <div className={`w- p-2 md:p-5  bg-opacity-40 flex-col lg:flex lg:flex-row bg-black lg:bg-inherit  md:justify-evenly items-center gap-2 ${(openMenu)?"flex":"hidden"} transition-all duration-300`}>
                        {
                          links.map(i=>(
                              <NavLink key={i.name} to={i.link} onClick={changeOpenMenu} className={(({isActive})=>(isActive?'text-slate-800 font-bold rounded':""))}>
                                  <div className='hover:font-semibold transition-all ease-in px-5 py-2 rounded'>{i.name}</div>
                              </NavLink>

                          ))
                        }
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Navbar;