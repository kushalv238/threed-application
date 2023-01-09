import Carousel from "react-material-ui-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faEye, faEyeSlash, faIdCard, faAt, faBirthdayCake, faSuitcase, faCheck, faX, faArrowLeft, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState, useRef } from "react";
import PhoneInput from "react-phone-number-input";

const SignUp = (props) => {
    const[passVisible, setPassVisible] = useState(false);
    const[firstname, setFirstName] = useState('');
    const[lastname, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[phoneNo, setPhoneNo] = useState('');
    const[dob, setDob] = useState('');
    const[username, setUsername] = useState('');
    const[profession, setProfession] = useState('');
    const[password, setPassword] = useState('');
    const[gender, setGender] = useState('');
    const[rememberMe, setRememberMe] = useState(false);
    const[TandCChecked, setTandCChecked] = useState(false);
    
    const[carouselId, setCarouselId] = useState(0);
    
    const[user, setUser] = useState ({});
    
    const didMount =  useRef(0);
    useEffect(() => {
        if(didMount.current >= 2) {
            props.userUpdate(user, rememberMe);
        }
        
        else {
            didMount.current ++;
        }
        // eslint-disable-next-line
    }, [user, props]);

    function focus(focusId) {
        const input = document.getElementById(focusId);
        const end = input.value.length;

        input.setSelectionRange(end, end);
        input.focus();
    }
    function containsUpper(str) {
        return /[A-Z]/.test(str);
    }
    function containsLower(str) {
        return /[a-z]/.test(str);
    }
    function containsNumber(str) {
        return /[0-9]/.test(str);
    }
    function containsSymbol(str) {
        return /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(str);
    }
    function containsMin8Char(str) {
        return str.length >= 8;
    }
    function contains13Char(str) {
        return str.length === 13;
    }
    function verifyEmail(str) {
        const res = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return res.test(String(str).toLowerCase());
    }

    function loginuser() {
        if(firstname === '') {
            alert("Enter firstname");
            
            setCarouselId(0);

            window.setTimeout(() => {
                focus('firstNameInput');
            }, 0);

            return false;
        }
        if(username === '') {
            alert("Enter valid username");
            
            setCarouselId(2);

            window.setTimeout(() => {
                focus('usernameInput');
            }, 0); 

            return false;
        }
        if(email === '' || !verifyEmail(email)) {
            alert("Invalid Email ID");
            
            setCarouselId(3);

            window.setTimeout(() => {
                document.getElementById('emailIdInput').focus();
            }, 0); 

            return false;
        }
        if(phoneNo === '' || (phoneNo[0] === "+" && phoneNo[1] === "9" && phoneNo[2] === "1" && !contains13Char(phoneNo))) {
            alert("Incorrect phone no pattern");
            
            setCarouselId(4);

            window.setTimeout(() => {   
                focus('phoneNoInput');
            }, 0); 

            return false;
        }
        if(
            !containsUpper(password) ||
            !containsLower(password) ||
            !containsNumber(password) ||
            !containsSymbol(password) ||
            !containsMin8Char(password)
        ) {
            setCarouselId(7);

            window.setTimeout(() => {
                focus('passInput');
            }, 0);

            return false
        }
        if(!TandCChecked) {
            alert("Check T & C to continue.");
            return false;
        }

        return true;
    }

    const togglePass = () => {
        setPassVisible(!passVisible);
        window.setTimeout(function () {
            focus('passInput');
        }, 0);
    }

    function handleChange(carouselId) {
        setCarouselId(carouselId);
        if(carouselId === 0) {
            window.setTimeout(() => {
                focus('firstNameInput');
            }, 0);
        }
        else if(carouselId === 1) {
            window.setTimeout(() => {
                focus('professionInput');
            }, 0); 
        }
        else if(carouselId === 2) {
            window.setTimeout(() => {
                focus('usernameInput');
            }, 0); 
        }
        else if(carouselId === 3) {
            window.setTimeout(() => {
                document.getElementById('emailIdInput').focus();
            }, 0); 
        }
        else if(carouselId === 4) {
            window.setTimeout(() => {
                focus('phoneNoInput');
            }, 0); 
        }
        else if(carouselId === 7) {
            window.setTimeout(() => {
                focus('passInput');
            }, 0); 
        }
    }

    return (
        <Carousel
            autoPlay={false}
            onChange={handleChange}
            index={carouselId}
        >
            <div className="inputs">
                <button
                    className="btn"
                    onClick={() => props.onPageChange("home")}
                > <FontAwesomeIcon icon={faArrowLeft} /> </button>
                <div className="center info">
                    <div className="center input-box top">
                        <FontAwesomeIcon icon={faIdCard} color="white" />
                        <input
                            autoComplete="on"
                            autoFocus={true}
                            className="input"
                            id="firstNameInput"
                            placeholder="First Name"
                            value={firstname}
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                    </div>
                    <div className="center input-box bottom">
                        <FontAwesomeIcon icon={faIdCard} color="white" />
                        <input
                            autoComplete="on"
                            id="lastNameInput"
                            className="input" 
                            placeholder="Last Name"
                            value={lastname}
                            onChange={(event) => setLastName(event.target.value)}
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
                        <FontAwesomeIcon icon={faSuitcase} color="white" />
                        <input
                            autoComplete="on"                        
                            id="professionInput"
                            className="input" 
                            placeholder="Profession"
                            value={profession}
                            onChange={(event) => setProfession(event.target.value)}
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
                        <FontAwesomeIcon icon={faUser} color="white" />
                        <input
                            autoComplete="on"                        
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
                        <FontAwesomeIcon icon={faAt} color="white" />
                        <input
                            autoComplete="on"                 
                            id="emailIdInput"
                            className="input" 
                            placeholder="Emai ID"
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
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
                        <PhoneInput
                            placeholder="Enter phone number"
                            value={phoneNo}
                            id="phoneNoInput"
                            className="input"
                            type="tel"
                            name="phone"
                            onChange={setPhoneNo}
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
                        <FontAwesomeIcon icon={faBirthdayCake} color="white" />
                        <input
                            autoComplete="on"                        
                            id="dobInput"
                            className="input" 
                            type="date"
                            placeholder="Date of birth"
                            value={dob}
                            onChange={(event) => setDob(event.target.value)}
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
                        <FontAwesomeIcon icon={faUser} color="white" />
                        <form>
                            <input
                                className="input"
                                type="radio"
                                id="male"
                                checked={gender === 'M'}
                                value={gender}
                                onChange={() => setGender('M')}
                                />
                                <label htmlFor="male">
                                    Male
                                </label>
                            <input
                                className="input"
                                type="radio"
                                id="female"
                                checked={gender === 'F'}
                                value={gender}
                                onChange={() => setGender('F')}
                                />
                                <label htmlFor="female">
                                    Female
                                </label>
                            <input
                                className="input"
                                type="radio"
                                id="others"
                                checked={gender === 'O'}
                                value={gender}
                                onChange={() => setGender('O')}
                                />
                                <label htmlFor="others">
                                    Other
                                </label>
                        </form>
                    </div>
                </div>
            </div>
            <div className="inputs">
                <button
                    className="btn"
                    onClick={() => props.onPageChange("home")}
                > <FontAwesomeIcon icon={faArrowLeft} /> </button>
                <div className="center info">
                    <div className="center input-box top">
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
                    <div className="center input-box bottom">
                        <div className="passChecker">
                            <div className="checkingElements">
                                <p className= {!containsLower(password) ? 'incorrect-input' : ''}>
                                    <FontAwesomeIcon icon = {containsLower(password) ? faCheck : faX} /> Lower Case
                                </p>
                            </div>
                            <div className="checkingElements">
                                <p className= {!containsUpper(password) ? 'incorrect-input' : ''}>
                                    <FontAwesomeIcon icon = {containsUpper(password) ? faCheck : faX} /> Upper Case
                                </p>
                            </div>
                            <div className="checkingElements">
                                <p className= {!containsNumber(password) ? 'incorrect-input' : ''}>
                                    <FontAwesomeIcon icon = {containsNumber(password) ? faCheck : faX} /> Numbers
                                </p>
                            </div>
                            <div className="checkingElements">
                                <p className= {!containsSymbol(password) ? 'incorrect-input' : ''}>
                                    <FontAwesomeIcon icon = {containsSymbol(password) ? faCheck : faX} /> Symbols
                                </p>
                            </div>
                            <div className="checkingElements">
                                <p className= {!containsMin8Char(password) ? 'incorrect-input' : ''}>
                                    <FontAwesomeIcon icon = {containsMin8Char(password) ? faCheck : faX} /> Min 8 char.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inputs">
                <button
                    className="btn"
                    onClick={() => props.onPageChange("home")}
                    > <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <div className="center info submit">
                <div className="TandC">
                    <a href="/tandc" target="_blank">
                        <FontAwesomeIcon className="infoCircle" icon={faInfoCircle} color={`${!TandCChecked && 'rgb(252, 107, 107)'}`} />
                    </a>
                    <div className="TandC-checkbox">
                            <input 
                            type="checkbox"
                            id="tAndCCheckbox"
                            checked={TandCChecked}
                            onChange={() => setTandCChecked(oldValue => !oldValue)}
                            />  
                            <label htmlFor="tAndCCheckbox">
                                <a href="/tandc" className="infoCircle" target="_blank">
                                    Accept T & C
                                </a>
                            </label>
                    </div>
                </div>
                    <button
                        onClick={()=> {
                            if(loginuser()) {
                                setUser (
                                    {
                                        "firstName": firstname,
                                        "lastName": lastname,
                                        "emailId": email,
                                        "phoneNo": phoneNo,
                                        "dob": dob,
                                        "username": username,
                                        "profession": profession,
                                        "gender": gender
                                    }
                                )
                            }
                        }}
                        className="btn-dark btn"
                    >Sign Up
                    </button>
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
                </div>
            </div>
        </Carousel>
    );
}

export default SignUp;