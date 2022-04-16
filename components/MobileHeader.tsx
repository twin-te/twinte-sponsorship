import styles from '../styles/components/MobileHeader.module.scss';
import Link from 'next/link';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { useState } from 'react';
import Sidebar from './Sidebar';
import { useRouter } from 'next/router';

const MobileHeader: React.FC = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const toggleDrawer = () => {
		setIsDrawerOpen((prevState) => !prevState);
	};

	// ドロワーから画面遷移したときに，ドロワーを閉じる
	const router = useRouter();
	router.events?.on('routeChangeComplete', () => toggleDrawer());

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
