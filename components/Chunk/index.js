import { PrismCode } from '/components/PrismCode/index.js';

const Post = ({ post }) => {
	return (
		<article key={post.id} className='pt-5'>
			<div className='divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow'>
				<div className='px-4 py-5 sm:px-6'>{post.title}</div>
				<div className='px-4 py-5 sm:p-6'>
					<PrismCode
						code={post.body}
						language='js'
						plugins={['line-numbers']}
					/>
					{post.excerpt}
				</div>
				<div className='px-4 py-4 sm:px-6 grid grid-cols-9 gap-1 content-center'>
					{post.tags.map((tag, i) => (
						<option
							key={post.id + i}
							className='px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full text-center'
						>
							{tag}
						</option>
					))}
				</div>
			</div>
		</article>
	);
};
export default Post;
