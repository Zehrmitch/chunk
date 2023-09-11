import { PlusCircleIcon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { PrismCode } from '/components/PrismCode/index.js';

export default function ChunkButton({ setPosts, setSearchResults }) {
	const [showModal, setShowModal] = useState(false);
	const [data, setData] = useState({});
	const [responseMessage, setResponseMessage] = useState('');

	const [selectedLanguage, setSelectedLanguage] = useState('js');
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (event) => {
		const newValue = event.target.value;
		setInputValue(newValue);
	};

	const handleLanguageChange = (e) => {
		const newValue = e.target.value;
		setSelectedLanguage(newValue);
	};

	const handleTabKeyPress = (event) => {
		if (event.key === 'Tab') {
			event.preventDefault();
			const { selectionStart, selectionEnd } = event.target;
			const newInputValue =
				inputValue.substring(0, selectionStart) +
				'\t' +
				inputValue.substring(selectionEnd);
			setInputValue(newInputValue);
		}
	};

	const handleDataCreation = () => {
		const code = `
			const add = (a, b) => {
				return a + b;
			}
		`;

		const sampleData = {
			title: 'Some actual example',
			content: 'Wow this is a cool code snipet',
			body: code,
			excerpt: 'this is the excerpt that I want to be shown',
			tags: ['JS', 'Code'],
		};

		fetch('http://localhost:42069/api/createChunk', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(sampleData),
		})
			.then((response) => {
				if (response.ok) {
					return response.text();
				} else {
					throw new Error('Failed to create chunk');
				}
			})
			.then((responseText) => {
				setResponseMessage(responseText); // Update state with response
			})
			.catch((error) => {
				console.error('Error:', error);
				setResponseMessage('Error occurred');
			});

		window.location.reload();
	};

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		handleDataCreation();
		setData(data);
		setShowModal(false);
		reset();
	};

	const cancelClick = () => {
		setShowModal(false);
		setData({});
	};

	const handleClick = (e) => {
		e.preventDefault();
		setShowModal(true);
	};

	return (
		<>
			<button
				type='button'
				onClick={handleClick}
				className='inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
			>
				<PlusCircleIcon
					className='-ml-0.5 h-5 w-5'
					aria-hidden='true'
				/>
				New Chunk
			</button>
			{showModal && (
				<div className='z-10'>
					<div className='justify-center items-center flex overflow-x-hidden h-3/4 overflow-y-auto fixed inset-x-0 top-20 bg-opacity-60'>
						<main className='container mx-auto max-w-screen-lg h-full border-2 border-gray-500 rounded-lg'>
							<article
								aria-label='New Chunk Modal'
								className='relative h-full flex flex-col bg-white shadow-xl rounded-md'
							>
								<section className='h-full overflow-auto p-8 w-full flex flex-col '>
									<div className=' border-gray-300 h-full bg-white rounded'>
										<form
											className='space-y-8 divide-y divide-gray-200'
											onSubmit={handleSubmit(onSubmit)}
										>
											<div className='space-y-8 divide-y divide-gray-200'>
												<div>
													<div>
														<h3 className='text-lg leading-6 font-medium text-gray-900'>
															Create a new Chunk
														</h3>
													</div>

													<div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
														<div className='sm:col-span-4'>
															<label className='block text-sm font-medium text-gray-700'>
																Chunk Title
															</label>
															<div className='mt-1'>
																<input
																	type='text'
																	name='title'
																	id='title'
																	required
																	{...register(
																		'Title',
																		{
																			required: true,
																		}
																	)}
																	className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-1'
																/>
															</div>
														</div>

														<div className='sm:col-span-3'>
															<label className='block text-sm font-medium text-gray-700'>
																Code Snippet
															</label>
															<div className='mt-1'>
																<textarea
																	required
																	className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-1'
																	{...register(
																		'Code'
																	)}
																	value={
																		inputValue
																	}
																	onKeyDown={
																		handleTabKeyPress
																	}
																	onChange={
																		handleInputChange
																	}
																	placeholder='Type something...'
																	rows='4'
																/>
															</div>
														</div>
														<div className='sm:col-span-3'>
															<label className='block text-sm font-medium text-gray-700'>
																Code
															</label>
															<div className='mt-1'>
																<PrismCode
																	code={
																		inputValue
																	}
																	language={
																		selectedLanguage
																	}
																	plugins={[
																		'line-numbers',
																	]}
																/>
															</div>
														</div>

														<div className='sm:col-span-4 pt-4'>
															<div>
																<h3 className='text-lg leading-6 font-medium text-gray-900'>
																	Information
																	about the
																	Chunk
																</h3>
																<p className='mt-1 text-sm text-gray-500'>
																	This
																	information
																	provides
																	context and
																	additional
																	descriptions
																	about the
																	Chunk.
																</p>
															</div>
														</div>

														<div className='sm:col-span-3'>
															<label className='block text-sm font-medium text-gray-700'>
																Language
															</label>
															<div className='mt-1'>
																<select
																	id='language'
																	name='language'
																	required
																	{...register(
																		'Language'
																	)}
																	className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-1'
																	value={
																		selectedLanguage
																	}
																	onChange={
																		handleLanguageChange
																	}
																>
																	<option>
																		js
																	</option>
																	<option>
																		html
																	</option>
																	<option>
																		css
																	</option>
																	<option>
																		go
																	</option>
																	<option>
																		bash
																	</option>
																	<option>
																		rust
																	</option>
																	<option>
																		sql
																	</option>
																</select>
															</div>
														</div>

														<div className='sm:col-span-6'>
															<label className='block text-sm font-medium text-gray-700'>
																Street address
															</label>
															<div className='mt-1'>
																<input
																	type='text'
																	name='street-address'
																	id='street-address'
																	autoComplete='street-address'
																	required
																	{...register(
																		'Address',
																		{
																			required: true,
																		}
																	)}
																	className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-1'
																/>
															</div>
														</div>

														<div className='sm:col-span-2'>
															<label className='block text-sm font-medium text-gray-700'>
																City
															</label>
															<div className='mt-1'>
																<input
																	type='text'
																	name='city'
																	id='city'
																	autoComplete='address-level2'
																	required
																	{...register(
																		'City',
																		{
																			required: true,
																		}
																	)}
																	className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-1'
																/>
															</div>
														</div>

														<div className='sm:col-span-2'>
															<label className='block text-sm font-medium text-gray-700'>
																State / Province
															</label>
															<div className='mt-1'>
																<input
																	type='text'
																	name='region'
																	id='region'
																	autoComplete='address-level1'
																	required
																	{...register(
																		'Region',
																		{
																			required: true,
																		}
																	)}
																	className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-1'
																/>
															</div>
														</div>

														<div className='sm:col-span-2'>
															<label className='block text-sm font-medium text-gray-700'>
																ZIP / Postal
																code
															</label>
															<div className='mt-1'>
																<input
																	type='text'
																	name='postal-code'
																	id='postal-code'
																	autoComplete='postal-code'
																	required
																	{...register(
																		'PostalCode',
																		{
																			required: true,
																		}
																	)}
																	className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-1'
																/>
															</div>
														</div>
													</div>
												</div>
											</div>
										</form>
									</div>
								</section>

								<footer className='flex justify-end px-8 pb-8 pt-4'>
									<button
										type='button'
										onClick={cancelClick}
										className='bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
									>
										Cancel
									</button>
									<button
										type='submit'
										onClick={handleSubmit(onSubmit)}
										className='ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
									>
										Save
									</button>
								</footer>
							</article>
						</main>
					</div>
				</div>
			)}
		</>
	);
}
