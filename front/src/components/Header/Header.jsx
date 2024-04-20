import Logo from '../../assets/argentBankLogo.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../services/apiService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faSignOut } from '@fortawesome/free-solid-svg-icons'

function Header() {
  // recupere les données depuis le state + gestion des actions avec dispatch
  const { token, firstName } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const SignOut = () => {
      try {
          localStorage.removeItem('userToken');
        logout(token, dispatch);
      } catch (err) {
          console.error(err);
      }
    }

    return (
        <header>
            <nav className="main-nav">
                <Link className="main-nav-logo" to='/'>
                    <img
                        className="main-nav-logo-image"
                        src={Logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                {!token ? (
            <Link className="main-nav-item" to='/Sign-in'>
              <FontAwesomeIcon icon={faUserCircle} className="fa fa-user-circle" />
              Sign In
            </Link>
          ) : (
            <div>
              <Link className='main-nav-item' to='/user'>
                <FontAwesomeIcon icon={faUserCircle} className="fa fa-user-circle" />
                {firstName}
              </Link>
              <button className='main-nav-item button' onClick={SignOut}>
                <FontAwesomeIcon icon={faSignOut} className="fa fa-sign-out" />
                Sign Out
              </button>
            </div>
          )}
                </div>
            </nav>
        </header>
    )
}

export default Header