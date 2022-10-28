import { Link } from 'react-router-dom';
import Alert from './Alert';

export default function Nav() {
  return (
    <nav>
      <Alert
        text="Gratis Schnupperstunde - jetzt buchen! *"
        icon="gift"
        onClick={() => {
          console.log('clicked');
        }}
      />
      <div className="nav-content">
        <Link to="/">
          <h1 className="logo">Angelika Paints</h1>
        </Link>
        <ul>
          <li>
            <Link to="/link">
              <span>Studio</span>
            </Link>
          </li>
          <li>
            <Link to="/link">
              <i className="fas fa-chevron-down sm" />
              <span>Workshops</span>
            </Link>
            <ul className="dropdown">
              <li>
                <Link to="/link">Lorem ipsum dolor sit amet</Link>
              </li>
              <li>
                <Link to="/link">Quia natus</Link>
              </li>
              <li>
                <Link to="/link">Consectetur adipisicing elit</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/link">
              <i className="fas fa-chevron-down sm" />
              <span>Collections</span>
            </Link>
            <ul className="dropdown">
              <li>
                <Link to="/link">Quia natus</Link>
              </li>
              <li>
                <Link to="/link">Consectetur adipisicing elit</Link>
              </li>
              <li>
                <Link to="/link">Lorem ipsum dolor sit amet</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/link">
              <i className="fas fa-images" />
              <span>Gallery</span>
            </Link>
          </li>
          <li className="cta">
            <Link to="/link">
              <span>Prints &amp; Commissions</span>
            </Link>
          </li>
          <li>
            <a className="link">
              <i className="fas fa-chevron-down sm" />
              <span>EN</span>
              <i className="fas fa-globe-americas"></i>
            </a>
            <ul className="dropdown dropdown-align-right">
              <li>
                <a className="link">DE</a>
              </li>
              <li>
                <a className="link">EN</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
