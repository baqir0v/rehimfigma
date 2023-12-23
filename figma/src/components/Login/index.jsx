import "./index.scss"

const Login = () => {
    return (
        <section id='signup'>
            <div className='signupbox'>
                <div className="signimg">
                    <img src="../../../imgs/dl.beatsnoop 1.png" alt="" />
                </div>
                <div className="signinput">
                    <div className="createanaccount">
                        <h2>Log In to Exclusive</h2>
                        <p>Enter your details below</p>
                        <input type="text" name="" id="" placeholder='E-Mail' />
                        <input type="text" name="" id="" placeholder='Password' />
                        <div className='bottom'>
                            <button className='logbtn'>Log In</button>
                            <p>Forgot Password?</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login