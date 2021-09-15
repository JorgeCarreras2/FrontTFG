import { Redirect, Route } from "react-router-dom";
import UseAuth from "../auth/UseAuth";
import {RoutesConts} from "./RoutesConts";

export default function PublicRoute({ component: Component, ...rest }) {
    const auth = UseAuth();

    return (
        /*  <Route exact={props.exact} path={props.path} component={props.component}> */
        <Route {...rest}>
            {auth.isLogged() ?
                (
                    <Redirect to={RoutesConts.userHome()}/>
                
                ):(
                    <Component />
                )}
        </Route>
    );
}