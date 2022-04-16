export type Payment = {
	id: string;
	type: 'OneTime' | 'Subscription';
	status: 'Succeeded' | 'Canceled' | 'Pending';
	amount: number;
	created: string;
};
