import axios from 'axios';
import { useEffect, useState } from 'react';

export const useLoginStatus = () => {
	// null: ログイン状態を確認できていない
	// boolean: ログイン / ログアウト状態
	const [isLogin, setIsLogin] = useState<null | boolean>(null);

	useEffect(() => {
		(async () => {
			try {
				await axios.get('https://app.twinte.net/api/v3/users/me');
				setIsLogin(true);
			} catch (error) {
				setIsLogin(false);
			}
		})();
	}, []);
	return isLogin;
};
