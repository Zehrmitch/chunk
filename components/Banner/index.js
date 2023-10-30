import React from 'react';
import '../../styles/global.css';

const FlashSaleBanner = () => {
	const bannerText = 'Flash Sale! - 50% off all items - Limited time only!';
	return (
		<div className='w-full h-12 overflow-hidden relative bg-yellow-500 text-white'>
			<div className='scrolling-banner whitespace-nowrap'>
				{bannerText}
				{bannerText}
				{bannerText}
				{bannerText}
				{bannerText}
			</div>
		</div>
	);
};

export default FlashSaleBanner;
