import Carousel from "react-material-ui-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faEye, faEyeSlash, faArrowLeft, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Login = (props) => {
    const[passVisible, setPassVisible] = useState(false);
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[rememberMe, setRememberMe] = useState(false);
    
    const togglePass = () => {
        setPassVisible(!passVisible);
    }

    function handleChange(carouselId) {
        if(carouselId === 0) {
            window.setTimeout(function () {
                document.getElementById('usernameInput').focus();
            }, 0); 
        }
        else if(carouselId === 1) {
            window.setTimeout(function () {
                document.getElementById('passInput').focus();
            }, 0); 
        }
    }

    return (
        <Carousel
            autoPlay={false}
            onChange={handleChange}
            index={0}
        >
            <div className="inputs">
                <button
                    className="btn"
                    onClick={() => props.onPageChange("home")}
                > <FontAwesomeIcon icon={faArrowLeft} /> </button>
                <div className="center info">
                    <div className="center input-box">
                        <FontAwesomeIcon icon={faUser} color="white" />
                        <input
                            autoComplete="on"                        
                            autoFocus = {true}
                            id="usernameInput"
                            className="input" 
                            placeholder="Username"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="inputs">
                <button
                    className="btn"
                    onClick={() => props.onPageChange("home")}
                > <FontAwesomeIcon icon={faArrowLeft} /> </button>
                <div className="center info">
                    <div className="center input-box">
                        <FontAwesomeIcon icon={faKey} color="white" />
                        <input
                            autoComplete="off"
                            id="passInput"
                            type={passVisible ? "text" : "password"}
                            className="input"
                            placeholder="Password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
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
                    > <FontAwesomeIcon icon={faArrowLeft} /> </button>
                <div className="center info submit">
                    <button onClick={()=>props.userUpdate({"username": username, "password": password}, rememberMe)} className="btn-dark btn">Log in</button>
                    <div>
                        <input 
                        type="checkbox"
                        id="rememberUserCheckbox"
                        checked={rememberMe}
                        onChange={() => setRememberMe(oldValue => !oldValue)}
                        />
                        <label htmlFor="rememberUserCheckbox" style={ {color:"var(--clr-quaternary)"} }>
                            Remember me
                        </label>
                    </div>
                    {!props.loginInfoCorrect && <p className="wrongInfo">Incorrect userame or password! Try again.</p>}
                </div>
            </div>
        </Carousel>
    );
}

export default Login;