import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './Firebase/firebase.init';


export const ContextApi = createContext(null);

export const ApiProvider = ({ children }) => {
  const [CoffeeCollection, setCoffee] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword( auth, email, password);
  }

  const signInUser = (email,password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email,password)
  }

  useEffect(()=>{
   fetch('https://coffee-store-server-8n1t8cdjy-syeda-fairooz-nawals-projects.vercel.app/coffee')
   .then(res => res.json()) 
   .then(data => setCoffee(data))
  },[CoffeeCollection])

  return (
    <ContextApi.Provider value={ {CoffeeCollection,setCoffee,user,loading,createUser,signInUser} }>
      {children}
    </ContextApi.Provider>
  );
};

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
