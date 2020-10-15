import * as actionTypes from './../actionTypes';

const initialState = {
    user: {
        displayName: "",
        userName: "",
        photoURL: "",
        verified: null,

    },
    err: null
}

const authReducer = (state=initialState,action) => {
    switch(action.type){
        case actionTypes.LOGINFAILED:
            return{
                ...state,
                err: action.payload.message
            }
        case actionTypes.LOGINSUCCESS:
            return{
                ...state,
                user: {
                    displayName: action.payload.user.profile.screen_name,
                    userName: action.payload.user.profile.name,
                    photoURL: action.payload.user.profile.profile_image_url,
                    verified: action.payload.user.profile.verified
                }
            }
        default:
            return state
    }
}

export default authReducer;