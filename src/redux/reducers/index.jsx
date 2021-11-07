
import {combineReducers} from 'redux';
import PostReducer from './PostReducer';
import UserReducer from './UserReducer';
import MenuReducer from './MenuReducer';
import CustomerReducer from './CustomerReducer';
import GeneralReducer from './GeneralReducer'

const rootReducer = combineReducers({
    posts : PostReducer,
    users : UserReducer,
    menus : MenuReducer,
    customers : CustomerReducer,
    general:GeneralReducer
})

export default rootReducer;