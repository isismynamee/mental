import { Homepage } from '@/components/moleculs/homepage'
import { actionsNews } from '@/redux/sagas/news/actions'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { LoginComponent } from '@/components/moleculs/homepage/login'
import { useRouter } from 'next/router'

export default function Login(){
    const route = useRouter()
    const dispatch = useDispatch()
    const [formInputLogin, setFormInputLogin] = useState<String>('')
    const [formInputRegister, setFormInputRegister] = useState<String>('')
    const [login, setLogin] = useState<boolean>(false)
    const [seePassword, setSeePassword] = useState<boolean>(false)
    const [seeRePassword, setSeeRePassword] = useState<boolean>(false)

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

    const rePass = useCallback(
      () => {
        setSeeRePassword(!seeRePassword)
      }, [setSeeRePassword, seeRePassword]
    )

    const changeLogin = useCallback(
      () => {
        setLogin(!login)
      }, [setLogin, login]
    )

    const submit = useCallback(
      () => {
        if(login){
          dispatch({
            type: "POST_REGISTER", 
            payload: {
              userName: formInputRegister.userName ,
              firstName: formInputRegister.firstName ,
              lastName: formInputRegister.lastName ,
              password: formInputRegister.password ,
            }
          })
          setLogin(!login)
        }else{
          dispatch({
            type: "FETCHING_USERS", 
            payload: formInputLogin
          })
          route.push('/')
        }
      }, [formInputLogin, formInputRegister, setLogin, login, dispatch, route]
    )
    
    useEffect(() => {
        dispatch({
          type: "FETCHING_NEWS", 
          payload: process.env.apiKeyNews
        })
    }, [dispatch])

    return (
      <Homepage>
        <LoginComponent
          viewRePass={seeRePassword}
          rePass={rePass}
          formInputLogin={formInputLogin}
          formInputRegister={formInputRegister}
          changeInputRegister={changeInputRegister}
          login={login}
          changeInputLogin={changeInputLogin}
          changeLogin={changeLogin}
          submit={submit}
          seePassword={seePassword}
          viewPass={viewPass}
        />
      </Homepage>
    )
}
