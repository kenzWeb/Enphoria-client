import { useFilters } from '@/shared/hooks/useFilters'
import { Checkbox } from '@/shared/shad-cn/ui/Checkbox'
import { Label } from '@/shared/shad-cn/ui/Label'
import styles from './FiltersList.module.scss'

interface BaseItem {
	id: number | string
	name: string
}

interface Props<T extends BaseItem> {
	data: T[]
	filter: string
}

export const FiltersList = <T extends BaseItem>({data}: Props<T>) => {
	const {queryParams, updateQueryParams} = useFilters()

	return (
		<div className={styles.wrapper}>
			{data.map((item) => (
				<div key={item.id} className='flex items-center space-x-4'>
					<Checkbox
						className={styles.checkbox}
						id={item.name}
					/>
					<Label className={styles.label} htmlFor={item.name}>
						{item.name}
					</Label>
				</div>
			))}
		</div>
	)
}
