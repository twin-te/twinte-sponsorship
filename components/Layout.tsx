import Head from 'next/head';
import styles from '../styles/Layout.module.scss';

export const Layout: React.FC = ({ children }) => {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="Learn how to build a personal website using Next.js" />
			</Head>
			<header className={styles.header}></header>
			<main>{children}</main>
			<footer className={styles.footer}>
				<a href="https://vercel.com?utm_source=twin-te&utm_campaign=oss">
					<img src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg" alt="Vercel" />
				</a>
			</footer>
		</div>
	);
};

export default Layout;
