const dummyUser = {
    nickname: '스윕',
    Post: ["1","1"],
    Followings: ["0","1"],
    Followers: ["0","1"],
}

export const initialState = {
    isLoggedIn: false,
    user: null,
    signUpdata: {},
};

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'; 
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; 
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; 

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';



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


const reducer = (state = initialState, action) => {
    switch (action.type)
    {
        case LOG_IN_REQUEST: {
            return {
                ...state,
                loginData: action.data,
                isLoading: true,
            }
        }
        case LOG_IN_SUCCESS: {
            return {
                ...state,
                user: dummyUser,
                isLoggedIn: true,
                isLoading: false,
            }
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

export default reducer;