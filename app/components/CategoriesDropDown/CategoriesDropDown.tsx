import React from 'react'

export default function CategoriesDropDown() {
	return (
		<div className="mt-3 py-0.5 bg-dropdown-gray flex items-center justify-center">
			<span role="label" className="font-medium text-sm leading-5">Catégories</span>
			<img role="dropdown-icon" src="icons/dropdown.svg" alt="dropdown" />
		</div>
	)
}