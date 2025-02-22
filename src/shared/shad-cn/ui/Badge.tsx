import {cva, type VariantProps} from 'class-variance-authority'
import * as React from 'react'

import {cn} from '@/shared/lib/utils'

const badgeVariants = cva(
	'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none',
	{
		variants: {
			variant: {
				default:
					'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
				secondary:
					'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
				destructive:
					'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
				outline: 'text-foreground',
				price:
					'bg-[#F6F6F6] w-[8rem] h-[3.2rem] rounded-[8px] text-[1.4rem] text-[#3C4242] items-center justify-center',
				priceOutline:
					'w-[8rem] h-[3.2rem] rounded-[8px] text-[1.4rem] border-solid border-[#BEBCBD] text-[#3C4242] items-center justify-center',
				priceOutlineBlack:
					'border-solid border-[#3C4242] text-[#3C4242] items-center justify-center text-[1.8rem] rounded-[8px] py-3 px-[4rem]',
			},
			size: {
				default: 'text-xs',
				lg: 'text-sm',
				md: 'text-[1.8rem] rounded-[8px] py-3 px-[4rem]',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
)

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

function Badge({className, variant, ...props}: BadgeProps) {
	return <div className={cn(badgeVariants({variant}), className)} {...props} />
}

export {Badge, badgeVariants}
