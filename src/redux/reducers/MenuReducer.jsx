import {
    FETCH_MENU_REQUEST,
    FETCH_MENU_SUCCESS,
    FETCH_MENU_ERROR,
} from '../constant/MenuConstant';

const initialState = {
    isLoading: false,
    success: false,
    message: null,
    data: []
}

function MenuReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_MENU_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_MENU_SUCCESS:
            return {
                ...state,
                isLoading: false,
                success: true,
                data: action.data
            }
        case FETCH_MENU_ERROR:
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
export default MenuReducer;
