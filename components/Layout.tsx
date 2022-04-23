import Head from 'next/head';
import Sidebar from './Sidebar';
import MobileHeader from './MobileHeader';
import styles from '../styles/components/Layout.module.scss';
import { useLoginStatus } from '../hooks/useLoginStatus';
import LoginModalContent from './LoginModalContent';
import { SweetModal } from './SweetAlert';
import { useRouter } from 'next/router';
import { getLogoutUrl } from '../usecases/getAuthUrl';
import Image from 'next/image';

export const Layout: React.FC = ({ children }) => {
	const isLogin = useLoginStatus();
	const router = useRouter();

	const handleLogout = async () => {
		const result = await SweetModal.fire({
			title: 'ログアウトしますか？',
			text: 'すべてのTwin:teサービスからログアウトします',
			showCancelButton: true,
			confirmButtonText: 'はい',
			cancelButtonText: 'いいえ'
		});
		if (result.isConfirmed) {
			router.push(getLogoutUrl());
		}
	};

	const handleLogin = async () => {
		await SweetModal.fire({
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
					<MobileHeader isLogin={isLogin} handleLogin={handleLogin} handleLogout={handleLogout} />
				</div>
				<div className="column is-one-fifth is-hidden-mobile">
					<Sidebar />
				</div>
				<div className="column">
					<section className="section">
						<header className={`is-hidden-mobile ${styles.header}`}>
							<div className="has-text-right">
								{isLogin == undefined ? (
									<button className="button is-primary is-outlined is-loading" />
								) : (
									<button
										className="button is-primary is-outlined has-text-weight-bold"
										onClick={() => (isLogin ? handleLogout() : handleLogin())}
									>
										{isLogin ? 'ログアウト' : 'ログイン'}
									</button>
								)}
							</div>
						</header>
						<main>{children}</main>
						<footer className={styles.footer}>
							<a href="https://vercel.com?utm_source=twin-te&utm_campaign=oss">
								<Image
									src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg"
									width={212}
									height={44}
									alt="Vercel"
								/>
							</a>
						</footer>
					</section>
				</div>
			</div>
		</>
	);
};

export default Layout;
