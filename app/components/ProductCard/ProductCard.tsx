import React from 'react';


export default function ProductCard(props) {
	const { ExtraStyleClasses } = props;

	return (
		<div className={ 
			`ProductCardLayout ${ExtraStyleClasses}` 
		}>
			<img
				className="ProductCardIllustration"
				role="illustration"
				src="images/milk.png"
				alt="milk product"
			/>
			<span
				className="ProductCardTitle"
				role="title"
			>
				Long Life Milk
			</span>
			<span
				className="ProductCardDescription"
				role="description"
			>
				Nurture your family’s health with Almarai.
			</span>
			<div className="ProductCardFooter">
				<span 
					className="ProductCardPrice" 
					role="price"
				>
					4.75 DH
				</span>
				<button 
					className="ProductCardAddToCartBtn" 
					role="add-to-cart"
				>
					Choisir
				</button>
			</div>
		</div>
	)
}