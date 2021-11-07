import axiosClient from './axiosClient';
import {MENU} from '../redux/constant/TableName';

const menuServices = {
    getAll: () =>{
        return axiosClient.get(MENU)
    }
};

export default menuServices;