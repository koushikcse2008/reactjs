import React from 'react';
import noteContext from './UseContext';

const StateContext = ({children}) => {

    const user = {
        "name": "Content Page Name",
        "email": "cpn@gmail.com",
        "address": "Context State Page Data"
    }

    return (
        <noteContext.Provider value={user}>
          {children}
        </noteContext.Provider>
      );
}

export default StateContext;