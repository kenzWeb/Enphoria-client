import {Title} from '@/shared/ui/Text'
import styles from './ProfileHeading.module.scss'

export const ProfileHeading = () => {
	return (
		<header>
			<Title marginBottom='10' favorite={false}>
				My Info
			</Title>
			<h2 className={styles.subtitle}>Contact Details</h2>
		</header>
	)
}
