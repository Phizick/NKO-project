import Link from "next/link";
import "./BurgerMenu.component.css";

const BurgerMenu = () => {
  return (
    <div className="dropdown">
      <div className="dropdown-content">
        <Link href="/about-us" className="links-text">
          О Нас
        </Link>
        <Link href="/news" className="links-text">
          Новости
        </Link>
        <Link href="/events" className="links-text">
          Мероприятия
        </Link>
      </div>
    </div>
  );
};

export default BurgerMenu;
