import React, { useCallback, useEffect, useState } from 'react'
import {image} from '@/images'
import Image from 'next/image'
import {IoHomeOutline} from 'react-icons/io5'
import {IoMdCalendar, IoMdLogIn, IoMdNotificationsOutline, IoMdSearch, IoMdTime} from 'react-icons/io'
import { useRouter } from 'next/router'
import { NavbarInterface } from '@/utils/interface/NavbarInterface'

export const Navbar = ({
  children
}: NavbarInterface) => {
  const [input, setInput] = useState<String>('')

  const search = useCallback(
    () => {
      console.log("search")
    }, []
  )

  const changeInput = useCallback(
    (e: React.FormEvent<HTMLInputElement>): void => {
      const {name, value} = e.currentTarget;

      setInput((prev) => ({
        ...prev,
        [name]: value
      }))
    }, [setInput]
  )

  const route = useRouter()
  const [time, setTime] = useState<String>('')

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  // console.clear()


  return (
    <React.Fragment>
      <div className='flex text-black'>
        <div id='top' className="h-[100vh] bg-gradient-to-t from-cyan-500 to-blue-500 w-3/12">
          <div className='flex justify-between'>
            <Image priority={true} className='mx-auto' src={image.logo} width={200} alt="" />
          </div>
          <div className='grid gap-5'>
            <div className='mx-auto grid px-7 mt-10 gap-5 w-full'>
              <label className='flex items-center cursor-pointer'>
                <IoMdNotificationsOutline className="w-5 h-5 mr-2" />
                <span>Notification</span>
              </label>
              <label onClick={() => route.push('/')} className='flex items-center cursor-pointer'>
                <IoHomeOutline className={route.pathname === '/' ? "w-5 h-5 mr-2 text-white" : "w-5 h-5 mr-2"} />
                <span className={route.pathname === '/' ? "font-bold text-white fixed-clock": ""}>Home</span>
              </label>
              <label onClick={() => route.push('/events')} className='flex items-center cursor-pointer'>
                <IoMdCalendar className={route.pathname === '/events' ? "w-5 h-5 mr-2 text-white" : "w-5 h-5 mr-2"} />
                <span className={route.pathname === '/events' ? "font-bold text-white fixed-clock": ""}>Events</span>
              </label>
              <label onClick={() => route.push('/login')} className='flex items-center cursor-pointer'>
                <IoMdLogIn className={route.pathname === '/login' ? "w-5 h-5 mr-2 text-white" : "w-5 h-5 mr-2"} />
                <span className={route.pathname === '/login' ? "font-bold text-white fixed-clock": ""}>{"Login"}</span>
              </label>
              <label className='flex items-center cursor-pointer'>
                <IoMdTime className="w-5 h-5 mr-2" />
                <span className='fixed-clock'>
                  {time}
                </span>
              </label>
            </div>
            <div className='mx-auto justify-center grid gap-5'>
              <label className='relative'>
                  <IoMdSearch onClick={search} className="w-6 h-6 z-10 cursor-pointer absolute top-1 ml-1" />
                  <input
                    onChange={changeInput}
                    type='text'
                    name='searchInput'
                    className="w-full bg-white pr-8 pl-10 py-2 text-sm text-gray-900 placeholder-gray-500 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search"
                  />
              </label>
            </div>
          </div>
          <div className='grid gap-5 mt-10 w-2/12'>
            <div className='mx-auto grid gap-5 w-8/12'>
            </div>
          </div>
        </div>
        <div className='login w-9/12'>
          {children}
        </div>
      </div>
    </React.Fragment>
  )
}
