import { getLoginUrl } from '../usecases/getAuthUrl';

const LoginModalContent = (
	<>
		<p>Twin:teアプリと同じアカウントでログインすることができます。</p>
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
		</div>
	</>
);

export default LoginModalContent;
