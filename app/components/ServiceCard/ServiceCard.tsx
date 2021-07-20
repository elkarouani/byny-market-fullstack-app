import React from 'react'


export default function Service() {
	return (
		<div className="w-max mt-9 flex flex-col items-center">
			<img
				className="w-16 h-16 p-2 bg-service-illustration rounded-md"
				role="illustration" 
				src="icons/contact.svg" 
				alt="contact" 
			/>
			<span className="w-max mt-2 font-medium text-lg text-service-title" role="title">Customer Service</span>
			<span className="text-service-description text-sm" role="description">
				Always at your service
			</span>
		</div>	
	)
}