import styles from '../styles/components/Sidebar.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import TwinteLogo from '../public/images/twinte-sponsor-title.png'

const Sidebar: React.FC = () => {
	return (
		<aside className={styles.sidebar}>
			<div className={styles.menuContent}>
				<div className={styles.logo}>
					<a href="https://sponsorship.twinte.net">
						<Image src={TwinteLogo} alt="Twin:te_Logo" />
					</a>
				</div>
				<ul className="menu-list">
					<li>
						<Link href="/">寄附のお願い</Link>
					</li>
					<li>
						<Link href="register">寄付・サブスク登録</Link>
					</li>
					<li>
						<Link href="mypage">マイページ</Link>
					</li>
					<li>
						<Link href="gift">返礼品一覧</Link>
					</li>
				</ul>
			</div>
			<div className={`${styles.menuFooter} has-text-white`}>
				<p>
					<span className="has-text-weight-bold">WEB SITE</span>
					<br />
					<a href="https://www.twinte.net">www.twinte.net</a>
				</p>
				<p>
					<span className="has-text-weight-bold">Twitter</span>
					<br />
					<a href="https://twitter.com/te_twin">@te_twin</a>
				</p>
				<p>
					<span className="has-text-weight-bold">E-mail</span>
					<br />
					<a href="mailto:info@twinte.net?subject=お問い合わせ">info@twinte.net</a>
				</p>
			</div>
		</aside>
	);
};

export default Sidebar;
