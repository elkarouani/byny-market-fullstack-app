import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { ProductCard } from 'components/';

export default function NewProducts() {
	const [activeItemIndex, setActiveItemIndex] = useState(0);
	const chevronWidth = 40;

	return (
		<div className="mt-6 flex flex-col items-center space-y-8">
			<span className="px-2 text-xl leading-6 tracking-widest border-b border-black text-new-products-title" role="label">Les Nouveaux :</span>
			<div className="w-full" style={{ padding: `0 ${chevronWidth}px` }}>
				<ItemsCarousel
					requestToChangeActive={setActiveItemIndex}
					activeItemIndex={activeItemIndex}
					numberOfCards={1}
					gutter={20}
					leftChevron={<button><img role="scroll-left" src="icons/leftarrow.svg" alt="leftarrow" /></button>}
					rightChevron={<button><img role="scroll-right" src="icons/rightarrow.svg" alt="rightarrow" /></button>}
					outsideChevron
					chevronWidth={chevronWidth}
				>
					<ProductCard ExtraStyleClasses="mx-auto" />
					<ProductCard ExtraStyleClasses="mx-auto" />
					<ProductCard ExtraStyleClasses="mx-auto" />
					<ProductCard ExtraStyleClasses="mx-auto" />
				</ItemsCarousel>
			</div>
		</div>
	)
}