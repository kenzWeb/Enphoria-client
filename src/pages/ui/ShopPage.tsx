import {productService} from '@/shared/services/products.service'
import {useFilterStore} from '@/shared/store/filter.store'
import {IPaginationProducts} from '@/shared/types/filter.interface'
import {Sidebar} from '@/widgets/filters'
import {Shop} from '@/widgets/shop'
import {useEffect, useState} from 'react'
import {useSearchParams} from 'react-router-dom'

export const ShopPage = () => {
	const {queryParams} = useFilterStore()
	const [searchParams] = useSearchParams()

	const [products, setProducts] = useState<IPaginationProducts>()

	useEffect(() => {
		const fetchProducts = async () => {
			const data = await productService.getAll({
				...queryParams,
				perPage: 6,
				page: queryParams.page,
			})
			setProducts(data)
		}

		fetchProducts()
	}, [queryParams, searchParams])

	return (
		<div className='container'>
			<div className='flex flex-start gap-[5rem]'>
				<Sidebar />
				<Shop initialProducts={products ?? {length: 0, data: []}} />
			</div>
		</div>
	)
}
