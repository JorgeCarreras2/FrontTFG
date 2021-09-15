import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from '../pages/LoginPage/LoginPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import UserPage from '../pages/UserPage/UserPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import {RoutesConts} from './RoutesConts';

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                {/*Tener en cuenta que vamos de mas especifica a mas general*/}
                <PrivateRoute exact path={RoutesConts.userHome()} component={UserPage} />
                <PublicRoute exact path={RoutesConts.login} component={LoginPage} />
                <PublicRoute exact path={RoutesConts.register} component={RegisterPage} />
                <Route exact path={RoutesConts.home} component={LoginPage} />
                <Route path="*" component={NotFoundPage} />
            </Switch>
        </Router>
    );
}
