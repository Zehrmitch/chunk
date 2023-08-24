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
			console.log(json);
			console.log('app post json');
		});
	}, []);

	return (
		<div className='bg-gray-100'>
			<div>
				<NavBar posts={posts} setSearchResults={setSearchResults} />
			</div>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4'>
				<div className='mx-auto max-w-3xl'>
					<div>
						<div>
							<Component
								{...pageProps}
								searchResults={searchResults}
							/>
						</div>
					</div>
				</div>
				<p>Footer</p>
			</div>
		</div>
	);
}
