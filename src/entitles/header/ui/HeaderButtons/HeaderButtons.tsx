import {HeaderBurger} from '@/features/header'
import {CustomButtonLink} from '@/shared/Buttons'
import {IoMdHeartEmpty} from 'react-icons/io'
import {LuShoppingCart, LuUser2} from 'react-icons/lu'
import {HeaderForm} from '../HeaderForm/HeaderForm'
import styles from './styles.module.scss'

type Props = {
	isOpen: boolean
	setIsOpen: (value: boolean) => void
}

export const HeaderButtons = ({isOpen, setIsOpen}: Props) => {
	return (
		<>
			<div className={styles.form}>
				<HeaderForm />
			</div>

			<div className={styles.link}>
				<CustomButtonLink to='/favorites'>
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
