import Logo from '../../assets/argentBankLogo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

function Header() {
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
                    <Link className="main-nav-item" to='/Sign-in'>
                        <FontAwesomeIcon icon={faUserCircle} className="fa fa-user-circle" />
                        Sign In
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header