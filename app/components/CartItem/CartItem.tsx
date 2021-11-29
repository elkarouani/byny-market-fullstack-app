import React from 'react';


export default function ProductCard() {
	return (
		<div className="pt-4 px-6">
			<div className="flex items-center mb-6">
				<img
					className="w-16 h-16 border-2 border-[#161B33] border-opacity-75 rounded-2xl"
					src="images/milk.png"
					alt="milk product"
				/>

				<div className="ml-3">
					<h4 className="text-sm text-[#122E44] text-opacity-70 font-bold">Milk</h4>
					<p className="text-xs text-[#000000] text-opacity-30 font-medium">Most buyed milk ever !</p>
				</div>

				<div className="flex ml-8">
					<div className="flex flex-col items-center border-r pr-1">
						<span className="text-[#4A90E2] font-medium">-</span>
						<span className="text-[#161B33] text-opacity-75">3</span>
						<span className="text-[#4A90E2] font-medium">+</span>
					</div>
					<div className="flex items-center border border-[#FB7C7C] text-[#FB7C7C] rounded-xl px-2 ml-2">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
						</svg>
					</div>
				</div>
			</div>
			<hr />
		</div>
	)
}