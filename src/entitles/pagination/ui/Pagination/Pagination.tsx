import {Button} from '@/shared/shad-cn/ui/Button'
import {IProduct} from '@/shared/types/product.interface'
import {type FC} from 'react'
import styles from './Pagination.module.scss'

interface IPagination {
	numberPages: number
	changePage: (page: string) => void
	currentPage?: string
	product: IProduct[]
}

export const Pagination: FC<IPagination> = ({
	numberPages,
	changePage,
	currentPage = 1,
	product,
}) => {
	if (!product.length || numberPages <= 1) {
		return null
	}

	const totalPages = Math.ceil(numberPages)
	const currentPageNum = parseInt(currentPage.toString())

	return (
		<div className={styles.container}>
			<div className={styles.navigation}>
				{Array.from({length: totalPages}).map((_, index) => {
					const pageNumber = (index + 1).toString()
					const isSelected = currentPage === pageNumber

					return (
						<Button
							key={pageNumber}
							variant={isSelected ? 'paginationSelect' : 'pagination'}
							size='nav'
							className={`${styles.pageButton} ${
								isSelected ? styles.pageButtonSelected : ''
							}`}
							onClick={() => changePage(pageNumber)}
							disabled={isSelected}
						>
							{pageNumber}
						</Button>
					)
				})}
			</div>
			<div className={styles.pageInfo}>
				Page {currentPageNum} of {totalPages}
			</div>
		</div>
	)
}
