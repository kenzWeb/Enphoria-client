import {Catalog} from '@/entitles/catalog'
import {useGetByGender} from '@/shared/hooks/queries/products/useGetByGender'
import {Title} from '@/shared/ui/Text'
import styles from './styles.module.scss'

export const Man = () => {
	const {products, isLoading} = useGetByGender('MALE')

	return (
		<div className={styles.section}>
			<Title>Categories For Men</Title>
			<Catalog products={products ?? []} isLoading={isLoading} size={8} />
		</div>
	)
}
