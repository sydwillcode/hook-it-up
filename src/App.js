import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import UserDetail from './components/UserDetail';



const App = () => {
    return ( 
        <Router>
        <>
        <Link to="/" > <button className="btn btn-primary mx-3">Go Home</button></Link>
        <Link to="/users" > <button className="btn btn-primary mx-3">View Users</button></Link>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path= "/users" component={Users} />
            <Route  path= "/users/:id/details" component={UserDetail} />
        </Switch>
        </>
        </Router>
     );
}
 
export default App;