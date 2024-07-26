import {CategoriesCard} from '@/shared/Card'
import {useGetLimelightCategoryQuery} from '@/shared/store/api/categoryApi'
import styles from './styles.module.scss'

export const LimelightWrapper = () => {
	const {data} = useGetLimelightCategoryQuery()
	return (
		<div className={styles.container}>
			{data?.slice(0, 4).map((item) => (
				<CategoriesCard
					borderRadius='10px'
					key={item.id}
					favorite={true}
					{...item}
				/>
			))}
		</div>
	)
}
