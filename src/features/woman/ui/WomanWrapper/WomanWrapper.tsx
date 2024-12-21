import {useGetWomanCategoryQuery} from '@/shared/store/api/categoryApi'
import styles from './styles.module.scss'

export const WomanWrapper = () => {
	const {data} = useGetWomanCategoryQuery()

	return (
		<div className={styles.section}>
			{data?.slice(0, 4).map((item) => (
				<h2>asdasd</h2>
			))}
		</div>
	)
}
