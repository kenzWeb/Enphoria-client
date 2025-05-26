import {useProfile} from '@/shared/hooks/api/useProfile'
import {Title} from '@/shared/ui/Text'
import styles from './MenuHeading.module.scss'

export const MenuHeading = () => {
	const {user} = useProfile()
	return (
		<header className={styles.heading}>
			<Title marginBottom='10' className={styles.title}>Hello {user?.name}</Title>
			<h2 className={styles.subtitle}>Welcome to your Account</h2>
		</header>
	)
}
