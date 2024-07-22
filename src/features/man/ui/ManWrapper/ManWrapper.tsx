import {ManCard} from '@/entitles/man'
import {useGetCategoryQuery} from '@/shared/store/api/manCategory'
import styles from './styles.module.scss'

export const ManWrapper = () => {
	const {data} = useGetCategoryQuery()

	return (
		<section className={styles.section}>
			{data?.slice(0, 8).map((item) => (
				<ManCard key={item.id} {...item} />
			))}
		</section>
	)
}
