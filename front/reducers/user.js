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

// dispatch에 LOG_IN 이라고 입력했을때 type이 LOG_IN인 액션이 실행된다.
export const LOG_IN = 'LOG_IN'; 
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'; 
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'; 
export const LOG_OUT = 'LOG_OUT';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';


/* --------- ACTIONS --------- */ 

export const loginAction = {
    type: LOG_IN,
};
export const logoutAction = {
    type: LOG_OUT,
};
export const signUpAction = (data) => {
    return {
        type: SIGN_UP,
        data: data,
    }
}

/* ----------------------------- */


const reducer = (state = initialState, action) => {
    switch (action.type)
    {
        case LOG_IN: {
            return {
                ...state,
                isLoggedIn: true,
                user: dummyUser,
            }
        }
        case LOG_OUT: {
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            }
        }
        case SIGN_UP : {
            return {
                ...state,
                signUpdata: action.data,
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