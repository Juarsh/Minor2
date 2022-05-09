import React, { createContext, useReducer } from 'react';

const initialState = {
    id: '',
    email: '',
    name: '',
    phoneNumber: '',
    refreshToken: '',
    accessToken: ''
}

const authReducer = (state, action) => {
    switch(action.type) {
        case 'SET_USER':
            localStorage.setItem("id", action.payload.id);
            localStorage.setItem("email", action.payload.email);
            localStorage.setItem("name", action.payload.name);
            localStorage.setItem("phoneNumber", action.payload.phoneNumber);
            localStorage.setItem("accessToken", action.payload.accessToken);
            localStorage.setItem("refreshToken", action.payload.refreshToken);
            return {
                ...state,
                id: action.payload.id,
                email: action.payload.email,
                name: action.payload.name,
                phoneNumber: action.payload.phoneNumber,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken
            }
        default:
            return state;
    }
}

const Context = createContext({
    id: '',
    email: '',
    name: '',
    phoneNumber: '',
    accessToken: '',
    refreshToken: '',
    setUser: (data) =>{}
});

const Provider = (props) => {
    
    const [state, dispatch] = useReducer(authReducer, initialState);

    const setUser = (data) => {
        console.log(data);
        dispatch({
            type: 'SET_USER',
            payload: data
        });
    }

    return (
        <Context.Provider
            value = {{ id: state.id, email: state.email, name: state.name, phoneNumber: state.phoneNumber, accessToken: state.accessToken, refreshToken: state.refreshToken, setUser }}
            {...props}
        />
    );
}

export { Context, Provider};