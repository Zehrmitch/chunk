import React from 'react';
import '../../styles/global.css';

const FlashSaleBanner = () => {
	const bannerText = 'Flash Sale! - 15% off all items - Limited time only! ';
	return (
		<div className='w-full h-12 overflow-hidden relative bg-yellow-500 text-white mt-6'>
			<div className='scrolling-banner whitespace-nowrap pt-3 font-bold italic font-mono text-lg'>
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
