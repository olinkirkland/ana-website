import { useState } from 'react';
import { Link } from 'react-router-dom';
import { currentLanguage, setAppLanguage, text } from '../locale/locale';
import Alert from './Alert';

export default function Nav() {
  const [language, setLanguage] = useState(currentLanguage);

  return (
    <nav>
      <Alert
        text={text('alert-promotion-schnupperstunde')}
        icon="gift"
        onClick={() => {
          console.log('clicked');
        }}
      />
      <div className="nav-content">
        <Link to="/">
          <h1 className="logo">{text('title')}</h1>
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
              <span>Gallery</span>
            </Link>
          </li>
          <li className="cta">
            <Link to="/link">
              <span>Prints &amp; Commissions</span>
            </Link>
          </li>
          <li className="language-selector">
            <button className="link">
              <i className="fas fa-chevron-down sm" />
              <span className="capitalize">{currentLanguage}</span>
              <i className="fas fa-globe-americas"></i>
            </button>
            <ul className="dropdown dropdown-align-right">
              <li>
                <button
                  className="link"
                  onClick={() => {
                    setAppLanguage('de');
                    window.location.reload();
                  }}
                >
                  DE
                </button>
              </li>
              <li>
                <button
                  className="link"
                  onClick={() => {
                    setAppLanguage('en');
                    window.location.reload();
                  }}
                >
                  EN
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
