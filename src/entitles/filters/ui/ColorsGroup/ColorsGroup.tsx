import {Accordion} from '@/features/filters'
import {useGetColors} from '@/shared/hooks/queries/colors/useGetColors'
import {useFilters} from '@/shared/hooks/useFilters'
import {IColor} from '@/shared/types/color.interface'
import {AnimatePresence, motion} from 'framer-motion'
import {useState} from 'react'
import {SideSubTitle} from '../SideSubTitle/SideSubTitle'
import styles from './ColorsGroup.module.scss'

export const ColorsGroup = () => {
	const {colors} = useGetColors()
	const {queryParams, updateQueryParams} = useFilters()
	const [selectedColors, setSelectedColors] = useState<string[]>([])

	const toggleColor = (color: string) => {
		setSelectedColors((prev) =>
			prev.includes(color)
				? prev.filter((id) => id !== color)
				: [...prev, color],
		)

		const currentColors = queryParams.colors
			? typeof queryParams.colors === 'string'
				? queryParams.colors.split('|')
				: queryParams.colors
			: []

		if (currentColors.includes(color)) {
			const newArray = currentColors.filter((c: string) => c !== color)

			updateQueryParams('colors', newArray.join('|'))
		} else {
			updateQueryParams('colors', [...currentColors, color].join('|'))
		}
	}

	return (
		<SideSubTitle title='Colors'>
			{(isOpen: boolean) => (
				<Accordion isOpen={isOpen}>
					<div className={styles.wrapper}>
						{colors?.map((color: IColor) => (
							<motion.div
								key={color.id}
								className={styles.item}
								onClick={() => toggleColor(color.name)}
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
										{selectedColors.includes(color.name) && (
											<motion.div
												initial={{scale: 0.5, opacity: 0}}
												animate={{scale: 1, opacity: 1}}
												exit={{scale: 0.5, opacity: 0}}
												transition={{duration: 0.2}}
												className={styles.checkmark}
											>
												<svg
													viewBox='0 0 24 24'
													fill='none'
													className={styles.check}
												>
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
								</div>
								<span>{color.name}</span>
							</motion.div>
						))}
					</div>
				</Accordion>
			)}
		</SideSubTitle>
	)
}
