import {Catalog} from '@/entitles/catalog'
import {Pagination} from '@/entitles/pagination'
import {ShopHeader} from '@/entitles/shop'
import {useFilters} from '@/shared/hooks/useFilters'
import {productService} from '@/shared/services/products.service'
import {IPaginationProducts} from '@/shared/types/filter.interface'
import {Loader} from '@/shared/ui/Other'
import {useQuery} from '@tanstack/react-query'
import styles from './Shop.module.scss'

interface IProductExplorer {
	initialProducts: IPaginationProducts
}

export const Shop = ({initialProducts}: IProductExplorer) => {
	const {queryParams, isFilterUpdated, updateQueryParams} = useFilters()

	const {data, isLoading, isPending, isRefetching, isFetching} = useQuery({
		queryKey: [
			'products',
			{...queryParams, perPage: 6, page: queryParams.page || 2},
		],
		queryFn: () =>
			productService.getAll({
				...queryParams,
				perPage: 6,
				page: queryParams.page,
			}),
		enabled: isFilterUpdated,
		initialData: initialProducts,
		gcTime: 10 * 60 * 1000,
	})

	if (isLoading || isPending) {
		return (
			<div className={styles.loader}>
				<Loader />
			</div>
		)
	}

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<ShopHeader />
				<Catalog
					products={data.data}
					category={false}
					isLoading={isPending || isFetching || isRefetching || isLoading}
					variant='shop'
				/>
				<Pagination
					product={data.data}
					changePage={(page) => updateQueryParams('page', page.toString())}
					currentPage={queryParams.page?.toString()}
					numberPages={data.length / +(queryParams.perPage || 6)}
				/>
			</div>
		</div>
	)
}
