import { PlusCircleIcon } from '@heroicons/react/20/solid';
import React from 'react';

export default function ChunkButton() {
	return (
		<>
			<button
				type='button'
				className='inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
			>
				<PlusCircleIcon
					className='-ml-0.5 h-5 w-5'
					aria-hidden='true'
				/>
				New Chunk
			</button>
		</>
	);
}
