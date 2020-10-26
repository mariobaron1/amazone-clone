// setup data layer
// we need this to track the basket

import React, { createContext, useContext, useReducer } from 'react';

// THIS IS DATA LAYER
export const StateContext = createContext();

// BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// THIS IS HOW WE USE IT INSIDE OF A COMPONENT
export const useStateValue = () => useContext(StateContext)
