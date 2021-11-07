import {FETCH_MENU_REQUEST, FETCH_MENU_SUCCESS, FETCH_MENU_ERROR} from '../constant/MenuConstant';
import menuServices from '../../services/MenuServices';

export const loadMenu = () => async dispatch =>{
    try{
        dispatch({type : FETCH_MENU_REQUEST})

        const respone = await menuServices.getAll();

        dispatch({
            type:FETCH_MENU_SUCCESS,
            data: respone
        });
    }catch(error){
        dispatch({
            type : FETCH_MENU_ERROR,
            message : error.message
        })
    }
}