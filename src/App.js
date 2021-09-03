import Authprovider from "./auth/AuthProvider";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <div>
        <Authprovider>
        <AppRouter />
        </Authprovider>
       
    </div>
  );
}

export default App;
