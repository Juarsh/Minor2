import React, { createContext, useReducer } from 'react';

const initialState = {
    id: '',
    email: '',
    name: '',
    phoneNumber: ''
}

const authReducer = (state, action) => {
    switch(action.type) {
        case 'SET_USER':
            localStorage.setItem("id", action.payload.id);
            localStorage.setItem("email", action.payload.email);
            localStorage.setItem("name", action.payload.name);
            localStorage.setItem("phoneNumber", action.payload.phoneNumber);
            return {
                ...state,
                id: action.payload.id,
                email: action.payload.email,
                name: action.payload.name,
                phoneNumber: action.payload.phoneNumber
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
    setUser: (data) =>{}
});

const Provider = (props) => {
    
    const [state, dispatch] = useReducer(authReducer, initialState);

    const setUser = (data) => {
        dispatch({
            type: 'SET_USER',
            payload: data
        });
    }

    return (
        <Context.Provider
            value = {{ id: state.id, email: state.email, name: state.name, phoneNumber: state.phoneNumber, setUser }}
            {...props}
        />
    );
}

export { Context, Provider};