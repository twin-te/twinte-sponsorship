import { useState } from 'react';
import type { NextPage } from 'next';
import { useLoginStatus } from '../hooks/useLoginStatus';
import Slider from 'react-input-slider';
import styles from '../styles/pages/Register.module.scss';
import { registOneTime, registSubscription } from '../api/stripeApi';
import {
	stripeSubscription200yenID,
	stripeSubscription500yenID,
	stripeSubscription1000yenID
} from '../usecases/stripe';
import { NextSeo } from 'next-seo';
import { SweetModal } from '../components/SweetAlert';
import { RadioButton } from '../components/RadioButton';

const Register: NextPage = () => {
	const isLogin = useLoginStatus();
	const [donationPriceIndex, setDonationPriceIndex] = useState(0);
	const donationPrices = [500, 1000, 1500, 2000, 3000, 5000, 7000, 10000];
	const [subscriptionID, setSubscriptionID] = useState(stripeSubscription200yenID);

	const confirmRegistOneTime = async () => {
		const result = await SweetModal.fire({
			title: 'ログインをせずに続けますか？',
			text: 'ログインをしなくても単発の寄付はできますが、履歴に残らず返礼品等の申請ができません。ログインしないまま寄付しますか？',
			showCancelButton: true,
			confirmButtonText: 'はい',
			cancelButtonText: 'いいえ'
		});
		if (result.isConfirmed) {
			registOneTime(donationPrices[donationPriceIndex]);
		}
	};
	const confirmRegistSubscription = async () => {
		await SweetModal.fire({
			title: 'ログインをしてください。',
			text: '継続的な寄付をするには、右上のログインボタンよりログインをしてください。',
			showCancelButton: false,
			confirmButtonText: 'はい'
		});
	};

	const radioButtons = () => {
		const subscriptions = [
			{ planId: stripeSubscription200yenID, label: '200円/月' },
			{ planId: stripeSubscription500yenID, label: '500円/月' },
			{ planId: stripeSubscription1000yenID, label: '1000円/月' }
		];
		return subscriptions.map((plan, index) => {
			return (
				<div key={index} className="field has-text-weight-bold">
					<RadioButton
						defaultChecked={index === 0}
						name="priceChoice"
						id={`plan_${index}`}
						value={plan.planId}
						onChange={(inputValue) => {
							setSubscriptionID(inputValue);
						}}
					>
						{plan.label}
					</RadioButton>
				</div>
			);
		});
	};

	return (
		<>
			<NextSeo title="寄付・サブスク登録" />
			<h1 className="title pagetitle">寄付・サブスク登録</h1>
			<div className="card">
				<h1 className={`title ${styles.title}`}>1回きりの決済による寄付</h1>
				<p>
					1回の決済による単発の寄付です。 <br />
					スライダーを動かして金額を設定し、「寄付する」ボタンを押すと、決済ページへ移動します。
				</p>
				<p className={`has-text-centered has-text-primary ${styles.price}`}>¥{donationPrices[donationPriceIndex]}</p>
				<div className={styles.slider}>
					<Slider
						styles={{
							active: {
								backgroundColor: '#97C3C3'
							},
							track: {
								width: '100%'
							},
							thumb: {
								height: '1.5rem',
								width: '1.5rem',
								border: 'solid 0.4rem #00c0c0'
							}
						}}
						axis="x"
						xmin={0}
						xmax={7}
						x={donationPriceIndex}
						onChange={(price) => setDonationPriceIndex(price.x)}
					/>
				</div>
				<p className="has-text-primary">
					ご協力いただく金額で、Twin:teを
					<span style={{ fontWeight: 'bold' }}>
						{Math.round((Math.floor(donationPrices[donationPriceIndex] * 0.964) / 5000) * 100) / 100}ヶ月
					</span>
					運営することができます。
				</p>
				<p style={{ color: '#9A9A9A' }}>
					※手数料を差し引くとTwin:teには{donationPrices[donationPriceIndex] * 0.964}円寄付されます。
				</p>
				<button
					className={`button is-fullwidth is-primary ${styles.buttons}`}
					onClick={() => {
						isLogin ? registOneTime(donationPrices[donationPriceIndex]) : confirmRegistOneTime();
					}}
				>
					寄付する
				</button>
			</div>

			<div className="card">
				<h1 className={`title ${styles.title}`}>サブスクリプション（毎月のお支払い）の登録</h1>
				<p>
					毎月決済が行われるサブスクリプションです。
					<br />
					月ごとにお支払いいただく金額を下記から選択し、「登録する」ボタンを押すと、決済ページへ移動します。
				</p>
				<div style={{ margin: '2rem 0 2rem 0' }} className="field">
					{radioButtons()}
				</div>
				<button
					className={`button is-fullwidth is-primary ${styles.buttons}`}
					onClick={() => {
						isLogin ? registSubscription(subscriptionID) : confirmRegistSubscription();
					}}
				>
					登録する
				</button>
			</div>
		</>
	);
};

export default Register;
