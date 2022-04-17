import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '@stripe/stripe-js';
import * as dayjs from 'dayjs';
import 'dayjs/locale/ja';

dayjs.locale('ja');

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
