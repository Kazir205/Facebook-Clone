import React, {createContext, useContext, useReducer} from 'react';

export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
        {console.log('rached stateprovider')}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);