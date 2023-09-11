import '../styles/global.css';
import NavBar from '../components/NavBar';
import React, { useState, useEffect } from 'react';
import { getPosts } from '../api/server.js';

export default function App({ Component, pageProps }) {
	const [posts, setPosts] = useState([]);
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		getPosts().then((json) => {
			setPosts(json);
			setSearchResults(json);
		});
	}, []);

	return (
		<div className='bg-gray-100 min-h-screen h-full flex-col grid grid-cols-9'>
			<div className='col-span-9'>
				<NavBar
					posts={posts}
					setSearchResults={setSearchResults}
					setPosts={setPosts}
				/>
			</div>
			<div className='px-2 sm:px-4 lg:px-6 pt-2 col-start-3 col-span-5'>
				<div className='mx-auto max-w-7xl'>
					<div>
						<div>
							<Component
								{...pageProps}
								searchResults={searchResults}
							/>
						</div>
					</div>
				</div>
			</div>
			<p className='col-span-9 mx-auto py-4'>Footer</p>
		</div>
	);
}
