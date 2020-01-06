import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import React from 'react';
import Login from './login';
import Home from './home';


const PrivateRoute = ({component:Component,...others}) => {
    return (
        <Route component=
        { false ? Component : 
            () => <Redirect to="/login" />
        } { ...others } ></Route>
        
    );
}

const Routes = () =>{
    return(
      <BrowserRouter>
          <Switch>
            <Route exact path="/login" component={() => <Login /> } />
            <Route exact path="/home" component={ () => <Home /> } />
            <PrivateRoute exact path="/test" component={() =>  <h1>authenticated</h1> }/>
            <Route path="*" component={ () => <h1>Page not found</h1> } />
          </Switch>
        </BrowserRouter>
    )
  }

export default Routes;