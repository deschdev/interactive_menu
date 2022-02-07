import React from 'react';

const Header = ({tagline}) => (
		<header className="top">
				<h1>Restu</h1>
				<h3 className="tagline">
					<span>{tagline}</span>
				</h3>
			</header>
);

export default Header;