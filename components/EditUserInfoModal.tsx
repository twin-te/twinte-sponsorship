import { toast } from 'bulma-toast';
import { Dispatch, SetStateAction, useState } from 'react';
import Modal from 'react-modal';
import { updateUserInfo } from '../api/updateUserInfo';
import styles from '../styles/components/EditUserInfoModal.module.scss';
import { User } from '../types';

type Props = {
	isOpen: boolean;
	onRequestClose: () => void;
	onClose: () => void;
	setCurrentUser: Dispatch<SetStateAction<User | null | undefined>>;
	prevDisplayName: undefined | string;
	prevLink: undefined | string;
};

const EditUserInfoModal: React.FC<Props> = ({
	isOpen,
	onRequestClose,
	onClose,
	setCurrentUser,
	prevDisplayName,
	prevLink
}) => {
	const [displayName, setDisplayName] = useState<string>(prevDisplayName || '');
	const [link, setLink] = useState<string>(prevLink || '');

	const handleUpdateClick = async () => {
		try {
			const user = await updateUserInfo(displayName, link);
			toast({
				message: '情報の更新に成功しました',
				type: 'is-success'
			});
			setCurrentUser(user);
			onClose();
		} catch (error) {
			toast({
				message: 'エラーが発生しました',
				type: 'is-danger'
			});
		}
	};

	const handleCloseClick = () => {
		setDisplayName(prevDisplayName || '');
		setLink(prevLink || '');
		onClose();
	};

	return (
		<Modal isOpen={isOpen} onRequestClose={onRequestClose} className={styles.modal} overlayClassName={styles.overlay}>
			<h1 className="title">ユーザー情報の編集</h1>
			<div className="field">
				<label className="label">表示名</label>
				<div className="control">
					<input
						className="input is-success"
						type="text"
						placeholder="お名前・ユーザーネーム"
						value={displayName}
						onChange={(e) => setDisplayName(e.target.value)}
					/>
				</div>
			</div>

			<div className="field">
				<label className="label">リンク</label>
				<div className="control">
					<input
						className="input"
						type="text"
						placeholder="サイトのURL"
						value={link}
						onChange={(e) => setLink(e.target.value)}
					/>
				</div>
			</div>
			<div className="field is-grouped">
				<div className="control">
					<button className="button is-link" onClick={handleUpdateClick}>
						更新する
					</button>
				</div>
				<div className="control">
					<button className="button is-link is-light" onClick={handleCloseClick}>
						閉じる
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default EditUserInfoModal;
