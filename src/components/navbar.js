import './navbar.css';

function Navbar() {
    return (
      <nav className="navbar">
        <div className="logo">Logo</div>
        <ul className="list">
          <li className="item">
            <a href="#">Home</a>
          </li>
          <li className="item">
            <a href="#">Service</a>
          </li>
          <li className="item">
            <a href="#">About</a>
          </li>
          <li className="item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar;