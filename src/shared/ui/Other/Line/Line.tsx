import {cn} from '@/shared/lib/utils'
import styles from './Line.module.scss'

interface LineProps {
	className?: string
}

export const Line = ({className}: LineProps) => {
	return <div className={cn(styles.line, className)} />
}
