const SignUp = (props) => {
    return (
        <>
            <h1>Signup page here</h1>
            <button
                className='btn'
                onClick={() => props.onPageChange("home")}
            >
                go back
            </button>
        </>
    )
}

export default SignUp;