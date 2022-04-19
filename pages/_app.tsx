import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '@stripe/stripe-js';
import * as dayjs from 'dayjs';
import 'dayjs/locale/ja';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

dayjs.locale('ja');

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<DefaultSeo {...SEO} />
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
