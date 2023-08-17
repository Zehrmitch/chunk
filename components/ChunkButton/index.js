import { PlusCircleIcon } from '@heroicons/react/20/solid';
import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';

export default function ChunkButton() {
	const [showModal, setShowModal] = useState(false);
	const [data, setData] = useState({});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
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
					<div class='justify-center items-center flex overflow-x-hidden h-3/4 overflow-y-auto fixed inset-x-0 top-20 bg-opacity-60'>
						<main class='container mx-auto max-w-screen-lg h-full border-2 border-gray-500 rounded-lg'>
							<article
								aria-label='New Chunk Modal'
								class='relative h-full flex flex-col bg-white shadow-xl rounded-md'
							>
								<section class='h-full overflow-auto p-8 w-full flex flex-col '>
									<div class=' border-gray-300 h-full bg-white rounded'>
										<form
											className='space-y-8 divide-y divide-gray-200'
											onSubmit={handleSubmit(onSubmit)}
										>
											<div className='space-y-8 divide-y divide-gray-200'>
												<div>
													<div>
														<h3 className='text-lg leading-6 font-medium text-gray-900'>
															Create a new Chunk.
														</h3>
													</div>

													<div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
														<div className='sm:col-span-3'>
															<label className='block text-sm font-medium text-gray-700'>
																First name
															</label>
															<div className='mt-1'>
																<input
																	type='text'
																	name='first-name'
																	id='first-name'
																	autoComplete='given-name'
																	required
																	{...register(
																		'FirstName',
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
																Last name
															</label>
															<div className='mt-1'>
																<input
																	type='text'
																	name='last-name'
																	id='last-name'
																	autoComplete='family-name'
																	required
																	{...register(
																		'LastName',
																		{
																			required: true,
																		}
																	)}
																	className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-1'
																/>
															</div>
														</div>

														<div className='sm:col-span-4'>
															<label className='block text-sm font-medium text-gray-700'>
																Email address
															</label>
															<div className='mt-1'>
																<input
																	id='email'
																	name='email'
																	type='email'
																	autoComplete='email'
																	required
																	{...register(
																		'Email',
																		{
																			required: true,
																		}
																	)}
																	className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-1'
																/>
															</div>
														</div>

														<div className='sm:col-span-4 pt-4'>
															<div>
																<h3 className='text-lg leading-6 font-medium text-gray-900'>
																	Property
																	Information
																</h3>
																<p className='mt-1 text-sm text-gray-500'>
																	This
																	information
																	is private.
																</p>
															</div>
														</div>

														<div className='sm:col-span-3'>
															<label className='block text-sm font-medium text-gray-700'>
																Country
															</label>
															<div className='mt-1'>
																<select
																	id='country'
																	name='country'
																	autoComplete='country-name'
																	required
																	{...register(
																		'Country',
																		{
																			required: true,
																		}
																	)}
																	className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-1'
																>
																	<option>
																		Canada
																	</option>
																	<option>
																		United
																		States
																	</option>
																	<option>
																		Mexico
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

								<footer class='flex justify-end px-8 pb-8 pt-4'>
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
