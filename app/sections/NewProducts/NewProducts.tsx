import React from 'react';
import { ProductCard } from 'components';

export default function NewProducts() {
	return (
		<div className="mt-6 flex flex-col items-center">
			<span className="text-xl leading-6 tracking-widest underline text-new-products-title" role="label">Les Nouveaux :</span>
			<div className="mx-2 flex space-x-4">
				<img role="scroll-left" src="icons/leftarrow.svg" alt="leftarrow" />
				<div className="w-screen mt-8 flex space-x-4 overflow-hidden" role="products-list">
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>
				<img role="scroll-right" src="icons/rightarrow.svg" alt="rightarrow" />
			</div>
		</div>
	)
}