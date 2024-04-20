import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login} from '../../services/apiService';
import { loginSuccess} from '../../redux/Auth/authSlice';


function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleError = (error) => {
    console.error(error);
  }

  const handleValid = (message) => {
    console.log(message);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch, handleError, handleValid)
      .then((token) => {
        if (isChecked) {
          localStorage.setItem('userToken', token);

        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (token) {
      dispatch(loginSuccess({ body: { token: token } }));
    }
  }, [dispatch]);

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
            }} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={(e) => {
              setPassword(e.target.value);
            }} />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={isChecked}
              onChange={(e) => {setIsChecked(e.target.checked)
              }}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" onClick={(e) => {
            handleSubmit(e)
          }}>Sign In</button>
          {token !== "" ? <Navigate to="/user" /> : ""}
        </form>
      </section>
    </main>
  )
}

export default SignIn