import Head from 'next/head';
import Sidebar from './Sidebar';
import MobileHeader from './MobileHeader';
import styles from '../styles/components/Layout.module.scss';
import { useLoginStatus } from '../hooks/useLoginStatus';
import { Button } from 'react-bulma-components';
import LoginModalContent from './LoginModalContent';
import { MySwal } from './SweetAlert';
import { useRouter } from 'next/router';
import { getLogoutUrl } from '../usecases/getAuthUrl';

export const Layout: React.FC = ({ children }) => {
	const isLogin = useLoginStatus();
	const router = useRouter();

	const handleLogout = async () => {
		const result = await MySwal.fire({
			title: 'ログアウトしますか？',
			text: 'すべてのTwin:teサービスからログアウトします',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			confirmButtonText: 'はい',
			cancelButtonText: 'いいえ'
		});
		if (result.isConfirmed) {
			alert('confirm');
			router.push(getLogoutUrl());
		}
	};

	const handleLogin = async () => {
		await MySwal.fire({
			title: 'どのアカウントでログインしますか?',
			html: LoginModalContent,
			showConfirmButton: false,
			showCancelButton: true,
			cancelButtonText: '閉じる'
		});
	};

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
									<Button
										className="is-primary is-outlined has-text-weight-bold"
										onClick={() => (isLogin ? handleLogout() : handleLogin())}
									>
										{isLogin ? 'ログアウト' : 'ログイン'}
									</Button>
								)}
							</div>
						</header>
						<main>{children}</main>
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
