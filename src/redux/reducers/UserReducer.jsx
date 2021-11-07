import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR,
    POST_USER_REQUEST,
    POST_USER_SUCCESS,
    POST_USER_ERROR
} from '../constant/UserConstant';

const initialState = {
    isLoading: false,
    success: false,
    message: null,
    data: []
}

function UserReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                success: true,
                data: action.data
            }
        case FETCH_USER_ERROR:
            return {
                ...state,
                isLoading: false,
                message: action.message,
                data: []
            }
        case POST_USER_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case POST_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                success: true
            }
        case POST_USER_ERROR:
            return {
                ...state,
                isLoading: false,
                success: false,
                message: action.message,
            }
        default:
            return state;

    }
}
export default UserReducer;
