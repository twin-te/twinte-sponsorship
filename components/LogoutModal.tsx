import { Button, Modal } from 'react-bulma-components';
import { getLogoutUrl } from '../usecases/getAuthUrl';

type Props = {
	show: boolean;
	onClose: () => void;
};

const LogoutModal: React.FC<Props> = ({ show, onClose }) => {
	return (
		<Modal show={show} onClose={onClose}>
			<Modal.Card>
				<Modal.Card.Header>
					<Modal.Card.Title>ログアウトしますか？</Modal.Card.Title>
				</Modal.Card.Header>
				<Modal.Card.Body>
					<p>すべてのTwin:teサービスからログアウトします。</p>
				</Modal.Card.Body>
				<Modal.Card.Footer>
					<Button className="is-info">
						<a href={getLogoutUrl()}>はい</a>
					</Button>
					<Button onClick={onClose}>いいえ</Button>
				</Modal.Card.Footer>
			</Modal.Card>
		</Modal>
	);
};

export default LogoutModal;
