import {TransparentButtonLink} from '@/shared/Buttons'
import {MdArrowDownward} from 'react-icons/md'
import styles from './styles.module.scss'

type Props = {
	title?: string | undefined
	description?: string | undefined
	img?: string | undefined
	price?: string | undefined
	color?: 'black' | 'white'
}

export const ZoneCard = ({title, description, img, price, color}: Props) => {
	return (
		<div className={styles.container} style={{backgroundImage: `url(${img})`}}>
			<div className={styles.info}>
				<h2 className={styles.title}>{title}</h2>
				<h3 className={styles.description}>{description}</h3>
				<h4 className={styles.price}>{price}</h4>
				<div className={styles.buttons}>
					<MdArrowDownward size={27} className={styles.icon} />
					{color == 'black' ? (
						<TransparentButtonLink
							fontSize='1.2rem'
							borderRadius='4px'
							textColor='#3C4242'
							borderColor='#3C4242'
							padding='1.1rem 3.5rem'
							textTransform='uppercase'
							fontWeight='700'
						>
							Shop now
						</TransparentButtonLink>
					) : (
						<TransparentButtonLink
							fontSize='1.2rem'
							borderRadius='4px'
							textColor='white'
							borderColor='white'
							padding='1rem 2.5rem'
							textTransform='uppercase'
							fontWeight='500'
						>
							Shop now
						</TransparentButtonLink>
					)}
				</div>
			</div>
		</div>
	)
}
