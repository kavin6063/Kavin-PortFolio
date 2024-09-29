import { navLinks } from "../constants";

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, href, name }) => (
        <li key={id} className="nav-li">
          <a
            href={href}
            className="nav-li_a"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(href).scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
