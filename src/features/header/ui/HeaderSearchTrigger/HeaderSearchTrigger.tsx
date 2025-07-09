import {motion} from 'framer-motion'
import {IoSearchOutline} from 'react-icons/io5'
import styles from './styles.module.scss'

interface HeaderSearchTriggerProps {
	search: string
	onSearchChange: (value: string) => void
	onOpen: () => void
}

export const HeaderSearchTrigger = ({
	search,
	onSearchChange,
	onOpen,
}: HeaderSearchTriggerProps) => {
	return (
		<motion.div
			className={styles.form}
			onClick={onOpen}
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			whileHover={{scale: 1.02}}
			transition={{duration: 0.2}}
		>
			<IoSearchOutline size={22} />
			<input
				type='text'
				placeholder='Search for products...'
				className={styles.input}
				value={search}
				onChange={(e) => onSearchChange(e.target.value)}
			/>
		</motion.div>
	)
}
