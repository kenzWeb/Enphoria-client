import {Accordion} from '@/features/filters'
import {useFilters} from '@/shared/hooks/useFilters'
import {Range} from '@/shared/ui/Other'
import {SideSubTitle} from '../SideSubTitle/SideSubTitle'

export const PriceGroup = () => {
	const {queryParams, updateQueryParams} = useFilters()

	return (
		<SideSubTitle title='Price'>
			{(isOpen: boolean) => (
				<Accordion isOpen={isOpen}>
					<div style={{paddingTop: '40px', paddingBottom: '40px'}}>
						<Range
							max={600}
							fromInitialValue={
								queryParams.minPrice ? Number(queryParams.minPrice) : undefined
							}
							toInitialValue={
								queryParams.maxPrice ? Number(queryParams.maxPrice) : undefined
							}
							onChangeFromValue={(value) =>
								updateQueryParams('minPrice', value.toString())
							}
							onChangeToValue={(value) =>
								updateQueryParams('maxPrice', value.toString())
							}
						/>
					</div>
				</Accordion>
			)}
		</SideSubTitle>
	)
}
