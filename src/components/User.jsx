import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {loadUsers} from '../redux/actions/UserAction';


function User(props) {
    const data = useSelector(state => state.users.data);
    
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(loadUsers());
    },[dispatch]);
    
    // const columns = React.useMemo(
    //     () => [
    //       {
    //         Header: null,
    //         columns: [
    //           {
    //             Header: 'ID',
    //             accessor: 'id',
    //           },
    //           {
    //             Header: 'Name',
    //             accessor: 'name',
    //           },
    //           {
    //             Header: 'User Name',
    //             accessor: 'username',
    //           },
    //           {
    //             Header: 'Email',
    //             accessor: 'email',
    //           }
    //         ],
    //       },
          
    //     ],
    //     []
    //   )  

      const columns = [
        {
            Header: 'ID',
            accessor: 'id'
        },
        {
            Header: 'Name',
            accessor: 'name'
        },
        {
            Header: 'User Name',
            accessor: 'username'
        },
        {
            Header: 'Email',
            accessor: 'email'
        },
        {
            Header: 'Address',
            columns: [
              {
                Header: 'Street',
                accessor: 'address.street',
              },
              {
                Header: 'Suite',
                accessor: 'address.suite',
              },
              {
                Header: 'City',
                accessor: 'address.city',
              },
              {
                Header: 'Zipcode',
                accessor: 'address.zipcode',
              }
            ],
          },
    ];
    
    return (
        <div>
            {/* <Table columns = {columns} data = {data} get/> */}
        </div>
    );
}

export default User;