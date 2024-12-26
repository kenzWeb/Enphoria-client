import {useFilters} from '@/shared/hooks/useFilters'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/shad-cn/ui/Select'
import {EnumProductSort} from '@/shared/types/product.interface'
import styles from './Sort.module.scss'

export const Sort = () => {
	const {updateQueryParams} = useFilters()

	return (
		<div className={styles.wrapper}>
			<Select onValueChange={(value) => updateQueryParams('sort', value)}>
				<SelectTrigger className='w-[220px] select-trigger'>
					<SelectValue placeholder='sort' />
				</SelectTrigger>
				<SelectContent className='select-content'>
					{Object.values(EnumProductSort).map((sort) => (
						<SelectItem className='select-item' key={sort} value={sort}>
							{sort}
						</SelectItem>
					))}
				</SelectContent>
			</Select>
		</div>
	)
}
