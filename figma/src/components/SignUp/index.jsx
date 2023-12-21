import { Link } from 'react-router-dom'
import "./index.scss"

const SignUp = () => {
    return (
        <section id='signup'>
            <div className='signupbox'>
                <div className="signimg">
                    <img src="../../../imgs/dl.beatsnoop 1.png" alt="" />
                </div>
                <div className="signinput">
                    <div className="createanaccount">
                        <h2>Create an account</h2>
                        <p>Enter</p>
                        <input type="text" name="" id="" placeholder='Name' />
                        <input type="text" name="" id="" placeholder='E-Mail' />
                        <input type="text" name="" id="" placeholder='Password' />
                        <button className='createbtn'>Create Account</button>
                        <button className='google'><img src="../../../imgs/Icon-Google.png" alt="" /> Sign Up with Google</button>
                        <p>Already have <Link to={"/login"}>Log In</Link></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp