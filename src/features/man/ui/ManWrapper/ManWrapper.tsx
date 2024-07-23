import {CategoriesCard} from '@/shared/Card'
import {useGetManCategoryQuery} from '@/shared/store/api/category'
import styles from './styles.module.scss'

export const ManWrapper = () => {
	const {data} = useGetManCategoryQuery()

	return (
		<section className={styles.section}>
			{data?.slice(0, 8).map((item) => (
				<CategoriesCard key={item.id} {...item} />
			))}
		</section>
	)
}
