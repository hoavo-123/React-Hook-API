import {
    FETCH_POST_REQUEST,
    FETCH_POST_SUCCESS,
    FETCH_POST_ERROR
}
from '../constant/PostConstant';

export const loadPosts = () => async dispatch =>{
    try{
        dispatch({type : FETCH_POST_REQUEST})

        const url = BASE_URL;
        const respone  = await fetch(url);
        const responeBody = await respone.json();

        dispatch({
            type:FETCH_POST_SUCCESS,
            data: responeBody
        });
    }catch(error){
        console.log(error)
        dispatch({
            type : FETCH_POST_ERROR,
            message : error.message
        })
    }
}