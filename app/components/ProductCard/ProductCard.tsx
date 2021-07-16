import React from 'react';


export default function ProductCard() {
	return (
		<div className="w-max mt-2 ml-2 pt-4 px-2 pb-2 border border-product-card-outer rounded-xl bg-product-card-inner flex flex-col items-center">
			<img
				className="w-24 h-24 border border-product-outer rounded-md"  
				role="illustration" 
				src="images/milk.png" 
				alt="milk product" 
			/>
			<span className="w-max mt-2 font-medium text-primary-green" role="title">Long Life Milk</span>
			<span className="w-36 mt-1.5 text-xs text-center text-product-description" role="description">
				Nurture your family’s health with Almarai.
			</span>
			<div className="mt-6 space-x-6">
				<span className="w-max font-medium text-sm text-product-price" role="price">4.75 DH</span>
				<button className="px-2.5 py-0.5 font-medium text-xs text-product-cta border border-product-cta rounded-lg" role="add-to-cart">Choisir</button>
			</div>
		</div>
	)
}