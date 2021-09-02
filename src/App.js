import "./App.css";
import { AuthProvider } from "./User-Auth/AuthContext";
import SignUp from "./User-Auth/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CodeEditor from "./components/CodeEditor";
import Login from "./User-Auth/Login";
import PrivateRoute from "./User-Auth/PrivateRoute";
import ForgotPassword from "./User-Auth/ForgotPassword";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute path="/" component={CodeEditor} exact/>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
