import { Button, Modal } from 'react-bulma-components';
import { getLoginUrl } from '../usecases/getAuthUrl';

type Props = {
	show: boolean;
	onClose: () => void;
};

const LoginModal: React.FC<Props> = ({ show, onClose }) => {
	return (
		<Modal show={show} onClose={onClose}>
			<Modal.Card>
				<Modal.Card.Header>
					<Modal.Card.Title>どのアカウントでログインしますか？</Modal.Card.Title>
				</Modal.Card.Header>
				<Modal.Card.Body>
					<p className="has-text-centered">Twin:teアプリと同じアカウントでログインすることができます。</p>
					<div className="has-text-centered">
						<div>
							<a href={getLoginUrl('apple')}>
								<img width="250" src="/images/auth/sign-in-with-apple.png" alt="sign in with apple" />
							</a>
						</div>
						<div>
							<a href={getLoginUrl('twitter')}>
								<img width="250" src="/images/auth/sign-in-with-twitter.png" alt="sign in with twitter" />
							</a>
						</div>
						<div>
							<a href={getLoginUrl('google')}>
								<img width="250" src="/images/auth/sign-in-with-google.png" alt="sign in with google" />
							</a>
						</div>
						<Button onClick={onClose}>閉じる</Button>
					</div>
				</Modal.Card.Body>
			</Modal.Card>
		</Modal>
	);
};

export default LoginModal;
