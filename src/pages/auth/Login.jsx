import "./auth.css";
import { Mail, Lock, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Please fill in the fields");
      return;
    }

    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = savedUsers.find(
      (user) => user.email === email && user.password === password,
    );

    if (!validUser) {
      setError("Incorrect Email or Password");
      return;
    }

    setError("");

    navigate("/Dashboard");
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
          <h3>Log In</h3>
        </div>

        <form method="GET" className="formFields" onSubmit={handleSubmit}>
          <div className="field">
            <div>
              <label htmlFor="email">Email address</label>
            </div>
            <div className="formInput">
              <Mail size={20} className="icon" />
              <input
                type="text"
                placeholder="johndoe@example.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <div>
              <label htmlFor="password">Password</label>
            </div>
            <div className="formInput">
              <Lock size={20} className="icon" />
              <input
                className="passwordInput"
                type="password"
                placeholder="********"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && <p className="errMsg">{error}</p>}

          <button type="submit">Log In</button>
        </form>

        <div className="formFooter">
          <p>
            <i>Don't have an account?</i>{" "}
            <b>
              <a className="signupLink" href="/signup">
                {" "}
                Sign Up
              </a>
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
