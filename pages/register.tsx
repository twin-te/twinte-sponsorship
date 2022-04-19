import { useState } from 'react';
import type { NextPage } from 'next';
import { useLoginStatus } from '../hooks/useLoginStatus';
import Slider from 'react-input-slider';
import { Button, Card } from 'react-bulma-components';
import styles from '../styles/pages/Register.module.scss';
import { registOneTime, registSubscription } from '../api/stripeApi';
import {
	stripeSubscription200yenID,
	stripeSubscription500yenID,
	stripeSubscription1000yenID
} from '../usecases/stripe';
import { NextSeo } from 'next-seo';

const Register: NextPage = () => {
	const isLogin = useLoginStatus();
	const [donationPriceIndex, setDonationPriceIndex] = useState(0);
	const donationPrices = [500, 1000, 1500, 2000, 3000, 5000, 7000, 10000];
	const [subscriptionID, setSubscriptionID] = useState(stripeSubscription200yenID);

	return (
		<>
			<NextSeo title="寄付・サブスク登録" />
			<h1 className="title pagetitle">寄付・サブスク登録</h1>
			<Card>
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
				<Button
					className={`is-primary ${styles.buttons}`}
					fullwidth={true}
					onClick={() => {
						registOneTime(donationPrices[donationPriceIndex]);
					}}
				>
					寄付する
				</Button>
			</Card>

			<Card>
				<h1 className={`title ${styles.title}`}>サブスクリプション（毎月のお支払い）の登録</h1>
				<p>
					毎月決済が行われるサブスクリプションです。
					<br />
					月ごとにお支払いいただく金額を下記から選択し、「登録する」ボタンを押すと、決済ページへ移動します。
				</p>
				<div style={{ margin: '2rem 0 2rem 0' }} className="field">
					<div className="field has-text-weight-bold">
						<input
							className="is-checkradio"
							type="radio"
							name="priceChoice"
							id="radio1"
							onChange={() => {
								setSubscriptionID(stripeSubscription200yenID);
							}}
						/>
						<label htmlFor="radio1">200円/月</label>
					</div>
					<div className="field has-text-weight-bold">
						<input
							className="is-checkradio"
							type="radio"
							name="priceChoice"
							id="radio2"
							onChange={() => {
								setSubscriptionID(stripeSubscription500yenID);
							}}
						/>
						<label htmlFor="radio2">500円/月</label>
					</div>
					<div className="field has-text-weight-bold">
						<input
							className="is-checkradio"
							type="radio"
							name="priceChoice"
							id="radio3"
							onChange={() => {
								setSubscriptionID(stripeSubscription1000yenID);
							}}
						/>
						<label htmlFor="radio3">1000円/月</label>
					</div>
				</div>
				<Button
					className={`is-primary ${styles.buttons}`}
					fullwidth={true}
					onClick={() => {
						isLogin ? registSubscription(subscriptionID) : alert('ログインしろ');
					}}
				>
					寄付する
				</Button>
			</Card>
		</>
	);
};

export default Register;
