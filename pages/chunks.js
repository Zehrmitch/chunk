import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../app/loading.js';

import ChunkButton from '../components/ChunkButton/index.js';
import SyntaxHighlighter from '../components/SyntaxHighlighter/index.js';
import Divider from '../components/Divider/index.js';

export default function Chunks(props) {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState(null);

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
				setData(response.data);
			})
			.catch((error) => {
				console.error('Error fetching data: ', error);
			})
			.finally(() => {
				setLoading(false);
			});
	}

	if (loading) return <Loading />;
	else {
		return (
			<>
				<ul>
					{data.chunks.map((item) => (
						<li>
							<div className='divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow'>
								<div className='px-4 py-5 sm:px-6'>
									Header: {item.title}
								</div>
								<div className='px-4 py-5 sm:p-6'>
									<SyntaxHighlighter content={item.content} />
									Content: {item.content}
								</div>
								<div className='px-4 py-4 sm:px-6 grid grid-cols-9 gap-1 content-center'>
									{item.tags.map((item, i) => (
										<option
											key={i}
											value={item}
											className='px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full text-center'
										>
											{item}
										</option>
									))}
								</div>
							</div>
						</li>
					))}
				</ul>
				<div>
					<Divider />
				</div>
			</>
		);
	}
}
