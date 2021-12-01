import { CartItem } from 'components';
import React from 'react';


export default function ProductsList() {
	return (
		<div className="h-[457px] mt-6 overflow-y-auto">
			<CartItem />
			<CartItem />
			<CartItem />
			<CartItem />
			<CartItem />
			<CartItem />
		</div>
	)
}