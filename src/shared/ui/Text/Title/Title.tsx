import {cn} from '@/shared/lib/utils'
import {PointerRectangle} from '@/shared/ui/Other'
import styles from './styles.module.scss'
import {ITitle} from './types'

export const Title = ({
	children,
	className,
	favorite = true,
	marginBottom,
	marginTop,
}: ITitle) => {
	const containerStyle = {
		...(marginBottom !== undefined ? {marginBottom: `${marginBottom}px`} : {}),
		...(marginTop !== undefined ? {marginTop: `${marginTop}px`} : {}),
	}

	return (
		<div className={cn(styles.container)} style={containerStyle}>
			{favorite && <PointerRectangle />}
			<h1 className={cn(className, styles.title)}>{children}</h1>
		</div>
	)
}
