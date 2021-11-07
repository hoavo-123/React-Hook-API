import axiosClient from './axiosClient';
import {USERS} from '../redux/constant/TableName';

const userServices = {
    getAll: () =>{
        return axiosClient.get(USERS)
    },
    getById: (id) =>{
        const url = `${USERS}/${id}`;
        return axiosClient.get(url)
    },
    post:(data) =>{
        return axiosClient.post(USERS,data)
    }

};

export default userServices;