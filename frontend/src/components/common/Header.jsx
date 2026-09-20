import { Link } from "react-router-dom";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <nav class="ui three item menu">
      {!isLoggedIn ? (
        <>
          <Link to="/" class="item">Home</Link>
          <Link to="/login" class="item">Login</Link>
          <Link to="/register" class="item">Register</Link>
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
