import {Button} from '@/shared/shad-cn/ui/Button'
import {IProduct} from '@/shared/types/product.interface'
import {type FC} from 'react'

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

	return (
		<div className='text-center mt-16'>
			{Array.from({
				length: numberPages > 1 ? Math.ceil(numberPages) : 1,
			}).map((_, index) => {
				const pageNumber = (index + 1).toString()

				return (
					<Button
						key={pageNumber}
						size='sm'
						variant={
							currentPage === pageNumber ? 'paginationSelect' : 'pagination'
						}
						onClick={() => changePage(pageNumber)}
						className='mx-2.5'
						disabled={currentPage === pageNumber}
					>
						{pageNumber}
					</Button>
				)
			})}
		</div>
	)
}
