import './Header.scss';
import logo from '../../images/logo.webp';
import { useState, useRef, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

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
        <div className="burger" ref={burgerRef} onClick={toggleMenu}>
          <svg
            width="50px"
            height="50px"
            viewBox="-2.4 -2.4 28.80 28.80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#fff"
            transform="rotate(0)"
          >
            <g
              id="SVGRepo_bgCarrier"
              stroke-width="0"
              transform="translate(0,0), scale(1)"
            >
              <path
                transform="translate(-2.4, -2.4), scale(0.8999999999999999)"
                d="M16,27.00095819061001C19.31427461518176,26.60935887411211,22.405790394539288,25.375908714524908,24.546400224453663,22.8155267497404C26.756073744900633,20.17253775158158,27.852553858908266,16.81622848414733,27.366318884612078,13.405711886749767C26.820627843008698,9.5781625478044,25.375180780123184,5.439267607631481,21.844470350440226,3.863832265678255C18.382403983065533,2.3190265332411495,14.804496644796313,4.795151528629742,11.297806411205425,6.235794402042799C7.319125552861806,7.870343746964032,2.2227806708878637,8.475684076814733,0.7667779430625359,12.523116471567924C-0.7998080886498931,16.877951069571097,1.12597194658791,21.998118908530195,4.48060930255396,25.18640753735273C7.444988855752129,28.00379034749973,11.93860717324588,27.480833529756936,16,27.00095819061001"
                fill="#fff"
                stroke-width="0"
              />
            </g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
              <path
                d="M4 18H10"
                stroke="#000"
                stroke-width="1.08"
                stroke-linecap="round"
              />
              <path
                d="M4 12L16 12"
                stroke="#000"
                stroke-width="1.08"
                stroke-linecap="round"
              />
              <path
                d="M4 6L20 6"
                stroke="#000"
                stroke-width="1.08"
                stroke-linecap="round"
              />
            </g>
          </svg>
        </div>
        <div className={`menu-mob ${isMenuOpen ? 'active' : ''}`} ref={menuRef}>
          <span className="menu-option" onClick={() => setIsMenuOpen(false)}>
            <a href="#about">About me</a>
          </span>
          <span className="menu-option" onClick={() => setIsMenuOpen(false)}>
            <a href="#services">Services</a>
          </span>
          <span className="menu-option" onClick={() => setIsMenuOpen(false)}>
            <a href="#contacts">Contact me</a>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
