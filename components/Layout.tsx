import Head from 'next/head';
import Sidebar from './Sidebar';
import MobileHeader from './MobileHeader';
import styles from '../styles/components/Layout.module.scss';
import { useLoginStatus } from '../hooks/useLoginStatus';
import { Button } from 'react-bulma-components';
import { useState } from 'react';
import LoginModal from './LoginModal';
import LogoutModal from './LogoutModal';

export const Layout: React.FC = ({ children }) => {
	const isLogin = useLoginStatus();
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="Learn how to build a personal website using Next.js" />
			</Head>
			<div className="columns is-gapless">
				<div className="column is-hidden-tablet">
					<MobileHeader />
				</div>
				<div className="column is-one-fifth is-hidden-mobile">
					<Sidebar />
				</div>
				<div className="column">
					<section className="section">
						<header className={styles.header}>
							<div className="has-text-right">
								{isLogin == null ? (
									<Button className="is-primary is-outlined is-loading" />
								) : (
									<Button className="is-primary is-outlined has-text-weight-bold" onClick={() => setIsModalOpen(true)}>
										{isLogin ? 'ログアウト' : 'ログイン'}
									</Button>
								)}
							</div>
						</header>
						<main>
							{isLogin ? (
								<LogoutModal show={isModalOpen} onClose={() => setIsModalOpen(false)} />
							) : (
								<LoginModal show={isModalOpen} onClose={() => setIsModalOpen(false)} />
							)}
							{children}
						</main>
						<footer className={styles.footer}>
							<a href="https://vercel.com?utm_source=twin-te&utm_campaign=oss">
								<img src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg" alt="Vercel" />
							</a>
						</footer>
					</section>
				</div>
			</div>
		</>
	);
};

export default Layout;
