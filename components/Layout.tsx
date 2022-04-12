import Head from 'next/head';
import Sidebar from './Sidebar';
import styles from '../styles/Layout.module.scss';

export const Layout: React.FC = ({ children }) => {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="Learn how to build a personal website using Next.js" />
			</Head>
			<div className="columns is-gapless">
				<div className="column is-one-fifth">
					<Sidebar />
				</div>
				<div className="column">
					<header className={styles.header}>{/* header */}</header>
					<main className={styles.main}>{children}</main>
					<footer className={styles.footer}>
						<a href="https://vercel.com?utm_source=twin-te&utm_campaign=oss">
							<img src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg" alt="Vercel" />
						</a>
					</footer>
				</div>
			</div>
		</>
	);
};

export default Layout;
