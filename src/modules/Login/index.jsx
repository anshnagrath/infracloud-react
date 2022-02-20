import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import history from '../../config/history';
import '../../global.css';
import './login.css';
import PropTypes from 'prop-types';
import { loginUserName } from './actions';
import * as Yup from 'yup';
import { addToSession } from '../../helpers/session';
import { Formik } from 'formik';



class Login extends Component {
    constructor(props) {
        super(props);


    }







    render() {
       
        let validationSchema = Yup.object().shape({ name: Yup.string().required('Name is a requried field') });
        let initialValues = {
            name: this.props.name
        }

        return (

            <div className="my-login-page d-flex flex-fill align-items-center justify-content-center  mt-40">

                <div className="card">
                    <div className="card-body">
                        <Formik onSubmit={(e) => this.props.onSubmitForm(e)} initialValues={initialValues} validationSchema={validationSchema} >
                            {props => {
                                const { values, isValid, handleChange, handleBlur, handleSubmit, errors } = props;

                                return (
                                    <form className="my-login-validation" onSubmit={handleSubmit} >
                                        <div className="form-group">
                                            <label htmlFor="name" className="custom-txt" >Enter your name</label>
                                            <input
                                                autoComplete="off"
                                                value={values.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className="form-control" name="name" id="name" />

                                        </div>
                                        <div className="form-group">
                                            <button type="submit" disabled={!isValid} className={`pr-btn mb-0 `}>
                                                Enter
                                            </button>


                                        </div>

                                        <div className="form-group">
                                            {errors ? <div className="input-feedback text-center">{errors.name}</div> : <></>}


                                        </div>

                                    </form>

                                )
                            }
                            }
                        </Formik>

                    </div>
                </div>

            </div>



        );
    }
}

Login.propTypes = {
    onSubmitForm: PropTypes.func

};

function mapStateToprops({login}) {
    return login
}

function mapDispatchToProps(dispatch) {
    return {
        onSubmitForm: (evt) => {

            let inputValue = evt.name;
            let storeObj = { name: inputValue };
            addToSession('name', inputValue);
            dispatch(loginUserName(storeObj));
            history.push('/post')

        }

    };
}
export default connect(
    mapStateToprops,
    mapDispatchToProps,
)(withRouter(Login));