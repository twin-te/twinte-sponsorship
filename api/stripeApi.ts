import { apiClient } from './apiClient';
import { loadStripe } from '@stripe/stripe-js/pure';

interface stripeResponse {
	sessionId: string;
}

export const registOneTime = async (price: number) => {
	const stripe = await loadStripe('pk_live_wnnqlGjrN71cV9uwBXDvNQJP009Chm8Nt0');
	apiClient
		.post<stripeResponse>('/donation/session/onetime', {
			amount: price
		})
		.then((response) => {
			const sessionId = response.data.sessionId;
			stripe
				?.redirectToCheckout({
					sessionId
				})
				.then(function (err) {
					console.error(err);
				});
		});
};

export const registSubscription = async (plan: string) => {
	const stripe = await loadStripe('pk_live_wnnqlGjrN71cV9uwBXDvNQJP009Chm8Nt0');
	apiClient
		.post<stripeResponse>('/donation/session/subscription', {
			planId: plan
		})
		.then((response) => {
			const sessionId = response.data.sessionId;
			stripe
				?.redirectToCheckout({
					sessionId
				})
				.then(function (err) {
					console.error(err);
				});
		});
};
