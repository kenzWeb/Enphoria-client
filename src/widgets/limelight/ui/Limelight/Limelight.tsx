import {LimelightWrapper} from '@/entitles/limelight'
import {Title} from '@/shared/Text'
import styles from './styles.module.scss'

export const Limelight = () => {
	return (
		<section className={styles.section}>
			<Title>In The Limelight</Title>
			<LimelightWrapper />
		</section>
	)
}
