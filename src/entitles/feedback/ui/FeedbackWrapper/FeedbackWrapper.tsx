import {FeedbackCard} from '../FeedbackCard/FeedbackCard'
import styles from './styles.module.scss'

export const FeedbackWrapper = () => {
	const feedbackItems = [
		{
			img: 'img/images/feedback/1.png',
			title: 'Floyd Miles',
			subtitle:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			starsValue: 3.5,
		},
		{
			img: 'img/images/feedback/2.png',
			title: 'Ronald Richards',
			subtitle:
				'ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			starsValue: 4,
		},
		{
			img: 'img/images/feedback/3.png',
			title: 'Savannah Nguyen',
			subtitle:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			starsValue: 3.5,
		},
	]

	return (
		<div className={styles.container}>
			{feedbackItems.map((item) => (
				<FeedbackCard
					img={item.img}
					title={item.title}
					subtitle={item.subtitle}
					key={item.title}
					// starsValue={item.starsValue}
				/>
			))}
		</div>
	)
}
