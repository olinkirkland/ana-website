import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <Link to="/">
        <h1 className="logo">Angelika Paints</h1>
      </Link>
      <ul>
        <li>
          <Link to="/link">Link 1</Link>
        </li>
        <li>
          <Link to="/link">Link 2</Link>
        </li>
        <li>
          <Link to="/link">Link 3</Link>
        </li>
        <li className="cta">
          <Link to="/link">Link 4</Link>
        </li>
      </ul>
    </nav>
  );
}
