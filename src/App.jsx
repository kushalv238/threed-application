// import { useState } from "react";
import { Route, Routes as Switch } from "react-router-dom";
import { useState, useEffect } from "react";

import WelcomePage from './components/welcome/WelcomePage';

import './stylesheets/app.css';

import { lazy, Suspense } from "react";

const App = () => {
    const ApplicationPage = lazy(() => import("./components/application/ApplicationPage"));
    const[user, setUser] = useState({"username": "kushal"});
    
    const goToApplication = (users) => {
        setUser(users);
        console.log(user);
        
        window.location.pathname = '/application';
    }

    return (
        <Switch>
            <Route
                exact path='/'
                element = {
                    <WelcomePage getUser = {user => goToApplication(user)} />
                }
            />
            <Route
                exact path='/application'
                element = {
                    <Suspense fallback={<h3>Loading...</h3>}>
                        <ApplicationPage user = {user}/>
                    </Suspense>
                }
            />
        </Switch>
    )
};

export default App