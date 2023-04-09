import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
//icons
import {VscClose} from 'react-icons/vsc';
import {HiBars2} from 'react-icons/hi2';

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
        <header className="p-2 text-slate-600 sticky top-0 header lg:px-5 py-3 lg:py-0 text-xs md:text-base lg:text-lg backdrop-blur-3xl z-30">
            <nav className=' flex flex-col md:gap-4 lg:flex-row justify-between  w-full '>
                <div className='text-[2rem] lg:text-[3rem] font-extralight flex justify-between items-center'>
                    <NavLink to={'/'} onClick={()=>setOpenMenu(false)}>
                      <p className='p-2 text-teal-600'>E-Green</p>
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
    );
};

export default Navbar;