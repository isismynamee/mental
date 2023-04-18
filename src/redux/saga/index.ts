import { all } from "redux-saga/effects";
import * as news from '../news/saga'

export function* rootSaga(){
    yield all([
        news.default()
    ])
}