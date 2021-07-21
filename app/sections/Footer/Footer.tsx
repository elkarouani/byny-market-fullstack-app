import React from 'react';


export default function Footer() {
	return (
		<div className="mt-10 py-5 px-3 border flex items-center justify-between bg-footer">
			<div>
				<span className="text-lg font-medium text-footer-label" role="label">Navigation :</span>
				<div className="mt-1.5 flex space-x-2 text-sm text-footer-link">
					<a className="px-0.5 border-b border-footer-link" href="#" role="first-link">First link</a>
					<a className="px-0.5 border-b border-footer-link" href="#" role="second-link">Second link</a>
					<a className="px-0.5 border-b border-footer-link" href="#" role="third-link">Third link</a>
				</div>
			</div>
			<p className="w-36 text-xs text-center text-footer-description tracking-widest" role="author-description">All Rights Reserved KDragon | 2021</p>
		</div>
	)
}