import Coffee from './Coffee';
import { ContextApi } from '../../ContextApi';
import { useContext } from 'react';


const CoffeeContainer = () => {
    const {CoffeeCollection} = useContext(ContextApi);
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 lg:px-[100px] gap-5">
              { 
              
              CoffeeCollection.map(singlecoffee => <Coffee key={singlecoffee._id} singlecoffee={singlecoffee}></Coffee>) 
              
              }
            </div>
        </>
    );
};

export default CoffeeContainer;