import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../services/apiService';


function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const { pending, token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleError = (error) => {
    console.error(error);
  }

  const handleValid = (message) => {
    console.log(message);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password}, dispatch, handleError, handleValid);
  }

    return (
        <main className="main bg-dark">
        <section className="sign-in-content">
          <FontAwesomeIcon icon={faUserCircle} className='fa fa-user-circle sign-in-icon' />
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" onChange={(e) => {
                setEmail(e.target.value);
              }}/>
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={(e) => {
                setPassword(e.target.value);
              }}/>
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" onClick={() => {
                isChecked ? setIsChecked(false) : setIsChecked(true);
              }}/>
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button" disabled={pending} onClick={(e) => {
              handleSubmit(e)
            }}>Sign In</button>
            {pending && <span>Loading ...</span>}
            {token !== "" ? <Navigate to="/user" /> : ""}
          </form>
        </section>
      </main>
    )
}

export default SignIn