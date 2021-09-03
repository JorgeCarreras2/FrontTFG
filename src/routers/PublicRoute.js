import { Redirect, Route } from "react-router-dom";
import UseAuth from "../auth/UseAuth";

export default function PublicRoute({ component: Component, ...rest }) {
    const auth = UseAuth();

    return (
        /*  <Route exact={props.exact} path={props.path} component={props.component}> */
        <Route {...rest}>
            {auth.isLogged() ?
                (
                    <Redirect to="/"/>
                
                ):(
                    <Component />
                )}
        </Route>
    );
}