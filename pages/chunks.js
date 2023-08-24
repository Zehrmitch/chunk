import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Loading from '../app/loading.js';

import { PrismCode } from '../components/PrismCode/index.js';
import Divider from '../components/Divider/index.js';
import CodeBlock from '../components/PrismCode/index.js';
import { getPosts } from '../api/server.js';
import Post from '../components/Chunk/index.js';

export default function Chunks(props, { searchResults }) {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState(null);
	const [showMore, setShowMore] = useState(false);

	useEffect(() => {
		getChunks();
	}, []);

	async function getChunks() {
		const requestURL =
			'https://s3.us-east-2.amazonaws.com/bunkiebooker.bucket/chunks/data/data.json';

		setLoading(true);
		axios
			.get(requestURL)
			.then((response) => {
				setData(response.data.chunks);
				console.log(response.data);
			})
			.catch((error) => {
				console.error('Error fetching data: ', error);
			})
			.finally(() => {
				setLoading(false);
			});
	}

	const code = `
    const add = (a, b) => {
      return a + b;
    }
  `;

	// function createCards(numShown) {
	// 	return data.slice(0, numShown).map((item) => (
	// 		<li key={item.id} className='pt-5'>
	// 			<div className='divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow'>
	// 				<div className='px-4 py-5 sm:px-6'>
	// 					Header: {item.title}
	// 				</div>
	// 				<div className='px-4 py-5 sm:p-6'>
	// 					<PrismCode
	// 						code={code}
	// 						language='js'
	// 						plugins={['line-numbers']}
	// 					/>
	// 					Content: {item.content}
	// 				</div>
	// 				<div className='px-4 py-4 sm:px-6 grid grid-cols-9 gap-1 content-center'>
	// 					{item.tags.map((item, i) => (
	// 						<option
	// 							key={i}
	// 							value={item}
	// 							className='px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full text-center'
	// 						>
	// 							{item}
	// 						</option>
	// 					))}
	// 				</div>
	// 			</div>
	// 		</li>
	// 	));
	// }
	// const results = searchResults.map((post) => (
	// 	<Post key={post.id} post={post} />
	// ));

	const results = 1;

	const content = results?.length ? (
		results
	) : (
		<article>
			<p>No Matching Posts</p>
		</article>
	);

	if (loading) return <Loading />;
	else {
		return (
			<div>
				{/* <ul>{showMore ? createCards(data.length) : createCards(5)}</ul> */}
				<main>{content}</main>
				<div>
					<Divider setShowMore={setShowMore} showMore={showMore} />
				</div>
			</div>
		);
	}
}
