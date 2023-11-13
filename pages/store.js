import Link from 'next/link';
import { getProducts } from '../api/server.js';
import FlashSaleBanner from '../components/Banner/index.js';

export default function Store(props) {
	return (
		<div className='bg-white'>
			<FlashSaleBanner />
			<div className='mx-auto max-w-2xl px-4 py-16 md:px-6 md:py-12 lg:max-w-4xl lg:px-8'>
				<h2 className='sr-only'>Products</h2>
				<div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-6 md:gap-y-10 lg:grid-cols-2 lg:gap-x-8'>
					{props.products.map((product) => (
						<Link href={`/store/${product.slug}`} key={product.id}>
							<div
								key={product.id}
								className='group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white'
							>
								<div className='aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96'>
									<img
										src={product.imageSrc}
										alt={product.imageAlt}
										className='h-full w-full object-cover object-center sm:h-full sm:w-full'
									/>
								</div>
								<div className='flex flex-1 flex-col space-y-2 p-4'>
									<h3 className='text-sm font-medium text-gray-900'>
										<div href={product.href}>
											<span
												aria-hidden='true'
												className='absolute inset-0'
											/>
											{product.name}
										</div>
									</h3>
									<p className='text-sm text-gray-500'>
										{product.description}
									</p>
									<div className='flex flex-1 flex-col justify-end'>
										<p className='text-sm italic text-gray-500'>
											{product.options}
										</p>
										<p className='text-base font-medium text-gray-900'>
											{product.price}
										</p>
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

export async function getStaticProps() {
	const response = await getProducts();

	return {
		props: {
			products: response,
		},
	};
}
