import {CategoriesCard} from '@/shared/Card'
import {useGetWomanCategoryQuery} from '@/shared/store/api/category'
import styles from './styles.module.scss'

export const WomanWrapper = () => {
	const {data} = useGetWomanCategoryQuery()

	return (
		<div className={styles.section}>
			{data?.slice(0, 4).map((item) => (
				<CategoriesCard borderRadius='10px' key={item.id} {...item} />
			))}
		</div>
	)
}
