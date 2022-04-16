import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useLoginStatus } from '../hooks/useLoginStatus';
import Slider from 'react-input-slider';
import { Button, Card, Form } from 'react-bulma-components';
import styles from '../styles/pages/Register.module.scss';
import { registOneTime, registSubscription } from '../api/stripeApi';

const MyPage: NextPage = () => {
	const isLogin = useLoginStatus();
	const [donationPriceIndex, setDonationPriceIndex] = useState(0);
	const donationPrices = [500, 1000, 1500, 2000, 3000, 5000, 7000, 10000];
	const [subscriptionID, setSubscriptionID] = useState('plan_H9D4eZ0Vohpqpy');

	return (
		<>
			<Head>
				<title>寄付・サブスク登録</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<h1 className="title pagetitle">寄付・サブスク登録</h1>
			<Card>
				<h1 className="title">1回きりの決済による寄付</h1>
				<p>
					1回の決済による単発の寄付です。 <br />
					スライダーを動かして金額を設定し、「寄付する」ボタンを押すと、決済ページへ移動します。
				</p>
				<p className={`has-text-centered has-text-primary ${styles.price}`}>¥{donationPrices[donationPriceIndex]}</p>
				<div className={styles.slider}>
					<Slider
						styles={{
							active: {
								backgroundColor: '#00c0c0'
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
					className="is-primary"
					fullwidth={true}
					onClick={() => {
						registOneTime(donationPrices[donationPriceIndex]);
					}}
				>
					寄付する
				</Button>
			</Card>

			<Card>
				<h1 className="title">サブスクリプション（毎月のお支払い）の登録</h1>
				<p>
					毎月決済が行われるサブスクリプションです。
					<br />
					月ごとにお支払いいただく金額を下記から選択し、「登録する」ボタンを押すと、決済ページへ移動します。
				</p>
				<div style={{ margin: '2rem 0 2rem 0' }}>
					<div className="field has-text-weight-bold">
						<Form.Radio
							name="priceChoice"
							value="plan_H9D4eZ0Vohpqpy"
							onChange={(elm) => {
								setSubscriptionID(elm.target.value);
							}}
						>
							200円/月
						</Form.Radio>
					</div>
					<div className="field has-text-weight-bold">
						<Form.Radio
							name="priceChoice"
							value="plan_H9D4AJchCmsejL"
							onChange={(elm) => {
								setSubscriptionID(elm.target.value);
							}}
						>
							500円/月
						</Form.Radio>
					</div>
					<div className="field has-text-weight-bold">
						<Form.Radio
							name="priceChoice"
							value="plan_H9D48FqtiALjlL"
							onChange={(elm) => {
								setSubscriptionID(elm.target.value);
							}}
						>
							1000円/月
						</Form.Radio>
					</div>
				</div>
				<Button
					className="is-primary"
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

export default MyPage;
