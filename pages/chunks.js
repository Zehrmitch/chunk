import React, { useEffect, useState } from 'react';
import Loading from '../app/loading.js';

import Post from '../components/Chunk/index.js';

export default function Chunks({ searchResults }) {
	const [loading, setLoading] = useState(false);
	const [showMore, setShowMore] = useState(false);

	const results = searchResults.map((post) => (
		<Post key={post.id} post={post} />
	));

	const content = results?.length ? (
		results
	) : (
		<article className='pt-5'>
			<div className='divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow'>
				<div className='px-4 py-5 sm:px-6'>No matching posts</div>
				<div className='px-4 py-5 sm:p-6'>
					<p className='text-center text-sm'>
						Please adjust your search criteria
					</p>
				</div>
			</div>
		</article>
	);

	if (loading) return <Loading />;
	else {
		return <main>{content}</main>;
	}
}

{
	/* <ul>{showMore ? createCards(data.length) : createCards(5)}</ul>
				<div>
					<Divider setShowMore={setShowMore} showMore={showMore} />
				</div> */
}
