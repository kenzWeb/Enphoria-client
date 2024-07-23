import {HeaderButtons, HeaderNav} from '@/entitles/header'
import {useState} from 'react'
import styles from './styles.module.scss'

export const Header = () => {
	const [isOPpen, setIsOpen] = useState<boolean>(false)

	return (
		<div className='container'>
			<header className={styles.header}>
				<HeaderNav isOpen={isOPpen} />
				<HeaderButtons isOpen={isOPpen} setIsOpen={setIsOpen} />
			</header>
		</div>
	)
}
