import React from 'react';
import { Grid, Paper, Avatar , TextField, Checkbox, FormControlLabel, Button, Typography} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {SIGN_IN,
    ENTER_USER_NAME,
    ENTER_PASS_WORD,
    REMEMBER_ME,
    FORGOT_PASS_WORD,
    QUESTION_PASS_WORD,
    SIGN_UP
    } from '../redux/constant/MessageConstant'
import SignUp from './SignUp';
import { Link  } from 'react-router-dom';


function SignIn(props) {
    const PaperStyle = {
        padding : 20,
        height:'73vh',
        width :300,
        margin:"20px auto" 
    }

    const avatarStyle = {
        backgroundColor : 'green'
    }

    const marginElement = {
        margin : '5px 0'
    }

    return (
        <Grid>
            <Paper style = {PaperStyle}>
                <Grid align = 'center'>
                    <Avatar style = {avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>{SIGN_IN}</h2>
                </Grid>
                <TextField label = 'User Name' placeholder = {ENTER_USER_NAME} fullWidth required/>
                <TextField label = 'Pass Word' style = {marginElement} placeholder = {ENTER_PASS_WORD} type = 'password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label={REMEMBER_ME}
                />
                <Link to ='/AppBar' style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="secondary" fullWidth style={marginElement}> {SIGN_IN} </Button>
                </Link>
                
                
                <Typography  style = {marginElement}>
                    <Link to="#" >
                        {FORGOT_PASS_WORD}
                    </Link>
                </Typography>
                <Typography  style = {marginElement}> {QUESTION_PASS_WORD}
                    <Link to ='/Sign-Up' fullwidth="true">
                        {SIGN_UP}
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    );
}

export default SignIn;