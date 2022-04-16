import { useEffect, useState } from 'react';
import { apiClient } from '../api/apiClient';

export const useLoginStatus = () => {
	// null: ログイン状態を確認できていない
	// boolean: ログイン / ログアウト状態
	const [isLogin, setIsLogin] = useState<null | boolean>(null);

	useEffect(() => {
		(async () => {
			try {
				await apiClient.get('/users/me');
				setIsLogin(true);
			} catch (error) {
				setIsLogin(false);
			}
		})();
	}, []);
	return isLogin;
};
