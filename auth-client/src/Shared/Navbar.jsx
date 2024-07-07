import React, { useState } from 'react'
import Logo from "../assets/react.svg"
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div>
            <div className="bg-white/80 shadow-md fixed top-0 left-0 w-full z-40 ease-in duration-300 backdrop-blur-md">

                <div className='py-3 px-10 sm:px-4 md:px-6 lg-px-6 container mx-auto'>
                    <div className="flex items-center justify-between">
                        <img src={Logo} alt="" className='h-14 cursor-pointer' />

                        <div className="lg:flex hidden gap-8 items-center">
                            <a href="" className='text-[#191919] text-xl font-medium hover:text-red-500'>Today Special</a>
                            <a href="" className='text-[#191919] text-xl font-medium hover:text-red-500'>Why foodhunt</a>
                            <a href="" className='text-[#191919] text-xl font-medium hover:text-red-500'>Our Menu</a>
                            <a href="" className='text-[#191919] text-xl font-medium hover:text-red-500'>Add food</a>
                            <a href="" className='text-[#191919] text-xl font-medium hover:text-red-500'>Popular food</a>
                            <Link to='/login'>
                                <button className='bg-[#F54748] active:scale-90 transition duration-100 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white'>login</button>
                            </Link>

                        </div>
                        <div className="block lg:hidden z-40" onClick={handleNav}>
                            {
                                nav ? (<RxCross2 size={25} className='text-[#191919] cursor-pointer' />) : (<TiThMenu className='text-red-500 cursor-pointer' size={25} />)
                            }
                        </div>

                        <div className={`lg:hidden absolute w-1/2 sm:w-2/5 h-screen px-4 py-2 text-xl font-medium ease-in shadow-sm backdrop-blur-md bg-white/80 top-0 duration-500 ${nav ? "right-0" : "right-[-100%]"} pt-24`}>
                            <div className="flex flex-col gap-8">
                                <a href="" className='text-[#191919] text-base font-medium hover:text-red-500'>Today Special</a>
                                <a href="" className='text-[#191919] text-base font-medium hover:text-red-500'>Why foodhunt</a>
                                <a href="" className='text-[#191919] text-base font-medium hover:text-red-500'>Our Menu</a>
                                <a href="" className='text-[#191919] text-base font-medium hover:text-red-500'>Add food</a>
                                <a href="" className='text-[#191919] text-base font-medium hover:text-red-500'>Popular food</a>
                                <button className='bg-[#F54748] active:scale-90 transition duration-100 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white'>login</button>


                            </div>

                        </div>
                    </div>


                </div>

                {/* <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Navbar
