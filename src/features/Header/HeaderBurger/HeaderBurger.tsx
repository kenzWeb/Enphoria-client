import styles from './styles.module.scss'

type Props = {
	isOpen: boolean
	setIsOpen: (value: boolean) => void
}

const HeaderBurger = ({setIsOpen, isOpen}: Props) => {
	return (
		<>
			<div
				className={`${styles.burger} ${isOpen ? styles.active : ''}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</>
	)
}

export default HeaderBurger
