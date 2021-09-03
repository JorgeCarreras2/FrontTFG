import UseAuth from "../../auth/UseAuth";
import {useHistory, useLocation} from 'react-router-dom';

export default function LoginPage() {
    const history = useHistory();
    const location = useLocation();
    const previusObjectURL = location.state?.from; //Obtengo el objeto de privaterouter, si es null no pasa nada gracias al '?'

    const auth= UseAuth();
    const handleLogin = () => {
        auth.login();
        history.push(previusObjectURL || "/Home");
    }
    
    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>
                Singin
            </button>
        </div>
    )
}
