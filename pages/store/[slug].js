import Link from 'next/link';
import { useRouter } from 'next/router';
import { getProducts } from '../../api/server';

export default function ProductDetail({ product }) {
	const router = useRouter();

	if (!product) {
		return <p>Product not found</p>;
	}

	return (
		<div>
			<p>
				<Link href='/store'>
					<small>&laquo; back to all products</small>
				</Link>
			</p>
			<h1>{product.name}</h1>
			<p>{product.description}</p>
			<p>Price: ${product.price}</p>
			<button onClick={() => router.push('/store')}>Navigate</button>
		</div>
	);
}

export async function getStaticPaths() {
	const response = await getProducts();
	const paths = response.map((product) => ({
		params: { slug: product.slug.toString() },
	}));
	return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
	const response = await getProducts();
	const theProduct = response.find(
		(product) => product.slug.toString() === params.slug.toString()
	);

	if (!theProduct) {
		return { notFound: true };
	}

	return { props: { product: theProduct } };
}
