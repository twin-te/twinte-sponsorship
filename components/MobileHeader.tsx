import styles from '../styles/components/MobileHeader.module.scss';
import Link from 'next/link';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Router from 'next/router';
import Image from 'next/image';
import TwinteLogo from '../public/images/twinte-sponsor-title.png';

const MobileHeader: React.FC = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const toggleDrawer = (state: boolean) => {
		setIsDrawerOpen(() => state);
	};

	// 画面遷移したときに，ドロワーを閉じる
	useEffect(() => {
		Router.events.on('routeChangeStart', () => {
			toggleDrawer(false);
		});
		return () => {
			Router.events.off('routeChangeStart', () => {
				toggleDrawer(false);
			});
		};
	}, []);

	return (
		<header>
			<div className={styles.navbar}>
				<button onClick={() => toggleDrawer(true)} className={`navbar-burger ${styles.navbarBurger}`}>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</button>
				<Link href="/" passHref>
					<Image
						src={TwinteLogo}
						alt="Twin:te_Logo"
						className={styles.logo}
						width={100}
						height={40}
						objectFit="contain"
					/>
				</Link>
			</div>

			<Drawer open={isDrawerOpen} onClose={() => toggleDrawer(false)} direction="left">
				<Sidebar />
			</Drawer>
		</header>
	);
};

export default MobileHeader;
