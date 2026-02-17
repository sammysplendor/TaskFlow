import './auth.css'
import { User, Mail, Lock } from 'lucide-react'
import { useState } from 'react'

const SignupForm = () => {
    const [ fullName, setFullName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ error, setError ] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if(fullName.length < 2){
            setError("Name must be atleast 2 letters")
        } else if(fullName.split(" ").length < 2){
            setError("Enter full name (First and Last name)")
        } else{
            setError("")
        }

        if(!email.includes('@')){
            setError("Please enter a valid email")
        } else{
            setError("")
        }

        if(
            password.length < 8 ||
            !/\d/.test(password) ||
            !/[!@#$%^&*(){}?<>|]/.test(password)
        ){
            setError("Must be at least 8 characters, including a number and a symbol.")
        }
    }

    return(
        <div className='pageView'>
            <div className="formContainer">
                <div className="formHeading">
                    <h3>Sign Up</h3>
                    <p>Create your TaskFlow account</p>
                </div>

                <form className="formFields" method='POST' onSubmit={handleSubmit}>
                    <div className='field'>
                        <div><label htmlFor="name">Full name</label></div>
                        <div className='formInput'>
                            <User size={20} className='icon' />
                            <input 
                                value={fullName} 
                                type="text" 
                                placeholder='John Doe' 
                                required
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>
                        <span>{error}</span>
                    </div>

                    <div className='field'>
                        <div><label htmlFor="email">Email address</label></div>
                        <div className='formInput'>
                            <Mail size={20} className='icon' />
                            <input 
                                value={email} 
                                type="email" 
                                placeholder='johndoe@example.com' 
                                required 
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <span>{error}</span>
                    </div>

                    <div className='field'>
                        <div><label htmlFor="password">Password</label></div>
                        <div className='formInput'>
                            <Lock size={20} className='icon' />
                            <input 
                                className='passwordInput' 
                                value={password} 
                                type="password"  
                                placeholder='********'
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <span>{error}</span>
                    </div>

                    <div className='field'>
                        <div><label htmlFor="confirm password">Confirm Password</label></div>
                        <div className='formInput'>
                            <Lock size={20} className='icon' />
                            <input 
                                className='passwordInput' 
                                value={confirmPassword} 
                                type="password" 
                                placeholder='********'
                                required
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <span>{error}</span>
                    </div>

                    <button type='submit'>Create account</button>   
                </form>

                <div className="formFooter">
                    <p>
                        By signing up you agree with TaskFlow <b><a href="#">Terms of Service </a></b> and 
                        <b> <a href="#">Privacy Policy</a></b>
                    </p>
                    <p><i>Already have an account?</i> <b><a className='loginLink' href=""> Log In</a></b></p>
                </div>
            </div>
        </div>
    )
}

export default SignupForm