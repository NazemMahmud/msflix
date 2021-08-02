import './App.css';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Root from './redux/Root';

import Home from "./components/Home";
import Admin from "./components/admin/Admin";
// import axios from "axios";
// axios.defaults.baseURL = "http://127.0.0.1:8000";

function App() {
  return (
      <div className="App">
        <Root> {/* replace BrowserRouter with Root */}
           {/*<BrowserRouter>*/}
          <Switch>
            <Route path="/admin" component={ Admin } />
            {/*<Route path="/login" component={Login} />*/}
            {/* {requireAuth(Dashboard)} */}
            {/*<Route path="/dashboard" component={() => <RequireAuth component={Dashboard} />} />*/}
            <Route exact path="/" component={Home} />
          </Switch>
        </Root>
         {/*</BrowserRouter>*/}
        {/*<ToastContainer hideProgressBar={true} newestOnTop={true} />*/}
      </div>
  );
}

export default App;
