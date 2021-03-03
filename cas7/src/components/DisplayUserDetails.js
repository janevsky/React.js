// vendor imports
import React from 'react';
// context
import { userDetailsContext } from '../data/contexts/userDetailsContext';

const DisplayUserDetails = (props) => {
    let contextData = React.useContext(userDetailsContext);
    return (
        console.log(contextData),
        <div>
            <h2>This is display data component</h2>
           {/*  <h4>First name: {props.data.fname}</h4>
            <h4>Last name: {props.data.lname}</h4> */}
            <h4>First name: {contextData.fname}</h4>
            <h4>Last name: {contextData.lname}</h4>
        </div>
    );
};

export default DisplayUserDetails;