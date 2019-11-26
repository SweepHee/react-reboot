import { all, fork, takeLatest, takeEvery } from 'redux-saga/effects';
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE } from '../reducers/user';
import axios from 'axios';

/*
 * 패턴
~~~API() 함수 : 서버에 요청을 보내는 API 함수
watch~~~() 함수 : 어떤 액션이 들어오면 어떤걸 하겠다 명시
(signUp, logIn logOut 등등 함수) : watch 함수가 실행됐을때 무엇을 할 지

정리하자면,

액션이 들어온다(watch함수) -> watch함수에 명시된 함수가 실행됨.
-> 명시된 함수에서 call로 서버로 axios 요청 들어감 -> 성공하면 SUCCESS 액션 실행

*/


function loginAPI() {
    return axios.post("/login");
}

function* login() {
    try {
        // yield call(loginAPI);
        yield delay(2000);
        yield put({
            type: LOG_IN_SUCCESS
        });
    }catch(e) {
        console.error(e);
        yield put({
            type: LOG_IN_FAILURE
        })
    }
}

function* watchLogin () {
    yield takeEvery(LOG_IN_REQUEST, login)
}

function signUpAPI() {
    return axios.post("/login");
}

function* signUp() {
    try {
        yield call(loginAPI);
        yield put({
            type: LOG_IN_SUCCESS
        })
    }catch(e) {
        console.error(e);
        yield put({
            type: LOG_IN_FAILURE
        })
    }
}

function* watchSignUp() {
    yield takeEvery(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
    yield all([
        fork(watchLogin),
        fork(watchSignUp),
    ])
}