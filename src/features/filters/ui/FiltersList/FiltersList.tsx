import {Checkbox} from '@/shared/shad-cn/ui/Checkbox'
import {Label} from '@/shared/shad-cn/ui/Label'
import {ICategory} from '@/shared/types/category.interface'
import styles from './FiltersList.module.scss'

interface Props {
	data: ICategory[]
}

export const FiltersList = ({data}: Props) => {
	return (
		<div className={styles.wrapper}>
			{data.map((item) => (
				<div key={item.id} className='flex items-center space-x-4'>
					<Checkbox className={styles.checkbox} id={item.name} />
					<Label className={styles.label} htmlFor={item.name}>
						{item.name}
					</Label>
				</div>
			))}
		</div>
	)
}
