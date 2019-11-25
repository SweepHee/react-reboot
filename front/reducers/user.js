import axios from 'axios';

const dummyUser = {
    nickname: '스윕',
    Post: [],
    Followings: [],
    Followers: [],
}

export const initialState = {
    isLoggedIn: false, // 로그인 여부
    isLoggingOut: false, // 로그아웃 시도중
    isLoggingIn: false, // 로그인 시도중
    logInErrorReason: '', // 로그인 에러 사유
    signedUp: false, // 회원가입 성공
    isSigningUp: false, // 회원가입 시도중
    signUpErrorReason: '', // 회원가입 실패 사유
    me: null, // 내 정보
    followingList: [], // 팔로잉 리스트
    followerList: [], // 팔로워 리스트
    userInfo: null, //남의 정보
};

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'; 
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; 
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; 

export const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const LOAD_FOLLOW_REQUEST = "LOAD_FOLLOW_REQUEST";
export const LOAD_FOLLOW_SUCCESS = "LOAD_FOLLOW_SUCCESS";
export const LOAD_FOLLOW_FAILURE = "LOAD_FOLLOW_FAILURE";

export const FOLLOW_USER_REQUEST = "FOLLOW_USER_REQUEST";
export const FOLLOW_USER_SUCCESS = "FOLLOW_USER_SUCCESS";
export const FOLLOW_USER_FAILURE = "FOLLOW_USER_FAILURE";

export const UNFOLLOW_USER_REQUEST = "UNFOLLOW_USER_REQUEST";
export const UNFOLLOW_USER_SUCCESS = "UNFOLLOW_USER_SUCCESS";
export const UNFOLLOW_USER_FAILURE = "UNFOLLOW_USER_FAILURE";

export const REMOVE_USER_REQUEST = "REMOVE_USER_REQUEST";
export const REMOVE_USER_SUCCESS = "REMOVE_USER_SUCCESS";
export const REMOVE_USER_FAILURE = "REMOVE_USER_FAILURE";

export const ADD_POST_TO_ME = "ADD_POST_TO_ME";

/* --------- ACTIONS --------- */ 

export const loginAction = {
    type: LOG_IN_REQUEST
};
export const logoutAction = {
    type: LOG_OUT_REQUEST,
};
export const signUp = data => ({  // 소괄호로 return 을 생략 가능
    type: SIGN_UP_REQUEST,
    data: data,
})

/* ----------------------------- */


export default (state = initialState, action) => {
    switch (action.type)
    {
        case LOG_IN_REQUEST: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case LOG_IN_SUCCESS: {
            return {
                ...state,
                me: dummyUser,
                isLoggedIn: true,
                isLoading: false,
            }
        }
        case LOG_IN_FAILURE: {
            return {
                ...state,
                isLoggedIn: false,
                me: null,
            };
        }
        case LOG_OUT_REQUEST: {
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            }
        }
        case SIGN_UP_REQUEST : {
            return {
                ...state,
                signUpdata: action.data,
                isLoading: true,
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
};