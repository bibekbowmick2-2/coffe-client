import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';


export const ContextApi = createContext();

export const ApiProvider = ({ children }) => {
  const [CoffeeCollection, setCoffee] = useState([]);

  useEffect(()=>{
   fetch('http://localhost:5000/coffee')
   .then(res => res.json()) 
   .then(data => setCoffee(data))
  },[CoffeeCollection])

  return (
    <ContextApi.Provider value={ {CoffeeCollection,setCoffee} }>
      {children}
    </ContextApi.Provider>
  );
};

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
