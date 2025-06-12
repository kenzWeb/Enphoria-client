import {Accordion} from '@/features/filters'
import {useGetColors} from '@/shared/hooks/queries/colors/useGetColors'
import {useFilterToggle} from '@/shared/hooks/useFilterToggle'
import {IColor} from '@/shared/types/color.interface'
import {FilterItemProps} from '@/shared/types/filter.interface'
import {AnimatePresence, motion} from 'framer-motion'
import {memo} from 'react'
import {SideSubTitle} from '../SideSubTitle/SideSubTitle'
import styles from './ColorsGroup.module.scss'
import CheckIcon from '/img/icons/check-filter.svg'

const ColorItem = memo(
	({item: color, isSelected, onToggle}: FilterItemProps<IColor>) => {
		return (
			<motion.div
				className={styles.item}
				onClick={() => onToggle(color.name)}
				whileTap={{scale: 0.95}}
			>
				<div className={styles.colorWrapper}>
					<motion.div
						style={{background: color.value}}
						className={styles.color}
						whileHover={{scale: 1.1}}
						transition={{type: 'spring', stiffness: 400}}
					/>
					<AnimatePresence>
						{isSelected && (
							<motion.div
								initial={{scale: 0.5, opacity: 0}}
								animate={{scale: 1, opacity: 1}}
								exit={{scale: 0.5, opacity: 0}}
								transition={{duration: 0.2}}
								className={styles.checkmark}
							>
								<img src={CheckIcon} alt='Selected' className={styles.check} />
							</motion.div>
						)}
					</AnimatePresence>
				</div>
				<span>{color.name}</span>
			</motion.div>
		)
	},
)

export const ColorsGroup = memo(() => {
	const {colors} = useGetColors()
	const {selectedItems, toggleItem} = useFilterToggle('colors')

	return (
		<SideSubTitle title='Colors'>
			{(isOpen: boolean) => (
				<Accordion isOpen={isOpen}>
					<div className={styles.wrapper}>
						{colors?.map((color: IColor) => (
							<ColorItem
								key={color.id}
								item={color}
								isSelected={selectedItems.includes(color.name)}
								onToggle={toggleItem}
							/>
						))}
					</div>
				</Accordion>
			)}
		</SideSubTitle>
	)
})
