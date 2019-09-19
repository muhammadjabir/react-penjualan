import React from 'react';
import {Route,Redirect} from 'react-router-dom';

function PrivateRoute({component: Component, ...resProps}){
    const user =null
    return <Route
        {...resProps}
        render = {props=> {
            return user ? <Component {...resProps}/> : <Redirect to={{pathname:'/login'}}/>
        }}
    />
}

export default PrivateRoute