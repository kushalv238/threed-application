const LoginSignup = (props) => {
    return (
        <>
            <button 
                className="btn ls-btn"
                onClick={() => props.onPageChange("login")}
            >
                login
            </button>
            <p>
                OR
            </p>
            <button
                className="btn ls-btn"
                onClick={() => props.onPageChange("signup")}
            >
                sign up
            </button>
        </>
    );
}

export default LoginSignup;