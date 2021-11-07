import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {loadMenu} from '../redux/actions/MenuAction'

import {LABEL_MENU_TITLE} from '../redux/constant/MessageConstant';


function Menu(props) {
    const data = useSelector(state => state.menus.data);
   
    const dispatch = useDispatch();
    
    useEffect(() =>{
        dispatch(loadMenu());
    },[]);
  
    return (
        <nav id="sidebar">
            <div id="dismiss">
                <i className="fas fa-arrow-left"></i>
            </div>

            <div className="sidebar-header">
                <h3>{LABEL_MENU_TITLE}</h3>
            </div>

            <ul className="list-unstyled components">
                {data.map((item,i) => <li key={i}><a href="#">{item.Desccription}</a></li>)}
            </ul>
        </nav>
    );
}

export default Menu;