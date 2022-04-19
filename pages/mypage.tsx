import dayjs from 'dayjs';
import type { NextPage } from 'next';
import { Button, Card } from 'react-bulma-components';
import { useCurrentUser } from '../hooks/useCurrentUser';
import { useLoginStatus } from '../hooks/useLoginStatus';
import { usePaymentHistory } from '../hooks/usePaymentHistory';
import { useSubscriptions } from '../hooks/useSubscriptions';
import { cancelSubscription } from '../api/stripeApi';
import { useRouter } from 'next/router';
import { PaymentTypeMap } from '../types/Payment';
import { NextSeo } from 'next-seo';

const MyPage: NextPage = () => {
	const isLogin = useLoginStatus();
	const currentUser = useCurrentUser();
	const subscriptions = useSubscriptions();
	const paymentHistory = usePaymentHistory();
	const router = useRouter();

	const handleClick = async (id: string) => {
		try {
			await cancelSubscription(id);
			alert('解約に成功しました');
			router.reload();
		} catch (error) {
			console.error(error);
			alert('エラーが発生しました');
		}
	};

	if (isLogin === undefined || currentUser === undefined || subscriptions === undefined || paymentHistory === undefined)
		return <div>loading...</div>;

	return (
		<>
			<NextSeo title="マイページ" />
			<div>
				{isLogin ? (
					<>
						<h1 className="title pagetitle">マイページ</h1>
						<Card>
							<h2 className="title">ユーザ情報</h2>
							<div className="content">
								<p>
									<a href="https://www.twinte.net/sponsor">寄附者一覧</a>
									に表示するお名前とリンクです。
								</p>
								{currentUser ? (
									<>
										<p className="has-text-primary has-text-weight-bold is-marginless">ID</p>
										<p>{currentUser.twinteUserId}</p>

										<p className="has-text-primary has-text-weight-bold is-marginless">現在の表示名</p>
										<p>{currentUser.displayName || '未設定'}</p>

										<p className="has-text-primary has-text-weight-bold is-marginless">リンク</p>
										<p>{currentUser.link || '未設定'}</p>
									</>
								) : (
									<div>情報の取得に失敗しました。</div>
								)}
							</div>
						</Card>

						<Card>
							<h2 className="title">サブスクリプションの登録状況</h2>
							<div className="content">
								<p className="has-text-primary has-text-weight-bold">ご利用中のプラン</p>
								{subscriptions != null ? (
									subscriptions.length ? (
										<table>
											<thead>
												<tr>
													<th>プラン</th>
													<th>登録日</th>
													<th>解約</th>
												</tr>
											</thead>
											<tbody>
												{subscriptions
													.filter((subscription) => subscription.status === 'Active')
													.map((subscription) => (
														<tr key={subscription.id}>
															<td>{subscription.plans[0].name}</td>
															<td>{dayjs(subscription.created).format('YYYY.MM.DD')}</td>
															<td>
																<Button
																	className="is-danger is-outlined is-small"
																	onClick={() => handleClick(subscription.id)}
																>
																	解約
																</Button>
															</td>
														</tr>
													))}
											</tbody>
										</table>
									) : (
										<div>ご利用中のプランはありません。</div>
									)
								) : (
									<div>情報の取得に失敗しました。</div>
								)}
							</div>
						</Card>

						<Card>
							<h2 className="title">寄付の履歴</h2>
							<div className="content">
								{paymentHistory != null ? (
									paymentHistory.length ? (
										<table>
											<thead>
												<tr>
													<th>日付</th>
													<th>金額</th>
													<th>種別</th>
												</tr>
											</thead>
											<tbody>
												{paymentHistory
													.filter((payment) => payment.status === 'Succeeded')
													.map((payment) => (
														<tr key={payment.id}>
															<td>{dayjs(payment.created).format('YYYY.MM.DD')}</td>
															<td>
																<p>{payment.amount}円</p>
															</td>
															<td>
																<p className="has-text-grey">{PaymentTypeMap[payment.type]}</p>
															</td>
														</tr>
													))}
											</tbody>
										</table>
									) : (
										<div>寄付の履歴はありません。</div>
									)
								) : (
									<div>情報の取得に失敗しました。</div>
								)}
							</div>
						</Card>
					</>
				) : (
					<p>右上のログインボタンからログインしてください。</p>
				)}
			</div>
		</>
	);
};

export default MyPage;
