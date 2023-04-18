import * as actions from './actions'
import * as actionType from './actionType'
import { call, put, takeEvery, takeLatest } from "redux-saga/effects"
import axios from 'axios'

export function* getNews({payload}: {payload: any}) {
    try {
        const {data} = yield call(axios.get, `https://newsapi.org/v2/top-headlines?country=id&apiKey=${payload}`)
        yield put({
            type:actionType.GET_NEWS, 
            payload: data.articles
        })
        return Promise.resolve(data)
        
    } catch (error) {
        return Promise.reject(error)
    }
}

export default function* news() {
    yield takeLatest("FETCHING_NEWS", getNews)
}
