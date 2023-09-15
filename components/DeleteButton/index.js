import { MinusCircleIcon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';

export default function DeleteButton({ postId }) {
	const [showModal, setShowModal] = useState(false);

	const cancelClick = () => {
		setShowModal(false);
	};

	const handleClick = () => {
		setShowModal(true);
	};

	const deleteChunk = () => {
		fetch(`http://localhost:42069/api/deleteChunk/${postId}`, {
			method: 'DELETE',
		})
			.then((response) => {
				if (response.ok) {
					return response.text();
				} else {
					throw new Error('Failed to delete chunk');
				}
			})
			.then((responseText) => {
				setResponseMessage(responseText);
			})
			.catch((error) => {
				console.error('Error:', error);
				setResponseMessage('Error occurred');
			});
		setShowModal(false);
		window.location.reload();
	};

	return (
		<>
			<button
				type='button'
				onClick={handleClick}
				className='inline-flex items-center gap-x-1.5 rounded-2xl border-black border-2 shadow-hardsm bg-white px-2.5 py-1.5 text-sm font-semibold text-black hover:bg-[#BBD6E2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600'
			>
				<MinusCircleIcon
					className='-ml-0.5 h-5 w-5'
					aria-hidden='true'
				/>
				Delete
			</button>
			{showModal && (
				<div className='z-100 top-0 bottom-0 left-0 right-0 h-screen fixed bg-opacity-60 bg-black'>
					<div className='justify-center items-center flex py-20 fixed inset-x-0'>
						<main className='container max-w-screen-md  border-2 border-gray-500 rounded-lg'>
							<article
								aria-label='Delete Chunk Modal'
								className='relative h-full flex flex-col bg-white shadow-xl rounded-md'
							>
								<div className='flex justify-center px-8 py-8'>
									<button
										type='button'
										onClick={cancelClick}
										className='bg-white py-2 px-4 border-black border-2 rounded-md shadow-sm text-sm font-medium text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700'
									>
										Cancel
									</button>
									<button
										type='submit'
										onClick={deleteChunk}
										className='ml-3 inline-flex justify-center py-2 px-4 border-black border-2 shadow-sm text-sm font-medium rounded-md text-black bg-red-300 hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700'
									>
										Confirm Delete
									</button>
								</div>
							</article>
						</main>
					</div>
				</div>
			)}
		</>
	);
}
