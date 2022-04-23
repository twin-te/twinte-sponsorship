import { useState } from 'react';
import Modal from 'react-modal';
import styles from '../styles/components/EditUserInfoModal.module.scss';

type Props = {
	isOpen: boolean;
	onRequestClose: () => void;
	onClose: () => void;
	prevDisplayName: undefined | string;
	prevLink: undefined | string;
};

const EditUserInfoModal: React.FC<Props> = ({ isOpen, onRequestClose, onClose, prevDisplayName, prevLink }) => {
	const [displayName, setDisplayName] = useState<string>(prevDisplayName || '');
	const [link, setLink] = useState<string>(prevLink || '');

	const handleUpdateClick = () => {
		console.log('click');
		onClose();
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
