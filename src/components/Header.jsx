import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<nav style={{display: 'flex', flexDirection: 'column'}}>
				<Link to="/">Home</Link>
				<Link to="/components/button">Button</Link>
				<Link to="/components/select-dropdown">Select Dropdown</Link>
			</nav>
		</>
	);
}

export default Header;