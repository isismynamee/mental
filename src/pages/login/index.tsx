import { Homepage } from '@/components/moleculs/homepage'
import { actionsNews } from '@/redux/news/actions'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { LoginComponent } from '@/components/moleculs/login'

export default function Login(){
    const [formInputLogin, setFormInputLogin] = useState<String>('')
    const [formInputRegister, setFormInputRegister] = useState<String>('')
    const [login, setLogin] = useState<boolean>(false)
    const [seePassword, setSeePassword] = useState<boolean>(false)

    console.log(formInputLogin, formInputRegister, "form input")

    const changeInputLogin = useCallback(
      (e: React.FormEvent<HTMLInputElement>): void => {
        const {name, value} = e.currentTarget;
  
        setFormInputLogin((prev) => ({
          ...prev,
          [name]: value
        }))
      }, [setFormInputLogin]
    )

    const changeInputRegister = useCallback(
      (e: React.FormEvent<HTMLInputElement>): void => {
        const {name, value} = e.currentTarget;
  
        setFormInputRegister((prev) => ({
          ...prev,
          [name]: value
        }))
      }, [setFormInputRegister]
    )

    const viewPass = useCallback(
      () => {
        setSeePassword(!seePassword)
      }, [setSeePassword, seePassword]
    )

    const submit = useCallback(
      () => {
        setLogin(!login)
      }, [setLogin, login]
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
        <LoginComponent
          changeInputRegister={changeInputRegister}
          login={login}
          changeInputLogin={changeInputLogin}
          submit={submit}
          seePassword={seePassword}
          viewPass={viewPass}
        />
      </Homepage>
    )
}
