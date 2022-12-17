// import { useState } from "react";
import { Route, Routes as Switch } from "react-router-dom";

import WelcomePage from './components/welcome/WelcomePage';
import ApplicationPage from './components/application/ApplicationPage';

import './stylesheets/app.css';

const App = () => {
    // const[users, setUsers] = useState(
    //         [
    //             {
    //                 userName: "kushalv238",
    //                 password: "abcd12345",
    //                 userId: 1
    //             }
    //         ]
    // );

    return (
        <Switch>
            <Route exact path='/' element={<WelcomePage />} />
            <Route exact path='/application' element={<ApplicationPage />} />
        </Switch>
    )
};

export default App