import React,{useEffect} from 'react';
import PropTypes from 'prop-types';
import MaterialTable from '@material-table/core';
import {useSelector, useDispatch} from 'react-redux'
import {loadUsers,PostUsers} from '../redux/actions/UserAction';



MaterialTableCore.propTypes = {
    
};

function MaterialTableCore(props) {
    const data = useSelector(state => state.users.data);
    
    const dispatch = useDispatch();
    
    useEffect(() =>{
        dispatch(loadUsers());
    },[]);

    const functest = (newdata)=>{
        dispatch(PostUsers(newdata))
    }
   
    const columns = [
        {
            title:"User Name", field:"username"
        },
        {
            title:"Phone Number", field:"phonenumber"
        },
        {
            title:"Password", field:"password"
        },
        {
            title:"Gender", field:"gender", lookup : {0:"Female",1:"Male"} 
        },
    ];
    return (
        <div>
            <h1 align = "center">React Material Table</h1>
            <MaterialTable title="User List"
                data={data}
                columns={columns}
                options={{actionsColumnIndex:-1}}
                pageSize={20}
                editable={{
                    onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                functest(newData)
                                console.log(data)
                                // setData([...data, newData]);

                                resolve();
                            }, 1000)
                        })
                }}

            />
        </div>
    );
}

export default MaterialTableCore;