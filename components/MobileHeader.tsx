import styles from '../styles/MobileHeader.module.scss';
import Link from 'next/link';

const MobileHeader: React.FC = () => {
	return (
		<header className={styles.header}>
			<Link href="/" passHref>
				<img src="/images/twinte-sponsor-title.png" alt="Twin:te_Logo" />
			</Link>
		</header>
	);
};

export default MobileHeader;
