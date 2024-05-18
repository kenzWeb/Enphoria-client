import {IoMdHeartEmpty} from 'react-icons/io'
import {LuShoppingCart, LuUser2} from 'react-icons/lu'
import HeaderForm from '../../../entitles/Header/HeaderForm/HeaderForm'
import HeaderBurger from '../../../features/Header/HeaderBurger/HeaderBurger'
import CustomButtonLink from '../../../shared/Buttons/CustomButtonLink/CustomButtonLink'
import styles from './styles.module.scss'

type Props = {
	isOpen: boolean
	setIsOpen: (value: boolean) => void
}

const HeaderButtons = ({isOpen, setIsOpen}: Props) => {
	return (
		<>
			<div className={styles.form}>
				<HeaderForm />
			</div>

			<div className={styles.link}>
				<CustomButtonLink to='/auth'>
					<IoMdHeartEmpty size={20} />
				</CustomButtonLink>
				<CustomButtonLink to='/like'>
					<LuUser2 size={20} />
				</CustomButtonLink>
				<CustomButtonLink to='/like'>
					<LuShoppingCart size={20} />
				</CustomButtonLink>
			</div>
			<div className={styles.burger}>
				<HeaderBurger isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>
		</>
	)
}

export default HeaderButtons
