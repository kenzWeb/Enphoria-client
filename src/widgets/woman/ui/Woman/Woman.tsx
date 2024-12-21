import {Catalog} from '@/entitles/catalog'
import {useGetByGender} from '@/shared/hooks/queries/products/useGetByGender'
import {Title} from '@/shared/ui/Text'
import styles from './styles.module.scss'

export const Woman = () => {
	const {products} = useGetByGender('FEMALE')

	return (
		<section className={styles.section}>
			<Title>Categories For Women</Title>
			<Catalog products={products ?? []} size={4}/>
		</section>
	)
}
