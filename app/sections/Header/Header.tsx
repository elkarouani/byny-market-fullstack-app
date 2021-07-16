import React from 'react';
import { CategoriesDropDown } from 'components/';

export default function Header() {
	return (
		<div>
			<div className="pt-1.5 px-4 flex items-center justify-between">
				<img src="images/logo.png" alt="logo" />
				<img src="icons/menu.svg" alt="menu" />
			</div>
			<CategoriesDropDown />
		</div>
	)
};