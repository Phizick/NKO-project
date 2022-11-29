import { Link } from "react-router-dom";
import "./BurgerMenu.component.css";

const BurgerMenu = () => {
  return (
    <div className="dropdown">
      <div className="dropdown-content">
        <Link to="/about-us" className="links-text">
          О Нас
        </Link>
        <Link to="/news" className="links-text">
          Новости
        </Link>
        <Link to="/events" className="links-text">
          Мероприятия
        </Link>
        <Link to="/useful" className="links-text">
          Полезное
        </Link>
      </div>
    </div>
  );
};

export default BurgerMenu;
