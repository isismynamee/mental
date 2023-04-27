import * as actions from './actions'
import * as actionType from './actionType'
import { call, put, takeLatest } from "redux-saga/effects"
import axios from 'axios'

export function* loginUser({payload}: {payload: any}) {
    try {
        const {data} = yield call(axios.post, `http://localhost:5000/api/steps/login`, payload)
        localStorage.setItem('Authorization', data.token)
        yield put({
            type:actionType.USER_LOGIN, 
            payload: data.data
        })
        return Promise.resolve(data)
        
    } catch (error) {
        return Promise.reject(error)
    }
}
export function* registerUser({payload}: {payload: any}) {
    try {
        const {data} = yield call(axios.post, `http://localhost:5000/api/steps/regist`, payload)
        
        return Promise.resolve(data)
        
    } catch (error) {
        return Promise.reject(error)
    }
}

export default function* users() {
    yield takeLatest("FETCHING_USERS", loginUser)
    yield takeLatest("POST_REGISTER", registerUser)
}
