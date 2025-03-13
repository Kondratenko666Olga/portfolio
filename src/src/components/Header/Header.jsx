import './Header.scss';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="" alt="Logo" />
        </div>
        <div className="menu">
          <span className="menu-option">
            <a href="#about">About me</a>
          </span>
          <span className="menu-option">
            s<a href="#services">Services</a>
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
