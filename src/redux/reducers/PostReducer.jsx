import {
    FETCH_POST_REQUEST, 
    FETCH_POST_SUCCESS, 
    FETCH_POST_ERROR
} from '../constant/PostConstant'

const initialState = {
    isLoading : false,
    success : false,
    message : null,
    data : []
}

function PostReducer (state = initialState, action){
    switch(action.type){
        case FETCH_POST_REQUEST:
            return {
                ...state,
                isLoading : true
            };
        case FETCH_POST_SUCCESS:
            return {
                ...state,
                isLoading:false,
                success : true,
                data:action.data
            };
        case FETCH_POST_ERROR:
            return {
                ...state,
                isLoading:false,
                success:false,
                message:action.message
            };
        default:
            return state;
    }
}

export default PostReducer;