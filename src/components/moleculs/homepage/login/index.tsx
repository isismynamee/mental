import React from 'react'
import { FaUser, FaLock } from 'react-icons/fa'

export const LoginComponent = ({
    changeInputLogin,
    changeInputRegister,
    formInputLogin,
    formInputRegister,
    changeLogin,
    rePass,
    submit,
    viewRePass,
    login,
    seePassword,
    viewPass
}: LoginInterface) => {

  const disableRegister ={
    get isDisable(){
      return (
        !formInputRegister ||
        !formInputRegister.firstName ||
        !formInputRegister.lastName ||
        !formInputRegister.userName ||
        !formInputRegister.password ||
        !formInputRegister.rePassword ||
        formInputRegister.password.localeCompare(formInputRegister.rePassword) !== 0
      );
  
    }
  }
  const disableLogin ={
    get isDisable(){
      return (
        !formInputLogin ||
        !formInputLogin.userName ||
        !formInputLogin.password
      );
  
    }
  }

  return (
    <>
    {login ? (
    <div className='login-bg px-5 py-[10%]'>
        <div className='w-6/12 mx-auto grid gap-5 my-5'>
          <label className='relative'>
              <FaUser className="w-6 h-6 cursor-pointer absolute top-2 ml-1" />
              <input 
                value={formInputRegister.userName ?? ""}
                type="text"
                placeholder='Username'
                className="w-full bg-transparent border-b-2 pr-8 pl-10 py-3 text-sm text-black placeholder-black rounded-md focus:outline-none"
                name='userName' 
                onChange={changeInputRegister} 
              />
          </label>
        </div>
        <div className='w-6/12 mx-auto grid gap-5 my-5'>
          <label className='relative'>
              <FaUser className="w-6 h-6 cursor-pointer absolute top-2 ml-1" />
              <input 
                value={formInputRegister.firstName ?? ""}
                type="text"
                placeholder='Firstname'
                className="w-full bg-transparent border-b-2 pr-8 pl-10 py-3 text-sm text-black placeholder-black rounded-md focus:outline-none"
                name='firstName'
                onChange={changeInputRegister} 
              />
          </label>
        </div>
        <div className='w-6/12 mx-auto grid gap-5 my-5'>
          <label className='relative'>
              <FaUser className="w-6 h-6 cursor-pointer absolute top-2 ml-1" />
              <input 
                value={formInputRegister.lastName ?? ""}
                type="text"
                placeholder='Lastname'
                className="w-full bg-transparent border-b-2 pr-8 pl-10 py-3 text-sm text-black placeholder-black rounded-md focus:outline-none"
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
                  value={formInputRegister.password ?? ""}
                  type="text"
                  placeholder='Password'
                  className="w-full bg-transparent border-b-2 pr-8 pl-10 py-3 text-sm text-black placeholder-black rounded-md focus:outline-none"
                  name='password'
                  onChange={changeInputRegister} 
                />
              ) : (
              <input
                value={formInputRegister.password ?? ""}
                type="password"
                placeholder='Password'
                className="w-full bg-transparent border-b-2 pr-8 pl-10 py-3 text-sm text-black placeholder-black rounded-md focus:outline-none"
                name='password'
                onChange={changeInputRegister} 
              />
              )}
          </label>
        </div>
        <div className='w-6/12 mx-auto grid gap-5 my-5'>
          <label className='relative'>
              <FaLock
                onClick={rePass} 
                className="w-6 h-6 cursor-pointer absolute top-2 ml-1" 
               />
              {viewRePass ? (
                <input
                  value={formInputRegister.rePassword ?? ""}
                  type="text"
                  placeholder='Re-type Password'
                  className="w-full bg-transparent border-b-2 pr-8 pl-10 py-3 text-sm text-black placeholder-black rounded-md focus:outline-none"
                  name='rePassword'
                  onChange={changeInputRegister} 
                />
              ) : (
              <input
                value={formInputRegister.rePassword ?? ""}
                type="password"
                placeholder='Re-type Password'
                className="w-full bg-transparent border-b-2 pr-8 pl-10 py-3 text-sm text-black placeholder-black rounded-md focus:outline-none"
                name='rePassword'
                onChange={changeInputRegister} 
              />
              )}
          </label>
        </div>
        <div className='w-6/12 mx-auto grid gap-5 my-5'>
          <label className='relative'>
              <button
                className="btn btn-primary w-full pr-8 pl-8 py-3 text-sm text-black placeholder-black rounded-md focus:outline-none"
                disabled={disableRegister.isDisable}
                onClick={submit} 
              >Register</button>
          </label>
        </div>
        <div className='w-6/12 text-center mx-auto grid gap-5 my-5'>
          <span className='uppercase font-bold text-lg'>or</span>
          <span className='capitalize'><span className="font-bold cursor-pointer" onClick={changeLogin}>Login</span> if you already have an account</span>
        </div>
    </div>
    ): (
    <div className='login-bg px-5 py-[10%]'>
        <div className='w-6/12 mx-auto grid gap-5 my-5'>
          <label className='relative'>
              <FaUser className="w-6 h-6 cursor-pointer absolute top-2 ml-1" />
              <input 
                value={formInputLogin.userName ?? ""}
                type="text"
                placeholder='Username'
                className="w-full bg-transparent border-b-2 pr-8 pl-10 py-3 text-sm text-black placeholder-black rounded-md focus:outline-none"
                name='userName' 
                onChange={changeInputLogin} 
              />
          </label>
        </div>
        <div className='w-6/12 mx-auto grid gap-5 my-5'>
          <label className='relative'>
              <FaLock onClick={viewPass} className="w-6 h-6 cursor-pointer absolute top-2 ml-1" />
              {seePassword ? (
                <input
                value={formInputLogin.password ?? ""}
                type="text"
                placeholder='Password'
                className="w-full bg-transparent border-b-2 pr-8 pl-10 py-3 text-sm text-black placeholder-black rounded-md focus:outline-none"
                name='password'
                onChange={changeInputLogin} 
              />
              ) : (
                <input
                value={formInputLogin.password ?? ""}
                type="password"
                placeholder='Password'
                className="w-full bg-transparent border-b-2 pr-8 pl-10 py-3 text-sm text-black placeholder-black rounded-md focus:outline-none"
                name='password'
                onChange={changeInputLogin} 
              />
              )}
          </label>
        </div>
        <div className='w-6/12 mx-auto grid gap-5 my-5'>
          <label className='relative'>
              <button
                className="btn btn-primary w-full pr-8 pl-8 py-3 text-sm text-black placeholder-black rounded-md focus:outline-none"
                onClick={submit}
                disabled={disableLogin.isDisable}
              >Login</button>
          </label>
        </div>
        <div className='w-6/12 text-center mx-auto grid gap-5 my-5'>
          <span className='uppercase font-bold text-lg'>or</span>
          <span className='capitalize'><span className="font-bold cursor-pointer" onClick={changeLogin}>join</span> with us if you don't have an account</span>
        </div>
    </div>
    )}
    </>
  )
}
