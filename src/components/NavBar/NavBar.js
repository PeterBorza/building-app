import { useContext } from "react";
import { Link } from "react-router-dom";

import { LinkContext } from "Context";

import styles from "./NavBar.module.scss";

const NavBar = () => {
  const { navBar, logo, navLinks, linkContainer, linkWrapper } = styles;
  const links = useContext(LinkContext);

  return (
    <div className={navBar}>
      <div className={logo}>
        <h3>MY LOGO</h3>
      </div>
      <ul className={linkContainer}>
        {links
          .filter((_, i) => i !== links.length - 1)
          .map(({ title, path, id }) => (
            <li className={linkWrapper} key={id}>
              <Link className={navLinks} to={`${path}`}>
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default NavBar;
