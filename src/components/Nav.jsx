import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
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
        </li>
        <li>
          <Link to="/link">
            <i className="fas fa-chevron-down sm" />
            <span>Collections</span>
          </Link>
        </li>
        <li>
          <Link to="/link">
            <i className="fas fa-images" />
            <span>Gallery</span>
          </Link>
        </li>
        <li className="cta">
          <Link to="/link">
            <span>Commissions</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
