import '../styles/global.css';
import NavBar from '../components/NavBar';

export default function App({ Component, pageProps }) {
	return (
		<>
			<div>
				<NavBar />
			</div>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				{/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
				<div className='mx-auto max-w-3xl'>
					<Component {...pageProps} />
				</div>
				<p>Footer</p>
			</div>
		</>
	);
}

// Look up Next.js layout for proper header and footer
