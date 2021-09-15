import { Redirect, Route, useLocation } from "react-router-dom";
import UseAuth from "../auth/UseAuth";
import {RoutesConts} from './RoutesConts';
 
export default function PrivateRoute({ component: Component, ...rest }) {
    const auth = UseAuth();
    const location = useLocation();

    return (
        /*  <Route exact={props.exact} path={props.path} component={props.component}> */
        <Route {...rest}>
            {auth.isLogged() ?
                (
                    <Component />
                ):(
                    <Redirect to={{pathname:RoutesConts.userHome(), state:{from:location} }} />
                )}
        </Route>
    );
}
