import {Badge} from '@/shared/shad-cn/ui/Badge'
import {Button} from '@/shared/shad-cn/ui/Button'
import {IoCartOutline} from 'react-icons/io5'
import {IProductActions} from '../../model/types'

export const ProductActions = ({price, onAddToCart}: IProductActions) => {
	return (
		<div className='flex gap-[2.5rem] mt-[3.6rem]'>
			<Button
				onClick={onAddToCart}
				className='gap-[14px]'
				variant='violet'
				size='md'
			>
				<IoCartOutline size={16} />
				<h2>Add to cart</h2>
			</Button>
			<Badge variant='priceOutlineBlack' size='md'>
				{`$${price}.00`}
			</Badge>
		</div>
	)
}
