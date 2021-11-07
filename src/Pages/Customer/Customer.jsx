import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {
    loadCustomer,
    postCustomer,
    UpdateCustomer,
    DeleteCustomer
} from '../../redux/actions/CustomerAction';
import {
    loadCountries,
    
} from '../../redux/actions/GeneralAction';
import './Customer.css';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { LABEL_CUSTOMER_INFORMATION } from '../../redux/constant/MessageConstant'


function Customer(props) {
    const data = useSelector(state => state.customers.data);
    const countries = useSelector(state=> state.general.data);
      
    const[isOpen,setIsOpen] = useState(false);
   
    const[id,setcustomerid] = useState('');
    const[CustomerName,setcustomerName] = useState('');
    const[Address,setaddress] = useState('');
    const[Address2,setaddress2] = useState('');
    const[Phone,setphonenumber] = useState('');
    const[Balance,setbalance] = useState('');
    const[CustomerGroup,setcustomerGroup] = useState('');
    const[Country,setcountry] = useState('');
        
    const dispatch = useDispatch();
    
    useEffect(() =>{
        dispatch(loadCustomer());
        dispatch(loadCountries());
    },[dispatch]);

    const showModal = () =>{
        setIsOpen(true);
        setcustomerid('');
        setcustomerName('');
        setaddress('');
        setaddress2('');
        setphonenumber('');
        setbalance('');
        setcustomerGroup('');
        setcountry('');
    }

    const handleClose = () =>{
        setIsOpen(false)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
      
        const body = {id, CustomerName, Address, Address2, Phone, Balance, CustomerGroup, Country}
        
        if (body.id == "" || body.id == null){
            dispatch(postCustomer(body));
        }else{
            dispatch(UpdateCustomer(body));
        }
 
        setIsOpen(false)
    }

    const loadCustomerInfo = (id) =>{
        const elememet = data.find(x=>x.id == id)
        setcustomerid(elememet.id);
        setcustomerName(elememet.CustomerName);
        setaddress(elememet.Address);
        setaddress2(elememet.Address2);
        setphonenumber(elememet.Phone);
        setbalance(elememet.Balance);
        setcustomerGroup(elememet.CustomerGroup);
        setcountry(elememet.Country);
        setIsOpen(true)
       
    }

    const deleteCustomer = (id) =>{
        dispatch(DeleteCustomer(id))
    }

    let optionTemplate = countries.map(v => (
        <option key={v.id} value={v.CountryID}>{v.CountryName}</option>
      ));
   
    return (
        <div>
            <div className="container">
                <div className="row top-buffer">
                    <div className="col-12 text-right">
                        <button className="btn btn-primary" onClick={showModal}><i className="fa fa-plus"></i> Home</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Customer ID</th>
                                    <th scope="col">Customer Name</th>
                                    <th scope="col">Customer Group</th>
                                    <th scope="col">Country</th>
                                    <th scope="col">Balance</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, i) =>
                                    <tr key={i}>
                                        <td>{item.id}</td>
                                        <td>{item.CustomerName}</td>
                                        <td>{item.CustomerGroup}</td>
                                        <td>{item.Country}</td>
                                        <td>{item.Balance}</td>
                                        <td>
                                            <button type="button" className="btn btn-info mr-2"><i className="fas fa-eye"></i></button>
                                            <button type="button" className="btn btn-success mr-2" onClick={() => loadCustomerInfo(item.id)}><i className="fas fa-edit"></i></button>
                                            <button type="button" className="btn btn-danger" onClick={() => deleteCustomer(item.id)}><i className="fas fa-trash-alt"></i></button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <Modal show={isOpen} onHide={handleClose}>
                <Modal.Header closeButton><label>{LABEL_CUSTOMER_INFORMATION}</label></Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="form-row mt-4">
                            <input type="hidden" value={id} onChange={(e) => setcustomerid(e.target.value)} />

                            <div className="form-group col-md-6">
                                <label>Customer Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="CustomerName"
                                    value={CustomerName}
                                    onChange={(e) => setcustomerName(e.target.value)}
                                />
                            </div>

                            <div className="form-group col-md-6">
                                <label>Customer Group</label>
                                <select
                                    value={CustomerGroup}
                                    onChange={(e) => setcustomerGroup(e.target.value)}
                                    className="form-control"
                                    id="exampleFormControlSelect1">
                                    <option>Domestic</option>
                                    <option>OverSea</option>
                                </select>
                            </div>

                            <div className="form-group col-md-12">
                                <label>Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Address"
                                    value={Address}
                                    onChange={(e) => setaddress(e.target.value)}
                                />
                            </div>

                            <div className="form-group col-md-12">
                                <label>Address 2</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Address 2"
                                    value={Address2}
                                    onChange={(e) => setaddress2(e.target.value)}
                                />
                            </div>

                            <div className="form-group col-md-4">
                                <label>Phone Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Phone Number"
                                    value={Phone}
                                    onChange={(e) => setphonenumber(e.target.value)}
                                />
                            </div>

                            <div className="form-group col-md-4">
                                <label>Country</label>
                                <select
                                    value={Country}
                                    onChange={(e) => setcountry(e.target.value)}
                                    className="form-control"
                                    id="exampleFormControlSelect1"
                                    >
                                    {optionTemplate}
                                </select>
                            </div>

                            <div className="form-group col-md-4">
                                <label>Balance</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Balance"
                                    value={Balance}
                                    onChange={(e) => setbalance(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="text-right">
                            <button type="submit" className="btn btn-success mr-2">Accept</button>
                            <button type="button" className="btn btn-danger" onClick={handleClose}>Cancel</button>
                        </div>

                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Customer;