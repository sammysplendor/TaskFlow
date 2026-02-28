import "./auth.css";
import { User, Mail, Lock, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { userData } from "../../data/mockData";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const errorMessage = {};

    if (fullName.length < 2) {
      errorMessage.fullName = "Name must be atleast 2 letters";
    } else if (fullName.split(" ").length < 2) {
      errorMessage.fullName = "Enter full name (First and Last name)";
    } else {
      errorMessage.fullName = "";
    }

    if (!email.includes("@")) {
      errorMessage.email = "Please enter a valid email";
    } else {
      errorMessage.email = "";
    }

    if (
      password.length < 8 ||
      !/\d/.test(password) ||
      !/[!@#$%^&*(){}?<>|]/.test(password)
    ) {
      errorMessage.password =
        "Must be at least 8 characters, including a number and a symbol.";
    }

    if (confirmPassword !== password) {
      errorMessage.confirmPassword = "Password does not match";
    } else {
      errorMessage.confirmPassword = "";
    }

    if (Object.keys(errorMessage).length > 0) {
      setErrors(errorMessage);
      return;
    }

    userData.name = fullName;
    userData.email = email;
    userData.password = password;

    localStorage.setItem("user", JSON.stringify(userData));

    navigate("/Login");
  };

  return (
    <div className="pageView">
      <a className="returnLink" href="/">
        <span className="returnIcon">
          <ArrowLeft />
        </span>
      </a>

      <div className="formContainer">
        <div className="formHeading">
          <h3>Sign Up</h3>
        </div>

        <form className="formFields" method="POST" onSubmit={handleSubmit}>
          <div className="field">
            <div>
              <label htmlFor="name">Full name</label>
            </div>
            <div className="formInput">
              <User size={20} className="icon" />
              <input
                value={fullName}
                type="text"
                placeholder="John Doe"
                required
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <span className="errMsg">{errors.fullName}</span>
          </div>

          <div className="field">
            <div>
              <label htmlFor="email">Email address</label>
            </div>
            <div className="formInput">
              <Mail size={20} className="icon" />
              <input
                value={email}
                type="email"
                placeholder="johndoe@example.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <span className="errMsg">{errors.email}</span>
          </div>

          <div className="field">
            <div>
              <label htmlFor="password">Password</label>
            </div>
            <div className="formInput">
              <Lock size={20} className="icon" />
              <input
                className="passwordInput"
                value={password}
                type="password"
                placeholder="********"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <span className="errMsg">{errors.password}</span>
          </div>

          <div className="field">
            <div>
              <label htmlFor="confirm password">Confirm Password</label>
            </div>
            <div className="formInput">
              <Lock size={20} className="icon" />
              <input
                className="passwordInput"
                value={confirmPassword}
                type="password"
                placeholder="********"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <span className="errMsg">{errors.confirmPassword}</span>
          </div>

          <button type="submit">Create account</button>
        </form>

        <div className="formFooter">
          <p>
            By signing up you agree with TaskFlow{" "}
            <b>
              <a href="#">Terms of Service </a>
            </b>{" "}
            and
            <b>
              {" "}
              <a href="#">Privacy Policy</a>
            </b>
          </p>
          <p>
            <i>Already have an account?</i>{" "}
            <b>
              <a href="/Login" className="loginLink">
                {" "}
                Log In
              </a>
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
