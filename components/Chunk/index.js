import { PrismCode } from '/components/PrismCode/index.js';

const Post = ({ post }) => {
	const code = `
	const add = (a, b) => {
		return a + b;
	}
`;

	return (
		<article key={post.id} className='pt-5'>
			<div className='divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow'>
				<div className='px-4 py-5 sm:px-6'>Header: {post.title}</div>
				<div className='px-4 py-5 sm:p-6'>
					<PrismCode
						code={code}
						language='js'
						plugins={['line-numbers']}
					/>
					Content: {post.body}
				</div>
				<div className='px-4 py-4 sm:px-6 grid grid-cols-9 gap-1 content-center'>
					<option
						key={post.id}
						className='px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full text-center'
					>
						{post.id}
					</option>
				</div>
			</div>
		</article>
	);
};
export default Post;
