import { Homepage } from '@/components/moleculs/homepage'
import { actionsNews } from '@/redux/news/actions'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as image from '@/images'
import Image from 'next/image'

export default function Login(){
    const [formInput, setFormInput] = useState<String>('')

    const changeInput = useCallback(
      (e: React.FormEvent<HTMLInputElement>): void => {
        const {name, value} = e.currentTarget;
  
        setFormInput((prev) => ({
          ...prev,
          [name]: value
        }))
      }, [setFormInput]
    )

    const submitLogin = useCallback(
      () => {
        
      }, []
    )
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({
          type: "FETCHING_NEWS", 
          payload: process.env.apiKeyNews
        })
    }, [dispatch])

    return (
      <Homepage>
        <div className='login-bg grid gap-5 px-5 py-10'>
          <label htmlFor="" className='w-6/12 mx-auto'>
            <input type="text" className='input input-bordered w-full' name='userName' onChange={changeInput} />
          </label>
          <label htmlFor="" className='w-6/12 mx-auto'>
            <input type="text" className='input input-bordered w-full' name='password' onChange={changeInput} />
          </label>
          <label htmlFor="" className='w-6/12 mx-auto'>
            <button onClick={submitLogin} className='btn btn-primary w-full'>Login</button>
          </label>
        </div>
      </Homepage>
    )
}
