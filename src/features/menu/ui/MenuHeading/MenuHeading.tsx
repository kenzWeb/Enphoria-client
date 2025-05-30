import {useProfile} from '@/shared/hooks/api/useProfile'
import {Loader} from '@/shared/ui/Other'
import {Title} from '@/shared/ui/Text'
import styles from './MenuHeading.module.scss'

export const MenuHeading = () => {
	const {user, isLoading} = useProfile()
	return (
		<header className={styles.heading}>
			{isLoading && <Loader />}
			{!isLoading && user && (
				<Title marginBottom='10' className={styles.title}>
					Hello, {user.name}
				</Title>
			)}

			<h2 className={styles.subtitle}>Welcome to your Account</h2>
		</header>
	)
}
