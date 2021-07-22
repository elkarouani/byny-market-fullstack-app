import React from 'react';
import { ProductCard } from 'components/';


export default function ProductsList() {
	return (
		<div className="mt-8 flex flex-col items-center">
			<span className="px-2 text-xl leading-6 tracking-widest border-b border-black text-new-products-title" role="products-list-title">Products :</span>
			<div className="mt-10 mr-2 grid grid-cols-2 gap-y-7" role="products-list">
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
			<div className="mt-9 space-x-8 text-sm font-medium text-navigation" role="navigation">
				<span className="px-2 py-1 border-2 border-active-nav rounded-full text-xs">1</span>
				<span>2</span>
				<span>3</span>
				<span>4</span>
			</div>
		</div>
	)
}