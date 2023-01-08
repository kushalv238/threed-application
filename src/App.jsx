/*
    Location: '/'
*/


import { Link, Route, Routes as Switch } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

import WelcomePage from './components/welcome/WelcomePage';

import './stylesheets/app.css';

import { lazy, Suspense } from "react";
import Theme from "./components/theme/Theme";
import TandC from "./components/terms and condition/TandC";

const App = () => {
    const ApplicationPage = lazy(() => import("./components/application/ApplicationPage"));
    const[user, setUser] = useState();
    
    const goToApplication = (users) => {
        setUser(users);   
    }

    var didMount = useRef(0);
    
    useEffect(() => {
        if(didMount.current === 2) {
            document.getElementById('routing-button').click();
        }
        else {
            didMount.current++;
        }
    }, [user])

    return (
        <>
            <Theme />

            <Switch>
                <Route
                    exact path='/'
                    element = {
                        <>
                            <Link
                                to = {
                                        {
                                            pathname: '/application',
                                            state: {user : {user}}
                                        }
                                    }
                                    className="hidden"
                            >
                                <button id="routing-button" />
                            </Link>
                            <WelcomePage getUser = {user => goToApplication(user)} />
                        </>
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

                <Route
                    exact path = '/tandc'
                    element = {
                        <TandC />
                    }
                />
            </Switch>
        </>
    )
};

export default App