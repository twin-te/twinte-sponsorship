import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Script from 'next/script';

const Success: NextPage = () => {
	const router = useRouter();
	const { type, amount } = router.query;

	const getTypeText = () => {
		if (typeof type !== 'string') return '';

		if (type === 'onetime') return '1回きりの寄付';
		else if (type === 'subscription') return 'サブスクリプション寄付（継続寄付）';
		else return '';
	};
	const amountText = typeof amount === 'string' && /^[0-9]+(\.[0-9]+)?$/.test(amount) ? amount : '0';

	const getTwitterText = () => {
		if (typeof type !== 'string') return 'Twin:teに寄付しました！';

		if (type === 'onetime') return `Twin:teに${amount}円を寄付しました！`;
		else if (type === 'subscription') return `Twin:teに月課金として${amount}円/月の寄付登録をしました！`;
		else return 'Twin:teに寄付しました！';
	};

	return (
		<>
			<NextSeo title="寄付完了" />
			<h1 className="title">ありがとうございました！</h1>
			<h2 className="has-text-weight-bold">{getTypeText()}</h2>
			<p className="has-text-centered has-text-primary has-text-weight-bold is-size-2">¥{amountText}</p>
			<p>
				以上の金額が寄付されました。
				<br />
				<Link href="/mypage">マイページ</Link>
				からユーザー情報の編集や寄付の履歴が確認できます。
			</p>
			<p className="mt-4">
				<a
					href="https://twitter.com/share?ref_src=twsrc%5Etfw"
					className="twitter-share-button"
					data-text={getTwitterText()}
					data-size="large"
					data-url="https://sponsorship.twinte.net"
					data-via="te_twin"
					data-hashtags="Twinte"
					data-related="te_twin"
					data-show-count="false"
				>
					Tweet
				</a>
				<Script async src="https://platform.twitter.com/widgets.js" charSet="utf-8" />
			</p>
		</>
	);
};

export default Success;
