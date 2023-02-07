import logo from './logo.svg'
import './styles.scss';

function Header() {
  return (
    <header className='header'>
        <img src={logo} alt="Logo Fylo" />
        <nav className='navBarHeader'>
            <ul>
                <li>
                    <a href='#features'>Features</a>
                </li>
                <li>
                    <a href='#team'>Team</a>
                </li>
                <li>
                    <a href='#singIn'>Sing In</a>
                </li>
            </ul>
        </nav>
    </header>
  )
};

export default Header;