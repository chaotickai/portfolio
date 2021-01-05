import React from 'react'

const Child = (props) => {
    return (
        <>
            <input 
               type="text" 
               placeholder="Please Enter Your Name"
               onChange={props.handleChange}
            />
        </>
    )
}

export default Child