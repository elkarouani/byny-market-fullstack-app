import React from 'react';
import { CategoriesDropDown } from 'components/';

export default function Header({ without_catergories_dropdown = false }) {
	return (
		<div>
			<div className="pt-1.5 px-4 flex items-center justify-between">
				<img src="images/logo.png" alt="logo" />
				<img src="icons/menu.svg" alt="menu" />
			</div>
			{
				without_catergories_dropdown
					? null
					: <CategoriesDropDown />
			}

		</div>
	)
};