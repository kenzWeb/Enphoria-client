import {Catalog} from '@/entitles/catalog'
import {useGetSimilarProducts} from '@/shared/hooks/queries/products/useGetSimilarProducts'
import {Title} from '@/shared/ui/Text'
import {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import styles from './SimilarProducts.module.scss'

export const SimilarProducts = () => {
	const {id} = useParams<{id: string}>()
	const {data, isLoading, refetch} = useGetSimilarProducts(id!)

	useEffect(() => {
		refetch()
	}, [id, refetch])

	return (
		<section className={styles.container}>
			<Title>Similar Products</Title>
			<Catalog
				key={id}
				size={8}
				products={data ?? []}
				variant='similar'
				category={false}
				isLoading={isLoading}
			/>
		</section>
	)
}
