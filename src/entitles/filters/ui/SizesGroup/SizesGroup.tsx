import {Accordion} from '@/features/filters'
import {useGetSizes} from '@/shared/hooks/queries/sizes/useGetSizes'
import {useFilterToggle} from '@/shared/hooks/useFilterToggle'
import {Badge} from '@/shared/shad-cn/ui/Badge'
import {FilterItemProps} from '@/shared/types/filter.interface'
import {ISize} from '@/shared/types/size.interface'
import {AnimatePresence} from 'motion/react'
import * as m from 'motion/react-m'
import {memo} from 'react'
import {SideSubTitle} from '../SideSubTitle/SideSubTitle'
import styles from './SizesGroup.module.scss'
import CheckIcon from '/img/icons/check-filter.svg'

const SizeItem = memo(
	({item: size, isSelected, onToggle}: FilterItemProps<ISize>) => (
		<m.div onClick={() => onToggle(size.name)} whileTap={{scale: 0.95}}>
			<m.div
				whileHover={{scale: 1.05}}
				transition={{type: 'spring', stiffness: 400}}
			>
				<Badge
					variant='priceOutline'
					className={isSelected ? styles.selected : ''}
				>
					{size.name}
					<AnimatePresence>
						{isSelected && (
							<m.div
								initial={{scale: 0.5, opacity: 0}}
								animate={{scale: 1, opacity: 1}}
								exit={{scale: 0.5, opacity: 0}}
								transition={{duration: 0.2}}
								className={styles.checkmark}
							>
								<img src={CheckIcon} alt='Selected' className={styles.check} />
							</m.div>
						)}
					</AnimatePresence>
				</Badge>
			</m.div>
		</m.div>
	),
)

export const SizesGroup = memo(() => {
	const {sizes} = useGetSizes()
	const {selectedItems, toggleItem} = useFilterToggle('sizes')

	return (
		<SideSubTitle title='Sizes'>
			{(isOpen: boolean) => (
				<Accordion isOpen={isOpen}>
					<div className={styles.wrapper}>
						{Array.isArray(sizes) &&
							sizes.map((size: ISize) => (
								<SizeItem
									key={size.id}
									item={size}
									isSelected={selectedItems.includes(size.name)}
									onToggle={toggleItem}
								/>
							))}
					</div>
				</Accordion>
			)}
		</SideSubTitle>
	)
})
