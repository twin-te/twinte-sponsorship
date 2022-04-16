import axios from 'axios';
import { useEffect, useState } from 'react';
import { User } from '../types';

export const useCurrentUser = () => {
	// undefined: API呼び出しが完了していない状態
	// null: API呼び出し中にエラーが発生した状態
	const [currentUser, setCurrentUser] = useState<undefined | null | User>(undefined);

	useEffect(() => {
		(async () => {
			try {
				const res = await axios.get('https://app.twinte.net/api/v3/donation/users/me');
				setCurrentUser(res.data);
			} catch (error) {
				console.error(error);
				setCurrentUser(null);
			}
		})();
	}, []);
	return currentUser;
};
