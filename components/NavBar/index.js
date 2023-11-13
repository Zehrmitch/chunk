import { Popover } from '@headlessui/react';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import ChunkButton from '../ChunkButton';
import React, { useState } from 'react';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function NavBar({ posts, setSearchResults, setPosts }) {
	const handleSubmit = (e) => e.preventDefault();

	const handleSearchChange = (e) => {
		if (!e.target.value) {
			return setSearchResults(posts);
		}

		const resultsArray = posts.filter(
			(post) =>
				post.title.includes(e.target.value) ||
				post.body.includes(e.target.value) ||
				post.description.includes(e.target.value) ||
				post.tags.some((tag) =>
					tag.toLowerCase().includes(e.target.value)
				)
		);

		setSearchResults(resultsArray);
	};

	return (
		<>
			<Popover
				as='header'
				className={({ open }) =>
					classNames(
						open ? 'fixed inset-0 z-40 overflow-y-auto' : '',
						'bg-white shadow-sm lg:static lg:overflow-y-visible'
					)
				}
			>
				{({ open }) => (
					<>
						<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
							<div className='relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12'>
								<div className='flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2'>
									<div className='flex flex-shrink-0 items-center'>
										<a
											href='/chunks'
											className='flex items-center'
										>
											<img
												src='https://i.ibb.co/XYDw7z4/image-removebg-preview-1.png'
												alt='Code chunks logo'
												className='w-12 h-12'
												border='0'
											/>
											<p
												className='h-8 w-auto pt-1'
												alt='Code Chunks'
											>
												Code Chunks
											</p>
										</a>
									</div>
								</div>
								<div className='min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-8'>
									<div className='flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0'>
										<div className='w-full'>
											<label className='sr-only'>
												Search
											</label>
											<div className='relative'>
												<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
													<MagnifyingGlassIcon
														className='h-5 w-5 text-gray-400'
														aria-hidden='true'
													/>
												</div>
												<form onSubmit={handleSubmit}>
													<input
														type='text'
														id='search'
														onChange={
															handleSearchChange
														}
														autoComplete='off'
														required
														name='search'
														className='block w-full rounded-lg border-black border-2 bg-white py-2 pl-10 pr-3 text-black placeholder:text-gray-600 focus:ring-2 focus:ring-inset sm:text-md sm:leading-6'
														placeholder='Search'
													/>
												</form>
											</div>
										</div>
									</div>
								</div>

								<div className='flex items-center justify-end col-span-2'>
									<ChunkButton
										setPosts={setPosts}
										setSearchResults={setSearchResults}
									/>
								</div>
							</div>
						</div>
					</>
				)}
			</Popover>
		</>
	);
}
