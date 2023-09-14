import { PrismCode } from '/components/PrismCode/index.js';

const Post = ({ post, index }) => {
	const colors = ['bg-[#FFC900]', 'bg-[#239F94]', 'bg-[#FF90E7]'];

	const deleteChunk = () => {
		fetch(`http://localhost:42069/api/deleteChunk/${post.id}`, {
			method: 'DELETE',
		})
			.then((response) => {
				if (response.ok) {
					return response.text();
				} else {
					throw new Error('Failed to delete chunk');
				}
			})
			.then((responseText) => {
				setResponseMessage(responseText); // Update state with response
			})
			.catch((error) => {
				console.error('Error:', error);
				setResponseMessage('Error occurred');
			});

		window.location.reload();
	};

	return (
		<article key={post.id} className='mt-10 shadow-hard rounded-lg'>
			<div
				className={`divide-y divide-gray-200 overflow-hidden rounded-lg ${
					colors[index % colors.length]
				} border-2 border-black`}
			>
				<div className='px-4 py-5 sm:px-6'>{post.title}</div>
				<div className='px-4 py-5 sm:p-6'>
					<PrismCode
						code={post.content}
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
			<button onClick={deleteChunk}>Delete Chunk</button>
		</article>
	);
};
export default Post;
