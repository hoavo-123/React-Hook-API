import axiosClient from './axiosClient';
import {COUNTRIES} from '../redux/constant/TableName';

const generalServices = {
    getCountriesAll: () =>{
        return axiosClient.get(COUNTRIES)
    }
};

export default generalServices;