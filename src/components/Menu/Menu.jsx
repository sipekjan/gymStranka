import { Link } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
  return (
    <>
      <div className="Menu-list">
        <div className="Menu-button">
          <Link to={"/"}>
            <h1 className="Menu-text">DOMŮ</h1>
          </Link>
        </div>
        <div className="Menu-space"></div>
        <div className="Menu-button">
          <Link to={"/price"}>
            <h1 className="Menu-text">CENÍK</h1>
          </Link>
        </div>
        <div className="Menu-space"></div>
        <div className="Menu-button">
          <Link to={"/about"}>
            <h1 className="Menu-text">O NÁS</h1>
          </Link>
        </div>
        <div className="Menu-space"></div>
        <div className="Menu-button">
          <Link to={"/photo"}>
            <h1 className="Menu-text">FOTOGALERIE</h1>
          </Link>
        </div>
        <div className="Menu-space"></div>
        <div className="Menu-button">
          <Link to={"/location"}>
            <h1 className="Menu-text">LOKACE</h1>
          </Link>
        </div>
        <div className="Menu-space"></div>
        <div className="Menu-button">
          <Link to={"/contact"}>
            <h1 className="Menu-text">KONTAKT</h1>
          </Link>
        </div>
      </div>
    </>
  );
}
