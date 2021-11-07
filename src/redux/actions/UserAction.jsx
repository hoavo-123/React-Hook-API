import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR,
    POST_USER_REQUEST,
    POST_USER_SUCCESS,
    POST_USER_ERROR
} from '../constant/UserConstant';

import {USERS} from '../constant/TableName';
import axios from 'axios';
import userServices from '../../services/UserServices';

export const loadUsers = () => async dispatch =>{
    try{
        dispatch({type : FETCH_USER_REQUEST})

        const respone = await userServices.getAll();

        dispatch({
            type:FETCH_USER_SUCCESS,
            data: respone
        });
    }catch(error){
        dispatch({
            type : FETCH_USER_ERROR,
            message : error.message
        })
    }
}

export const PostUsers = (user) => async dispatch =>{
    try{
        dispatch({type : POST_USER_REQUEST})

        // let post = await api.post(BASE_URL + USERS,user)
        const respone = await userServices.post(user);
           
        dispatch({
            type:POST_USER_SUCCESS,
            success:true
        });
    }catch(error){
        dispatch({
            type : POST_USER_ERROR,
            message : error.message
        })
    }
}