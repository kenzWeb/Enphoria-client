import {HeaderButtons, HeaderNav} from '@/entitles/header'
import {useState} from 'react'
import {useLocation} from 'react-router-dom'
import styles from './styles.module.scss'

export const Header = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const location = useLocation()

	const handleClose = () => {
		setIsOpen(false)
	}

	return (
		<div className='headerWrapper'>
			<div className='container'>
				<header
					className={
						location.pathname === '/' ? styles.header : styles.headerUnderline
					}
				>
					<HeaderNav isOpen={isOpen} onClose={handleClose} />
					<HeaderButtons isOpen={isOpen} setIsOpen={setIsOpen} />
				</header>
			</div>
		</div>
	)
}
