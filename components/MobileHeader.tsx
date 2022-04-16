import styles from '../styles/components/MobileHeader.module.scss';
import Link from 'next/link';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Router from 'next/router';

const MobileHeader: React.FC = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const toggleDrawer = () => {
		setIsDrawerOpen((prevState) => !prevState);
	};

	// ドロワーから画面遷移したときに，ドロワーを閉じる
	useEffect(() => {
		Router.events.on('routeChangeStart', toggleDrawer);
		return () => {
			Router.events.off('routeChangeStart', toggleDrawer);
		};
	}, []);

	return (
		<header>
			<div className={styles.navbar}>
				<button onClick={toggleDrawer} className={`navbar-burger ${styles.navbarBurger}`}>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</button>
				<div className="navbar-brand">
					<Link href="/" passHref>
						<img src="/images/twinte-sponsor-title.png" alt="Twin:te_Logo" />
					</Link>
				</div>
			</div>

			<Drawer open={isDrawerOpen} onClose={toggleDrawer} direction="left">
				<Sidebar />
			</Drawer>
		</header>
	);
};

export default MobileHeader;
