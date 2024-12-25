import {Accordion} from '@/features/filters'
import {useGetSizes} from '@/shared/hooks/queries/sizes/useGetSizes'
import {useFilterToggle} from '@/shared/hooks/useFilterToggle'
import {Badge} from '@/shared/shad-cn/ui/Badge'
import {ISize} from '@/shared/types/size.interface'
import {AnimatePresence, motion} from 'framer-motion'
import {memo} from 'react'
import {SideSubTitle} from '../SideSubTitle/SideSubTitle'
import styles from './SizesGroup.module.scss'
import {FilterItemProps} from '@/shared/types/filter.interface'

const SizeItem = memo(({item: size, isSelected, onToggle}: FilterItemProps<ISize>) => (
	<motion.div onClick={() => onToggle(size.name)} whileTap={{scale: 0.95}}>
		<motion.div
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
						<motion.div
							initial={{scale: 0.5, opacity: 0}}
							animate={{scale: 1, opacity: 1}}
							exit={{scale: 0.5, opacity: 0}}
							transition={{duration: 0.2}}
							className={styles.checkmark}
						>
							<svg viewBox='0 0 24 24' fill='none' className={styles.check}>
								<motion.path
									initial={{pathLength: 0}}
									animate={{pathLength: 1}}
									transition={{duration: 0.3}}
									d='M5 13l5 5L20 7'
									stroke='currentColor'
									strokeWidth='3'
									strokeLinecap='round'
								/>
							</svg>
						</motion.div>
					)}
				</AnimatePresence>
			</Badge>
		</motion.div>
	</motion.div>
))

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
