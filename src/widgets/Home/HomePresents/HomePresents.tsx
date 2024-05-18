import HomePresentsBlock from '../../../entitles/Home/HomePresentsBlock/HomePresentsBlock'
import styles from './styles.module.scss'

const HomePresents = () => {
	return (
		<section className={styles.section}>
			<HomePresentsBlock
				title='Low Price'
				subtitle='High Coziness'
				text='UPTO 50% OFF'
				img='/img/images/presents1.jpg'
			/>
			<HomePresentsBlock
				title='Beyoung Presents'
				subtitle='Breezy Summer Style'
				text='UPTO 50% OFF'
				img='/img/images/presents3.jpg'
			/>
		</section>
	)
}

export default HomePresents
