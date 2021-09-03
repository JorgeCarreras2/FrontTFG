import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from '../pages/HomePage/HomePage'
import LoginPage from '../pages/LoginPage/LoginPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import UserPage from '../pages/UserPage/UserPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export default function AppRouter() {
    return (
        <Router>
                    <Switch>
                        {/*Tener en cuenta que vamos de mas especifica a mas general*/}
                        <PrivateRoute path="/user/:username" component={UserPage} />

                        <PublicRoute exact path="/login" component={LoginPage} />
                        <PublicRoute exact path="/register" component={RegisterPage} />

                        <Route exact path="/" component={LoginPage} />

                        <Route path="*" component={NotFoundPage} />
                    </Switch>
        </Router>
    );
}
