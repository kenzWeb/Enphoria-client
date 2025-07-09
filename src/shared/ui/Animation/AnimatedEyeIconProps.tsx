import * as m from 'motion/react-m'
import React from 'react'

interface AnimatedEyeIconProps {
	hide: boolean
	onClick: () => void
	className?: string
}

export const AnimatedEyeIcon: React.FC<AnimatedEyeIconProps> = ({
	hide,
	onClick,
	className = '',
}) => (
	<m.svg
		xmlns='http://www.w3.org/2000/svg'
		width='24'
		height='24'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		className={`cursor-pointer text-[#807D7E] ${className}`}
		onClick={onClick}
		initial={hide ? 'closed' : 'open'}
		animate={hide ? 'closed' : 'open'}
		variants={{
			closed: {
				scale: 1,
				pathLength: 0,
				opacity: 0.7,
				transition: {duration: 0.3},
			},
			open: {
				scale: 1,
				pathLength: 1,
				opacity: 1,
				transition: {duration: 0.3},
			},
		}}
	>
		{hide ? (
			<>
				<path d='M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94' />
				<path d='M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19' />
				<line x1='1' y1='1' x2='23' y2='23' />
			</>
		) : (
			<>
				<path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
				<circle cx='12' cy='12' r='3' />
			</>
		)}
	</m.svg>
)
