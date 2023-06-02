/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext, useState } from "react";
import "./Login.css"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext"

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navitage = useNavigate()

  const {dispatch} = useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch({type:"LOGIN", payload:user})
        navitage("/")
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div>
      <section>
        <div class="form-box">
          <div class="form-value">
            <form onSubmit={handleLogin}>
              <h2>Login</h2>
              <div class="inputbox">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="email" required onChange={(e) => setEmail(e.target.value)} />
                  <label for="">Email</label>
              </div>
              <div class="inputbox">
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input type="password" required onChange={(e) => setPassword(e.target.value)} />
                  <label for="">Password</label>
              </div>
              <div class="forget">
                <label for=""><input type="checkbox" />Remember Me  </label>

              </div>
              <button>Log in</button>
              {error && (
                <span className="text">Wrong email or password!</span>
              )}
            </form>
          </div>
        </div>
      </section>
     
    </div>
  );
};

export default Login;
