import React,{useContext} from 'react'
import CountContext from '../../context/store';
function Child() {
    const context = useContext( CountContext );
    const { increment } = context;
    
    return (
        <div>
           <button onClick={ increment }>Increment</button>
            
        </div>
    )
}
export default Child;

