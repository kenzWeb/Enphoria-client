import {IProduct} from '@/shared/types/product.interface'
import * as m from 'motion/react-m'
import {HeaderSearchResultItem} from '../HeaderSearchResultItem/HeaderSearchResultItem'

interface HeaderSearchResultsProps {
	data: IProduct[]
	onClose: () => void
}

export const HeaderSearchResults = ({
	data,
	onClose,
}: HeaderSearchResultsProps) => {
	return (
		<m.div
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
			transition={{duration: 0.2}}
		>
			{data.length ? (
				data.map((product: IProduct) => (
					<HeaderSearchResultItem
						key={product?.id || Math.random()}
						product={product}
						onClick={onClose}
					/>
				))
			) : (
				<m.div
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					exit={{opacity: 0}}
					className='p-6 text-center text-gray-500'
				>
					No results found
				</m.div>
			)}
		</m.div>
	)
}
