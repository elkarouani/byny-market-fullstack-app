import React from 'react'


export default function Service() {
	return (
		<div className="mt-9 flex flex-col items-center">
			<img
				className="w-10 h-10 p-2 bg-service-illustration rounded-md"
				role="illustration" 
				src="icons/contact.svg" 
				alt="contact" 
			/>
			<span className="w-max mt-2 font-medium text-sm text-service-title" role="title">Customer Service</span>
			<span className="text-service-description text-xs text-center" role="description">
				Always at your service
			</span>
		</div>	
	)
}