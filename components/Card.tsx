import styles from '../styles/components/Card.module.scss';

export const Card: React.FC = ({ children }) => {
	return <div className={styles.card}>{children}</div>;
};

export default Card;
