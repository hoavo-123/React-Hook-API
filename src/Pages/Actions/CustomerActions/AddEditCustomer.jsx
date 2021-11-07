import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@material-ui/core';
import {Modal, Button} from 'react-bootstrap';
import { useState, useEffect } from 'react';

AddEditCustomer.propTypes = {
    isShow: PropTypes.bool
};

AddEditCustomer.defaultProps = {
    isShow: false
};

function AddEditCustomer({isShow}) {
    const[isOpen,setIsOpen] = useState(false)

    const handleClose = () =>{
        setIsOpen(false);
        console.log(isOpen)
    }

   
    useEffect(() =>{
       let show = false;
       if(isShow == true){
           show = true
       }
        setIsOpen(show)
        
       return () =>{
           show = false
       }
        
    });
  
    return (
        // <div></div>
        <Modal show={isOpen} onHide={handleClose}>
            <Modal.Header closeButton>Hi Modal Header</Modal.Header>
            <Modal.Body>
            <form>
            <div className="form-row mt-4">
                <div className="form-group col-md-6">
                    <label>Customer Name</label>
                    <input type="text" className="form-control" placeholder="CustomerName" />
                </div>

                <div className="form-group col-md-6">
                    <label>Customer</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option>Domestic</option>
                        <option>OverSea</option>
                    </select>
                </div>

                <div className="form-group col-md-12">
                    <label>Address</label>
                    <input type="text" className="form-control" placeholder="Address" />
                </div>

                <div className="form-group col-md-12">
                    <label>Address 2</label>
                    <input type="text" className="form-control" placeholder="Address 2" />
                </div>

                <div className="form-group col-md-4">
                    <label>Phone Number</label>
                    <input type="text" className="form-control" placeholder="Phone Number" />
                </div>

                <div className="form-group col-md-4">
                    <label>Country</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option value="VN">Viet Nam</option>
                        <option value="US">United State</option>
                        <option value="UK">United Kingdom</option>
                    </select>
                </div>

                <div className="form-group col-md-4">
                    <label>Balance</label>
                    <input type="text" className="form-control" placeholder="Balance" />
                </div>
            </div>

            <div className="text-right">
                <button type="button" className="btn btn-success mr-2">Accept</button>
                <button type="button" className="btn btn-danger">Cancel</button>
            </div>
            

        </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
        
    );
}

export default AddEditCustomer;