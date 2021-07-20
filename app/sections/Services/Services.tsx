import React from 'react';
import { ServiceCard } from 'components/';


export default function Services() {
	return (
		<div className="mt-10 flex flex-col items-center">
			<span className="px-2 text-xl leading-6 tracking-widest border-b border-black text-new-products-title" role="label">Nos Services :</span>
			<div className="grid grid-cols-2 gap-x-16" role="services-list">
				<ServiceCard />
				<ServiceCard />
				<ServiceCard />
				<ServiceCard />
			</div>
		</div>
	)
}