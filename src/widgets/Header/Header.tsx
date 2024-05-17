import {useState} from 'react'
import HeaderButtons from './HeaderButtons/HeaderButtons'
import HeaderNav from './HeaderNav/HeaderNav'
import styles from './styles.module.scss'

const Header = () => {
	const [isOPpen, setIsOpen] = useState<boolean>(false)

	return (
		<header className={styles.header}>
			<HeaderNav isOpen={isOPpen} />
			<HeaderButtons isOpen={isOPpen} setIsOpen={setIsOpen} />
		</header>
	)
}

export default Header
