import {cn} from '@/shared/lib/utils'
import styles from './Subtitle.module.scss'
import {ISubtitle} from './types'

export const Subtitle = ({children, className}: ISubtitle) => {
	return <h2 className={cn(className, styles.text)}>{children}</h2>
}
