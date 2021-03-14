import React, {useCallback} from 'react'
import {useHistory} from "react-router-dom";
import './NavigationBar.css'

const NavigationBar = () => {
    const history = useHistory();

    const handleOnClickRouteSignUp = useCallback(() => history.push('/signup'), [history]);
    const handleOnClickRouteLogin = useCallback(() => history.push('/login'), [history]);
    const handleOnRouteClickHome = useCallback(() => history.push('/'), [history]);



    return(
        <div className="navigation">
            <button className="navigation login" onClick={handleOnClickRouteLogin}>Login</button>
            <button className="navigation signup" onClick={handleOnClickRouteSignUp}>Signup</button>
            <button className="navigation home" onClick={handleOnRouteClickHome}>Home</button>
        </div>
    )
}
export default NavigationBar