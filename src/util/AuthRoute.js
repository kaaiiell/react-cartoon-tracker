import React, {useContext} from 'react';
import {Route,Navigate} from 'react-router-dom'
import {AuthContext} from '../context/auth';

function AuthRoute({component: Component,...rest}){
    const context = useContext(AuthContext);

    if(context.user){
        return(
        <Navigate to="/"/>
        );
    }else{
        return(
            <Route
                {...rest}
                render={(props)=>
                    <Component{...props}/>
                }
            />
        )
    }
}


export default AuthRoute
