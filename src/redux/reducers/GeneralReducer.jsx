import {
    FETCH_COUNTRIES_REQUEST,
    FETCH_COUNTRIES_SUCCESS,
    FETCH_COUNTRIES_ERROR
   
} from '../constant/GeneralConstant';

const initialState = {
    isLoading: false,
    success: false,
    message: null,
    data: [],
    row:{}
}

function GeneralReducer(state = initialState, action) {
   
    switch (action.type) {
        case FETCH_COUNTRIES_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_COUNTRIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                success: true,
                data: action.data
            }
        case FETCH_COUNTRIES_ERROR:
            return {
                ...state,
                isLoading: false,
                message: action.message,
                data: []
            }
        default:
            return state;
    }
}
export default GeneralReducer;
