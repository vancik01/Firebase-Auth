import { Container } from 'react-bootstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { AuthProvider } from '../contexts/AuthContext';
import SignUp from './SignUp';
import firebase from '../firebase-auth'
import Switch from 'react-bootstrap/esm/Switch';
import Dashboard from './Dashboard';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';


function App() {
  return (
    
      <Container className="d-flex align-items-center justify-content-center" style={{minHeight:"100vh",}}>
      
        <div className="w-100" style={{maxWidth:"400px"}}>
          <Router>
            <AuthProvider>
              <Switch>
                <Route path="/signup" component={SignUp}></Route>
                <PrivateRoute exact path="/" component={Dashboard}></PrivateRoute>
                <Route path="/login" component={Login}></Route>
                <Route path="/forgot-password" component={ForgotPassword}></Route>
              </Switch>              
            </AuthProvider>
          </Router>
        </div>
        
      </Container>
    
  );
}

export default App;
