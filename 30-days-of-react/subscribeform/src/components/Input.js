import React, {useState} from 'react';


const Input = ( props ) => {
    const [value,setValue]=useState('')
    const changeHandler = (event) => {
        setValue(event.target.value)
    }
    
    return (
        <div>
            
            <input type={props.type} value={ value} onChange={changeHandler}></input>
        </div>
    )
}


export default Input;
