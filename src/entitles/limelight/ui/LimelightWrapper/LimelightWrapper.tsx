
import {useGetLimelightCategoryQuery} from '@/shared/store/api/categoryApi'
import styles from './styles.module.scss'

export const LimelightWrapper = () => {
	const {data} = useGetLimelightCategoryQuery()
	return (
		<div className={styles.container}>
			{data?.slice(0, 4).map((item) => (
				<h2>asdasd</h2>
			))}
		</div>
	)
}
