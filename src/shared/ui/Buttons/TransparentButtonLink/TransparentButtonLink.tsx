import { Button } from '@/shared/shad-cn/ui/index'
import React from 'react'
import styles from './styles.module.scss'

interface ButtonProps {
	textColor?: string
	backgroundColor?: string
	borderColor?: string
	borderRadius?: string
	padding?: string
	margin?: string
	fontSize?: string
	fontWeight?: string
	opacity?: number
	hoverBackgroundColor?: string
	hoverTextColor?: string
	clickTransformScale?: number
	onClick?: () => void
	children: React.ReactNode
	textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase'
}

export const TransparentButtonLink: React.FC<ButtonProps> = ({
	textColor,
	backgroundColor,
	borderColor,
	borderRadius,
	padding,
	margin,
	fontSize,
	fontWeight,
	textTransform,
	opacity,
	hoverBackgroundColor,
	hoverTextColor,
	clickTransformScale,
	onClick,
	children,
}) => {
	const buttonStyle = {
		color: textColor || 'black',
		backgroundColor: backgroundColor || 'transparent',
		borderColor: borderColor || 'black',
		borderRadius: borderRadius || '4px',
		textTransform: textTransform || 'none',
		padding: padding || '10px 20px',
		margin: margin || '5px',
		fontSize: fontSize || '16px',
		fontWeight: fontWeight || 'normal',
		opacity: opacity !== undefined ? opacity : 1,
	}

	const hoverStyle = {
		backgroundColor: hoverBackgroundColor || backgroundColor || 'transparent',
		color: hoverTextColor || textColor || 'black',
	}

	const clickStyle = {
		transform: `scale(${clickTransformScale || 0.95})`,
	}

	return (
		<Button
			variant='outline'
			className={styles.customButton}
			style={buttonStyle}
			onClick={onClick}
		>
			<span
				className={styles.customButtonContent}
				style={hoverStyle}
				data-click-style={JSON.stringify(clickStyle)}
			>
				{children}
			</span>
		</Button>
	)
}
