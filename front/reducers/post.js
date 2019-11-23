export const initialState = {
    mainPosts: [{
        User: {
            id: 1,
            nickname: '스윕',
        },
        content: '첫 번째 게시글입니다',
        img: 'https://techcrunch.com/wp-content/uploads/2015/08/safe_image.gif?w=477',
    }],
    imagePaths: [],
};

const ADD_POST = 'ADD_POST';
const ADD_DUMMY = 'ADD_DUMMY';

// -------------- ACTION ----------------
const addPost = {
    type:ADD_POST,
}
const addDummy = {
    type: ADD_DUMMY,
    data: {
        content: 'Hello',
        UserId: 1,
        User: {
            nickname: '제로초',
        },
    },
}
// ---------------------------------------


const reducer = (state = initialState, action) => {
    switch(action.type)
    {
        case ADD_POST: {
            return {
                ...state,
            }
        }
        case ADD_DUMMY: {
            return {
                ...state,
                mainPosts: [action.data, ...state.mainPosts],
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}

export default reducer;