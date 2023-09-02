import { Link } from "react-router-dom";
import banner from "../assets/banner.jpg";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${banner})` }}>
      <div className="header-container">
        <h1>Burgerq</h1>
        <p>Delicious Hamburgers</p>
        <Link to="/menu">
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
