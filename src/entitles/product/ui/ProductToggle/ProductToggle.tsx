import {ToggleGroup, ToggleGroupItem} from '@/shared/shad-cn/ui/ToggleGroup'
import {Link} from 'react-router-dom'
import {IProductToggleProps} from '../../model/types'
import styles from './ProductToggle.module.scss'

export const ProductToggle = ({
	title,
	items = [],
	isLink = false,
	variant = 'size',
}: IProductToggleProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h2>{title}</h2>
				{isLink && <Link to={'/'} />}
			</div>
			<ToggleGroup
				variant={variant}
				size={variant}
				className={styles.group}
				type='single'
			>
				{items?.map((item) => (
					<ToggleGroupItem
						variant={variant}
						key={item.id}
						value={item.name || ''}
						style={
							variant === 'color' ? {backgroundColor: item.value, outlineColor: item.value} : undefined
						}
					>
						{variant === 'size' ? item.name : null}
					</ToggleGroupItem>
				))}
			</ToggleGroup>
		</div>
	)
}
