import {
    FETCH_COUNTRIES_REQUEST, 
    FETCH_COUNTRIES_SUCCESS, 
    FETCH_COUNTRIES_ERROR
    
} from '../constant/GeneralConstant';
import generalServices from '../../services/GeneralServices';

export const loadCountries = () => async dispatch =>{
    try{
        dispatch({type : FETCH_COUNTRIES_REQUEST})

        const respone = await generalServices.getCountriesAll();

        dispatch({
            type:FETCH_COUNTRIES_SUCCESS,
            data: respone
        });
    }catch(error){
        dispatch({
            type : FETCH_COUNTRIES_ERROR,
            message : error.message
        })
    }
}

