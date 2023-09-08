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
		<article>
			<p>No Matching Posts</p>
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
