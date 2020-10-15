import { auth,provider } from '../../Firebase/Firebase';
import * as actionTypes from '../actionTypes';

const loginFailed = (err) =>{
    return{
        type: actionTypes.LOGINFAILED,
        payload:{
            message: err.message
        }
    }
};

const loginsuccess = (user) =>{
    return{
        type: actionTypes.LOGINSUCCESS,
        payload:{
            user: user.additionalUserInfo
        }
    }
}

export const loginWithTwitter = () =>{
    return dispatch=>{
        auth.signInWithPopup(provider)
        .then(res=>{
            dispatch(loginsuccess(res));
        })
        .catch(err=>{
            dispatch(loginFailed(err));
        })
    }
}