import styles from '../styles/Sidebar.module.scss';
import Link from 'next/link';

const Sidebar: React.FC = () => {
	return (
		<aside className={styles.sidebar}>
			<div className={styles.menu_content}>
				<div className={styles.logo}>
					<a href="https://sponsorship.twinte.net">
						<img src="/images/twinte-sponsor-title.png" alt="Twin:te_Logo" />
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
			<div className={`${styles.menu_footer} has-text-white`}>
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
