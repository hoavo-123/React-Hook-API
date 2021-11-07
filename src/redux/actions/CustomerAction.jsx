import {
    FETCH_CUSTOMER_REQUEST, 
    FETCH_CUSTOMER_SUCCESS, 
    FETCH_CUSTOMER_ERRORR,
    POST_CUSTOMER_REQUEST,
    POST_CUSTOMER_SUCCESS,
    POST_CUSTOMER_ERROR,
    UPDATE_CUSTOMER_REQUEST,
    UPDATE_CUSTOMER_SUCCESS,
    UPDATE_CUSTOMER_ERROR,
    DELETE_CUSTOMER_REQUEST,
    DELETE_CUSTOMER_SUCCESS,
    DELETE_CUSTOMER_ERROR
} from '../constant/CustomerConstant';
import customerServices from '../../services/CustomerServices';

export const loadCustomer = () => async dispatch =>{
    try{
        dispatch({type : FETCH_CUSTOMER_REQUEST})

        const respone = await customerServices.getAll();

        dispatch({
            type:FETCH_CUSTOMER_SUCCESS,
            data: respone
        });
    }catch(error){
        dispatch({
            type : FETCH_CUSTOMER_ERRORR,
            message : error.message
        })
    }
}

export const postCustomer = (data) => async dispatch =>{
    try{
        dispatch({type : POST_CUSTOMER_REQUEST})

        const respone = await customerServices.postdata(data);

        dispatch({
            type:POST_CUSTOMER_SUCCESS,
            data: respone
        });
    }catch(error){
        dispatch({
            type : POST_CUSTOMER_ERROR,
            message : error.message
        })
    }
}

export const UpdateCustomer = (data) => async dispatch =>{
    try{
        dispatch({type : UPDATE_CUSTOMER_REQUEST})

        const respone = await customerServices.updateCustomer(data);

        dispatch({
            type:UPDATE_CUSTOMER_SUCCESS,
            data: respone
        });
    }catch(error){
        dispatch({
            type : UPDATE_CUSTOMER_ERROR,
            message : error.message
        })
    }
}

export const DeleteCustomer = (id) => async dispatch =>{
    try{
        dispatch({type : DELETE_CUSTOMER_REQUEST})

        const respone = await customerServices.deleteCustomer(id);
    
        dispatch({
            type:DELETE_CUSTOMER_SUCCESS,
            data: id
        });
    }catch(error){
        dispatch({
            type : DELETE_CUSTOMER_ERROR,
            message : error.message
        })
    }
}