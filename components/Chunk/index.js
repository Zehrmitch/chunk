import { PrismCode } from '/components/PrismCode/index.js';
import DeleteButton from '../DeleteButton';

const Post = ({ post, index }) => {
	const colors = ['bg-[#FFC900]', 'bg-[#239F94]', 'bg-[#FF90E7]'];

	return (
		<article key={post.id} className='mt-10 shadow-hard rounded-lg'>
			<div
				className={`divide-y divide-gray-200 overflow-hidden rounded-lg ${
					colors[index % colors.length]
				} border-2 border-black`}
			>
				<div className='grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 '>
					<div className='px-4 py-5 sm:px-6 sm:col-span-5'>
						{post.title}
					</div>
					<div className='sm:col-span-1 px-2 py-3 relative items-center justify-end flex'>
						<DeleteButton id={post.id} />
					</div>
				</div>
				<div className='px-4 py-5 sm:p-6 z-1'>
					<PrismCode
						code={post.body}
						language='js'
						plugins={['line-numbers']}
					/>
					{post.body}
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

// code-toolbar
