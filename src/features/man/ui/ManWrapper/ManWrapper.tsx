import {CategoriesCard} from '@/features/card'
import {useGetManCategoryQuery} from '@/shared/store/api/categoryApi'
import styles from './styles.module.scss'

export const ManWrapper = () => {
	const {data} = useGetManCategoryQuery()

	return (
		<section className={styles.container}>
			{data?.slice(0, 8).map((item) => (
				<CategoriesCard key={item.id} {...item} />
			))}
		</section>
	)
}
