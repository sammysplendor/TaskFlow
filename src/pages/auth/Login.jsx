import './auth.css'
import { Mail, Lock } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState("");
    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const savedUser = JSON.parse(localStorage.getItem("user"))

        if(!savedUser || savedUser.email !== email || savedUser.password !== password ) {
            setError("Incorrect Email or Password");
            return;
        }

        setError("");

        navigate("./dashboard")
    }

    return (
        <div className="pageView">
            <div className="formContainer">
                <div className="formHeading">
                    <h3>Log In</h3>
                </div>

                <form method="GET" className="formFields" onClick={handleSubmit}>
                    <div className="field">
                        <div><label htmlFor="email">Email address</label></div>
                        <div className="formInput">
                            <Mail size={20} className='icon'/>
                            <input 
                                type="text"
                                placeholder='johndoe@example.com'
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="field">
                        <div><label htmlFor="password">Password</label></div>
                        <div className="formInput">
                            <Lock size={20} className='icon'/>
                            <input 
                                type="password"
                                placeholder='********'
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    {error && <p>{error}</p>}

                    <button type='submit'>Log In</button>
                </form>

                <div className="formFooter">
                    <p><i>Don't have an account?</i> <b><a className='signupLink' href=""> Sign Up</a></b></p>
                </div>
            </div>
        </div>
    )
}

export default LoginForm