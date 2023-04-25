import React from 'react'
import { FaUser, FaLock } from 'react-icons/fa'
import {IoMdLogIn} from 'react-icons/io'
import * as image from '@/images'
import Image from 'next/image'

export const LoginComponent = ({
    changeInputLogin,
    changeInputRegister,
    submit,
    login,
    seePassword,
    viewPass
}: LoginInterface) => {
  return (
    <>
    {login ? (
    <div className='login-bg px-5 py-[20%]'>
        <div className='w-6/12 mx-auto grid gap-5 my-5'>
          <label className='relative'>
              <FaUser className="w-6 h-6 cursor-pointer absolute top-2 ml-1" />
              <input 
                type="text"
                placeholder='Username'
                className="w-full bg-transparent border-b-2 pr-8 pl-10 py-3 text-sm text-black placeholder-black border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                name='userName' 
                onChange={changeInputRegister} 
              />
          </label>
        </div>
        <div className='w-6/12 mx-auto grid gap-5 my-5'>
          <label className='relative'>
              <FaUser className="w-6 h-6 cursor-pointer absolute top-2 ml-1" />
              <input 
                type="text"
                placeholder='Firstname'
                className="w-full bg-transparent border-b-2 pr-8 pl-10 py-3 text-sm text-black placeholder-black border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                name='firstName'
                onChange={changeInputRegister} 
              />
          </label>
        </div>
        <div className='w-6/12 mx-auto grid gap-5 my-5'>
          <label className='relative'>
              <FaUser className="w-6 h-6 cursor-pointer absolute top-2 ml-1" />
              <input 
                type="text"
                placeholder='Lastname'
                className="w-full bg-transparent border-b-2 pr-8 pl-10 py-3 text-sm text-black placeholder-black border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                name='lastName' 
                onChange={changeInputRegister} 
              />
          </label>
        </div>
        <div className='w-6/12 mx-auto grid gap-5 my-5'>
          <label className='relative'>
              <FaLock
                onClick={viewPass} 
                className="w-6 h-6 cursor-pointer absolute top-2 ml-1" 
               />
              {seePassword ? (
                <input
                type="text"
                placeholder='Password'
                className="w-full bg-transparent border-b-2 pr-8 pl-10 py-3 text-sm text-black placeholder-black border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                name='password'
                onChange={changeInputRegister} 
              />
              ) : (<input
                type="password"
                placeholder='Password'
                className="w-full bg-transparent border-b-2 pr-8 pl-10 py-3 text-sm text-black placeholder-black border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                name='password'
                onChange={changeInputRegister} 
              />
              )}
          </label>
        </div>
        <div className='w-6/12 mx-auto grid gap-5 my-5'>
          <label className='relative'>
              {/* <IoMdLogIn className="w-6 h-6 cursor-pointer absolute inset-x-0 top-3 px-auto" /> */}
              <button
                className="btn btn-primary w-full pr-8 pl-8 py-3 text-sm text-black placeholder-black rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                name='userName'
                onClick={submit} 
              >Register</button>
          </label>
        </div>
    </div>
    ): (
    <div className='login-bg px-5 py-10'>
        <div className='w-6/12 mx-auto grid gap-5 my-5'>
          <label className='relative'>
              <FaUser className="w-6 h-6 cursor-pointer absolute top-2 ml-1" />
              <input 
                type="text"
                placeholder='Username'
                className="w-full bg-transparent border-b-2 pr-8 pl-10 py-3 text-sm text-black placeholder-black border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                name='userName' 
                onChange={changeInputLogin} 
              />
          </label>
        </div>
        <div className='w-6/12 mx-auto grid gap-5 my-5'>
          <label className='relative'>
              <FaLock className="w-6 h-6 cursor-pointer absolute top-2 ml-1" />
              <input
                type="password"
                placeholder='Password'
                className="w-full bg-transparent border-b-2 pr-8 pl-10 py-3 text-sm text-black placeholder-black border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                name='password'
                onChange={changeInputLogin} 
              />
          </label>
        </div>
        <div className='w-6/12 mx-auto grid gap-5 my-5'>
          <label className='relative'>
              {/* <IoMdLogIn className="w-6 h-6 cursor-pointer absolute inset-x-0 top-3 px-auto" /> */}
              <button
                className="btn btn-primary w-full pr-8 pl-8 py-3 text-sm text-black placeholder-black rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                name='userName'
                onClick={submit} 
              >Login</button>
          </label>
        </div>
    </div>
    )}
    </>
  )
}
