import { productService } from '@/shared/services/products.service'
import { Button } from '@/shared/shad-cn/ui/index'
import { useFilterStore } from '@/shared/store/filter.store'
import { IPaginationProducts } from '@/shared/types/filter.interface'
import { Shop } from '@/widgets/shop'
import { Sidebar } from '@/widgets/sidebar'
import { ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styles from './ShopPage.module.scss'

export const ShopPage = () => {
	const {queryParams} = useFilterStore()
	const [searchParams] = useSearchParams()
	const [products, setProducts] = useState<IPaginationProducts>()
	const [isFiltersOpen, setIsFiltersOpen] = useState(false)
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const checkIsMobile = () => {
			setIsMobile(window.innerWidth <= 767)
		}

		checkIsMobile()
		window.addEventListener('resize', checkIsMobile)

		return () => window.removeEventListener('resize', checkIsMobile)
	}, [])

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

	const toggleFilters = () => {
		setIsFiltersOpen(!isFiltersOpen)
	}

	return (
		<div className={styles.container}>
			{isMobile ? (
				<div className={styles.shopLayoutMobile}>
					<div className={styles.mobileFilters}>
						<Button
							variant='secondary'
							size='default'
							className={`${styles.filtersToggle} ${
								isFiltersOpen ? styles.active : ''
							}`}
							onClick={toggleFilters}
						>
							Filters
							<ChevronDown size={20} />
						</Button>
						<div
							className={`${styles.collapsibleFilters} ${
								isFiltersOpen ? styles.open : styles.closed
							}`}
						>
							<Sidebar />
						</div>
					</div>
					<div className={styles.shopSection}>
						<Shop initialProducts={products ?? {length: 0, data: []}} />
					</div>
				</div>
			) : (
				<div className={styles.shopLayout}>
					<div className={styles.sidebarSection}>
						<Sidebar />
					</div>
					<div className={styles.shopSection}>
						<Shop initialProducts={products ?? {length: 0, data: []}} />
					</div>
				</div>
			)}
		</div>
	)
}
