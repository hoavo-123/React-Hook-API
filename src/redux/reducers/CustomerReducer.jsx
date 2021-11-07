import {
    FETCH_CUSTOMER_ERRORR,
    FETCH_CUSTOMER_REQUEST,
    FETCH_CUSTOMER_SUCCESS,
    POST_CUSTOMER_SUCCESS,
    POST_CUSTOMER_ERROR,
    POST_CUSTOMER_REQUEST,
    UPDATE_CUSTOMER_REQUEST,
    UPDATE_CUSTOMER_SUCCESS,
    UPDATE_CUSTOMER_ERROR,
    DELETE_CUSTOMER_REQUEST,
    DELETE_CUSTOMER_SUCCESS,
    DELETE_CUSTOMER_ERROR
} from '../constant/CustomerConstant';

const initialState = {
    isLoading: false,
    success: false,
    message: null,
    data: [],
    row:{}
}

function CustomerReducer(state = initialState, action) {
   
    switch (action.type) {
        case FETCH_CUSTOMER_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_CUSTOMER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                success: true,
                data: action.data
            }
        case FETCH_CUSTOMER_ERRORR:
            return {
                ...state,
                isLoading: false,
                message: action.message,
                data: []
            }
        case POST_CUSTOMER_REQUEST:
            return {
                ...state,
                isLoading: true,
                message: null
            }
        case POST_CUSTOMER_SUCCESS:
            return {
                ...state,
                message: null,
                isLoading: false,
                data: [...state.data, action.data]
            }
        case POST_CUSTOMER_ERROR:
            return {
                message: action.message,
                isLoading: false,
                data: []
            }
        case UPDATE_CUSTOMER_REQUEST:
            return {
                ...state,
                isLoading: true,
                message: null
            }
        case UPDATE_CUSTOMER_SUCCESS:
            return {
                ...state,
                message: null,
                isLoading: false,
                data: state.data.map(row => row.id === action.data.id ? row = action.data : row)
            }
        case UPDATE_CUSTOMER_ERROR:
            return {
                ...state,
                message: action.message,
                isLoading: false,
            }


        case DELETE_CUSTOMER_REQUEST:
            return {
                ...state,
                isLoading: true,
                message: null
            }
        case DELETE_CUSTOMER_SUCCESS:
            return {
                ...state,
                message: null,
                isLoading: false,
                data: state.data.filter(row => row.id !== action.data)
            }
        case DELETE_CUSTOMER_ERROR:
            return {
                ...state,
                message: action.message,
                isLoading: false,
            }
        
        default:
            return state;
    }
}
export default CustomerReducer;
