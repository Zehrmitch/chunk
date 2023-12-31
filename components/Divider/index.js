import { PlusIcon, MinusIcon } from '@heroicons/react/20/solid';
import React from 'react';

export default function Divider(params) {
	return (
		<div className='relative py-4'>
			<div
				className='absolute inset-0 flex items-center'
				aria-hidden='true'
			>
				<div className='w-full border-t border-gray-300' />
			</div>
			<div className='relative flex justify-center'>
				<button
					type='button'
					onClick={() => params.setShowMore(!params.showMore)}
					className='inline-flex items-center gap-x-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
				>
					{params.showMore === false && (
						<PlusIcon
							className='-ml-1 -mr-0.5 h-5 w-5 text-gray-400'
							aria-hidden='true'
						/>
					)}
					{params.showMore === true && (
						<MinusIcon
							className='-ml-1 -mr-0.5 h-5 w-5 text-gray-400'
							aria-hidden='true'
						/>
					)}
					{params.showMore ? 'Collapse' : 'Expand'}
				</button>
			</div>
		</div>
	);
}
