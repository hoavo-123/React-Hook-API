import axiosClient from './axiosClient';
import {CUSTOMER} from '../redux/constant/TableName';

const customerServices = {
    getAll: () =>{
        return axiosClient.get(CUSTOMER)
    },
    postdata:(data)=>{
        return axiosClient.post(CUSTOMER,data)
    },
    updateCustomer:(data) =>{
        return axiosClient.put(`${CUSTOMER}/${data.id}`,data)
    },
    deleteCustomer:(id) =>{
        return axiosClient.delete(`${CUSTOMER}/${id}`)
    }
};

export default customerServices;