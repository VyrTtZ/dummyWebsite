import { Link } from "react-router-dom";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <nav>
      {!isLoggedIn ? (
        <>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      ) : (
        <>
        <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/products">Products</Link>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </>
      )}
    </nav>
  );
};

export default Header;
