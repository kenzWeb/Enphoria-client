import {cva, type VariantProps} from 'class-variance-authority'
import * as React from 'react'

import {cn} from '@/shared/lib/utils'

const badgeVariants = cva(
	'inline-flex items-center rounded-full border transition-colors focus:outline-none',
	{
		variants: {
			variant: {
				default:
					'border-transparent bg-primary text-primary-foreground hover:bg-primary/80 text-[10px] md:text-[11px] lg:text-[12px] xl:text-[14px] px-2 py-0.5 md:px-2.5 md:py-1 lg:px-3 lg:py-1.5 xl:px-4 xl:py-2',
				secondary:
					'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-[10px] md:text-[11px] lg:text-[12px] xl:text-[14px] px-2 py-0.5 md:px-2.5 md:py-1 lg:px-3 lg:py-1.5 xl:px-4 xl:py-2',
				destructive:
					'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 text-[10px] md:text-[11px] lg:text-[12px] xl:text-[14px] px-2 py-0.5 md:px-2.5 md:py-1 lg:px-3 lg:py-1.5 xl:px-4 xl:py-2',
				outline:
					'text-foreground text-[10px] md:text-[11px] lg:text-[12px] xl:text-[14px] px-2 py-0.5 md:px-2.5 md:py-1 lg:px-3 lg:py-1.5 xl:px-4 xl:py-2',
				price:
					'bg-[#F6F6F6] w-[6rem] md:w-[7rem] lg:w-[8rem] xl:w-[9rem] h-[2.4rem] md:h-[2.8rem] lg:h-[3.2rem] xl:h-[3.6rem] rounded-[6px] md:rounded-[7px] lg:rounded-[8px] xl:rounded-[9px] text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.5rem] text-[#3C4242] items-center justify-center',
				priceOutline:
					'w-[6rem] md:w-[7rem] lg:w-[8rem] xl:w-[9rem] h-[2.4rem] md:h-[2.8rem] lg:h-[3.2rem] xl:h-[3.6rem] rounded-[6px] md:rounded-[7px] lg:rounded-[8px] xl:rounded-[9px] text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.5rem] border-solid border-[#BEBCBD] text-[#3C4242] items-center justify-center',
				priceOutlineBlack:
					'border-solid border-[#3C4242] text-[#3C4242] items-center justify-center text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] xl:text-[2rem] rounded-[6px] md:rounded-[7px] lg:rounded-[8px] xl:rounded-[9px] py-2 md:py-2.5 lg:py-3 xl:py-3.5 px-[3rem] md:px-[3.5rem] lg:px-[4rem] xl:px-[4.5rem]',
			},
			size: {
				default: 'text-[10px] md:text-[11px] lg:text-[12px] xl:text-[14px]',
				lg: 'text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]',
				md: 'text-[1.4rem] md:text-[1.6rem] lg:text-[1.8rem] xl:text-[2rem] rounded-[6px] md:rounded-[7px] lg:rounded-[8px] xl:rounded-[9px] py-2 md:py-2.5 lg:py-3 xl:py-3.5 px-[3rem] md:px-[3.5rem] lg:px-[4rem] xl:px-[4.5rem]',
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
