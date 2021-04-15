import styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";
import Peter from "../../images/Peter.JPG";

// *********************************************************

const NavBar = ({ links }) => {
  const { navBar, logo, navLinks, navList, navColumn } = styles;

  const renderLinks = (arr) => arr.map(renderLink);

  const renderLink = ({ title, path, id }) => (
    <li className={navColumn} key={id}>
      <Link onClick={() => dropDown(id)} className={navLinks} to={`${path}`}>
        {title}
      </Link>
    </li>
  );

  const dropDown = (id) => {
    console.log(` Link num:${id} clicked `);
  };

  // *********************************************************

  return (
    <div className={navBar}>
      <div className={logo}>
        <h3>MY LOGO</h3>
        <img src={Peter} alt="Peter" />
      </div>
      <ul className={navList}>{renderLinks(links)}</ul>
    </div>
  );
};

export default NavBar;
