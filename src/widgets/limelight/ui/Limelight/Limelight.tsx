import {Catalog} from '@/entitles/catalog'
import {Title} from '@/shared/ui/Text'
import styles from './styles.module.scss'
import { useGetProductByType } from '@/shared/hooks/queries/products/useGetProductByType'

export const Limelight = () => {
	const {data, isLoading} = useGetProductByType('LIMELIGHT')

	return (
		<section className={styles.section}>
			<Title>In The Limelight</Title>
			<Catalog products={data ?? []} isLoading={isLoading} category={false} size={4}/>
		</section>
	)
}
