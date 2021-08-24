import { useContext } from 'react';

import { Link } from 'react-router-dom';
import { LinkContext } from '../../Context';

import Peter from '../../images/Peter.JPG';

import styles from './NavBar.module.scss';

const NavBar = () => {
	const { navBar, logo, navLinks, navList, navColumn } = styles;
	const links = useContext(LinkContext);

	return (
		<div className={navBar}>
			<div className={logo}>
				<h3>MY LOGO</h3>
				<img src={Peter} alt='Peter' />
			</div>
			<ul className={navList}>
				{links
					.filter(item => item.id !== 7)
					.map(({ title, path, id }) => (
						<li className={navColumn} key={id}>
							<Link className={navLinks} to={`${path}`}>
								<h3>{title}</h3>
							</Link>
						</li>
					))}
			</ul>
		</div>
	);
};

export default NavBar;
