import React from 'react'
import avatar from '../assets/profile.jpg'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className="register">
            <div className='w-full mx-auto pt-[16vh]'>
                <form className='ease-in duration-300 w-[80%] sm:w-max shadow-sm backdrop-blur-md bg-white/80 lg:w-max mx-auto
                 rounded-md px-8 py-5' action="">
                    <label htmlFor="file-upload" className='custom-file-upload'>
                        <img src={avatar} alt="" className='h-32 w-32 bg-contain rounded-full mx-auto
                    cursor-pointer' />
                    </label>
                    <label className='block text-center text-gray-900 text-base mb-2' htmlFor="">Profile Picture</label>
                    <input type="file" label="Image" name='myFile' id='file-upload' className='hidden' accept='.jpeg .png .jpg' />

                    <div className="mb-3">
                        <label className='block text-gray-700 text-sm mb-2' htmlFor="name">
                            Name
                        </label>
                        <input type="text" placeholder='Enter your Name' name='name' className='shadow-sm bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                    </div>

                    <div className="mb-3">
                        <label className='block text-gray-700 text-sm mb-2' htmlFor="email">
                            Email
                        </label>
                        <input type="email" placeholder='Enter your email' name='email' className='shadow-sm bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                    </div>

                    <div className='flex flex-col md:flex-row md:gap-4'>
                        <div className="mb-3">
                            <label className='block text-gray-700 text-sm mb-2' >
                                Password
                            </label>
                            <input type="password" placeholder='********' name='password' className='shadow-sm bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                        </div>

                        <div className="mb-3">
                            <label className='block text-gray-700 text-sm mb-2' >
                                Confirm Password
                            </label>
                            <input type="password" placeholder='********' name='confirmPassword' className='shadow-sm bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                        </div>
                    </div>
                    <button className='bg-[#f54748] active:scale-90 transition duration-150 transform
                        hover:shadow-xl shadow-md w-full rounded-full px-8 py-2 text-xl font-medium text-white
                        mx-auto text-center mb-3 mt-5' type='submit'>Register</button>

                    <Link to="/login" className='text-[#fdc55e] text-center font-semibold w-full mb-3
                        py-2 px-4 rounded'>
                        Already have an Account
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Register
