import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import MuiPhoneNumber from "material-ui-phone-number";
import { 
    Grid, 
    Paper, 
    Avatar , 
    TextField, 
    Checkbox, 
    FormControlLabel, 
    Button, 
    Typography, 
    FormLabel, 
    RadioGroup, 
    Radio,
    FormControl, FormHelperText} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import {
    ENTER_USER_NAME,
    SIGN_UP_TITLE,
    PLEASE_FILL_SIGN_UP,
    LABEL_SIGN_UP_EMAIL,
    LABEL_SIGN_UP_USER_NAME,
    LABEL_SIGN_UP_PASS_WORD,
    LABEL_SIGN_UP_CONFIRM_PASS_WORD,
    LABEL_ACCEPT_TERMS_CONDITION,
    MSG_PASSWORD_LENGTH, MSG_REQUIRED, MSG_CONFIRM_PASSWORD, MSG_TOO_SHORT, MSG_INVALID_EMAIL, MSG_LOADING
    } from '../redux/constant/MessageConstant'
import { useState, useEffect } from 'react';
import {PostUsers, loadUsers} from '../redux/actions/UserAction'
import {useSelector, useDispatch} from 'react-redux'
import { useHistory} from 'react-router-dom';

function SignUp(props) {
    const data = useSelector(state => state.users.data)
    const history = useHistory();
  
    const paperStyle = {
        width : 300,
        margin : '20px auto',
        padding: '20px 30px'
    }
    
    const headerStyle = {
        marginTop : 0
    }

    const avatarStyle = {
        background : 'green'
    }

    const marginElement = {
        marginTop : 5
    }

    const radioStyle = {
        display: 'inline'
    }

    const initialvalue = {
        username : '',
        email : '',
        gender : '',
        phonenumber : '',
        password : '',
        confirmpassword: '',
        accepttermsandcondition : false
    }
    const dispatch = useDispatch();
    
    const handleSubmit = (values, props) => {
        dispatch(PostUsers(values))

        setTimeout(() => {
            props.setSubmitting(false);
            props.resetForm(false)
            resetPhoneNumber()
            history.push('/Sign-In')
        }, 2000);

      
        
    }

    useEffect(() =>{
        dispatch(loadUsers());
    },[dispatch]);

    function resetPhoneNumber(){
        document.getElementById("123").value = "84+";  
        document.getElementById("TermsCondition").checked = false;  
    }

    // function handleCheck(e){
    //     setChecked(!e.target.checked);
    // }

   


    const validationSchema = Yup.object().shape({
        username:Yup.string().min(3,MSG_TOO_SHORT).required(MSG_REQUIRED),
        email:Yup.string().email(MSG_INVALID_EMAIL).required(MSG_REQUIRED),
        password:Yup.string().min(3,MSG_PASSWORD_LENGTH).required(MSG_REQUIRED),
        confirmpassword:Yup.string().oneOf([Yup.ref('password')],MSG_CONFIRM_PASSWORD).required(MSG_REQUIRED),
        gender:Yup.string().oneOf(["male","female"]).required(MSG_REQUIRED),
        // accepttermsandcondition:Yup.string().oneOf(["true"]).required(MSG_REQUIRED)
    });
 
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><AddIcon /></Avatar>
                    <h2>{SIGN_UP_TITLE}</h2>
                    <Typography variant="caption" style={headerStyle}>{PLEASE_FILL_SIGN_UP}</Typography>
                </Grid>
                <Formik
                    initialValues={initialvalue}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {(props) => (
                        <Form component ="div">
                            <Field as={TextField}
                                name="username"
                                label={LABEL_SIGN_UP_USER_NAME}
                                style={marginElement}
                                placeholder={ENTER_USER_NAME}
                                fullWidth
                                helperText={<ErrorMessage name="username" component="span" style={{ color: "red" }} />}
                            />
                            
                            <Field as={TextField}
                                name="email"
                                label={LABEL_SIGN_UP_EMAIL}
                                style={marginElement}
                                placeholder={ENTER_USER_NAME}
                                fullWidth 
                                helperText={<ErrorMessage name="email" component="span" style={{ color: "red" }} />}
                            />

                            <FormControl component="fieldset" style={marginElement}>
                                <FormLabel component="legend" >Gender</FormLabel>
                                <Field as={RadioGroup}
                                    aria-label="gender"
                                    name="gender"
                                    style={radioStyle} >
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                </Field>
                            </FormControl>
                            <FormHelperText><ErrorMessage name="gender" component="span" style={{ color: "red" }} /></FormHelperText>

                            <Field component={MuiPhoneNumber}
                                name="phonenumber"
                                id="123"
                                label="Phone Number"
                                data-cy="user-phone"
                                defaultCountry={"vn"}
                                fullWidth
                                onChange={e => props.setFieldValue("phonenumber", e)}
                            />

                            <Field as={TextField}
                                name="password"
                                type='password'
                                label={LABEL_SIGN_UP_PASS_WORD}
                                style={marginElement}
                                placeholder={ENTER_USER_NAME}
                                fullWidth
                                helperText={<ErrorMessage name="password" component="span" style={{ color: "red" }} />}
                            />
                            
                            <Field as={TextField}
                                name='confirmpassword'
                                type='password'
                                label={LABEL_SIGN_UP_CONFIRM_PASS_WORD}
                                style={marginElement}
                                placeholder={ENTER_USER_NAME}
                                fullWidth 
                                helperText={<ErrorMessage name="confirmpassword" component="span" style={{ color: "red" }} />}
                            />

                            <FormControlLabel
                                control={
                                    <Field as={Checkbox}
                                        // checked={checked}
                                        // onChange={handleCheck}
                                        id="TermsCondition"
                                        name="accepttermsandcondition"
                                        color="primary"
                                    />
                                }
                                label={LABEL_ACCEPT_TERMS_CONDITION}
                            />
                            <FormHelperText><ErrorMessage name="accepttermsandcondition" component="span" style={{ color: "red" }} /></FormHelperText>

                            <Button type="submit"
                                variant="contained"
                                color="secondary"
                                disabled={props.isSubmitting}
                            >
                                {props.isSubmitting ? MSG_LOADING : SIGN_UP_TITLE}
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    );
}

export default SignUp;