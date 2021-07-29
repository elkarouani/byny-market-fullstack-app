import React from 'react';


export default function ProductCard() {
	return (
		<div className="w-60 h-80 pt-4 px-2 pb-2 border border-product-card-outer rounded-xl bg-product-card-inner flex flex-col items-center">
			<img
				className="w-28 h-28 border border-product-outer rounded-md"  
				role="illustration" 
				src="images/milk.png" 
				alt="milk product" 
			/>
			<span className="w-max mt-4 font-medium text-primary-green" role="title">Long Life Milk</span>
			<span className="mt-5 text-sm text-center text-product-description" role="description">
				Nurture your family’s health with Almarai.
			</span>
			<div className="w-full mt-12 px-2 flex items-center justify-between">
				<span className="w-max font-medium text-sm text-product-price" role="price">4.75 DH</span>
				<button className="px-2.5 py-0.5 font-medium text-xs text-product-cta border border-product-cta rounded-lg" role="add-to-cart">Choisir</button>
			</div>
		</div>
	)
}