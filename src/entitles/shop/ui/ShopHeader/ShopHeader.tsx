import {Sort} from '@/entitles/sort'
import {useFilters} from '@/shared/hooks/useFilters'

export const ShopHeader = () => {
	const {queryParams} = useFilters()
	return (
		<div className='flex items-center justify-between mb-[5rem]'>
			<h2 className='text-[22px] font-semibold'>
				{queryParams.gender?.toString() === 'female'
					? 'Women’s Clothing'
					: 'Men’s Clothing'}
			</h2>

			<div>
				<Sort />
			</div>
		</div>
	)
}
