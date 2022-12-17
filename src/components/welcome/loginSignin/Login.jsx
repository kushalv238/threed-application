import Carousel from "react-material-ui-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = (props) => {
    const[passVisible, setPassVisible] = useState(false);
    const togglePass = () => {
        setPassVisible(!passVisible);
    }

    return (
        <Carousel
            autoPlay={false}
        >
            <div className="inputs">
                <button
                    className="btn"
                    onClick={() => props.onPageChange("home")}
                > go back </button>
                <div className="center info">
                    <div className="center input-box">
                        <FontAwesomeIcon icon={faUser} color="white" />
                        <input
                            autoComplete="on"                        
                            autoFocus = {true}
                            className="input" 
                            placeholder="Username"
                        />
                    </div>
                </div>
            </div>
            <div className="inputs">
                <button
                    className="btn"
                    onClick={() => props.onPageChange("home")}
                > go back </button>
                <div className="center info">
                    <div className="center input-box">
                        <FontAwesomeIcon icon={faKey} color="white" />
                        <input
                            autoComplete="off"
                            id="myInput"
                            type={passVisible ? "text" : "password"}
                            className="input"
                            placeholder="Password"
                        />
                        <span
                            id='eye'
                            onClick={() => togglePass()}
                        >
                            <FontAwesomeIcon
                                icon={passVisible ? faEyeSlash : faEye} 
                                color="white"
                                title={passVisible ? "Hide Password" : "View Password"}
                            />
                        </span>
                    </div>
                </div>
            </div>
            <div className="inputs">
                <button
                    className="btn"
                    onClick={() => props.onPageChange("home")}
                    > go back</button>
                <div className="center info">
                    <Link to="/application">
                        <button className="btn">Submit</button>
                    </Link>
                </div>
            </div>
        </Carousel>
    );
}

export default Login;