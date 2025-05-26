import * as React from 'react'

import {cn} from '@/shared//lib/utils'

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
	({className, type, ...props}, ref) => {
		return (
			<input
				type={type}
				className={cn(
					'flex w-full rounded-[8px] border border-[#3C4242] bg-background px-3 py-[18px] items text-[14px] placeholder:text-[#807D7E] placeholder:text-[14px] disabled:cursor-not-allowed disabled:opacity-50',
					className,
				)}
				ref={ref}
				{...props}
			/>
		)
	},
)
Input.displayName = 'Input'

export {Input}
