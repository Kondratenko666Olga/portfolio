import './Header.scss';
import logo from '../../images/logo.webp';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img loading="lazy" src={logo} alt="Logo" />
        </div>
        <div className="menu">
          <span className="menu-option">
            <a href="#about">About me</a>
          </span>
          <span className="menu-option">
            <a href="#services">Services</a>
          </span>
          <span className="menu-option">
            <a href="#contacts">Contact me</a>
          </span>
        </div>
        <div className="burger">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="
    M 72 20
    A 40 40 0 1 0 28 78
    M 35 68
    H 65
    M 35 75
    H 65
    M 35 82
    H 65
  "
              stroke="white"
              stroke-width="5"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="menu-mob">
          <span className="menu-option">
            <a href="#about">About me</a>
          </span>
          <span className="menu-option">
            <a href="#services">Services</a>
          </span>
          <span className="menu-option">
            <a href="#contacts">Contact me</a>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
