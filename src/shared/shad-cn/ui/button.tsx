import {Slot} from '@radix-ui/react-slot'
import {cva, type VariantProps} from 'class-variance-authority'
import * as React from 'react'

import {cn} from '@/shared/lib/utils'

const buttonVariants = cva(
	'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				default: 'bg-primary text-primary-foreground hover:bg-primary/90',
				destructive:
					'bg-destructive text-destructive-foreground hover:bg-destructive/90',
				outline:
					'border-solid border-[#BEBCBD] bg-background hover:bg-accent hover:text-accent-foreground',
				violet: 'bg-[#8A33FD] text-white hover:bg-primary/90',
				secondary: 'bg-black text-secondary-foreground hover:bg-secondary/80',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 hover:underline',
				sign: 'bg-[#8A33FD] !py-[12px] md:!py-[14px] lg:!py-[16px] xl:!py-[18px] text-primary-foreground hover:bg-primary/90 !rounded-[6px] md:!rounded-[7px] lg:!rounded-[8px] xl:!rounded-[9px]',
				favorite:
					'border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-full',
				pagination:
					'bg-[#807D7E] text-white text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-center w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px] hover:bg-[#807D7E] rounded-[8px] md:rounded-[10px] lg:rounded-[12px] hover:bg-[#3d008e]',
				paginationSelect:
					'bg-[#3d008e] text-white text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-center w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[40px] lg:h-[40px] rounded-[8px] md:rounded-[10px] lg:rounded-[12px]',
			},
			size: {
				default:
					'h-6 px-2 text-xs md:h-8 md:px-3 md:text-xs lg:h-10 lg:px-4 lg:text-sm xl:h-12 xl:px-6 xl:text-base',
				sm: 'h-4 px-[4rem] text-[1.4rem] rounded-[16px] md:h-6 md:px-[1rem] md:text-[1.2rem] lg:h-[6.4rem] lg:px-[1.2rem] lg:text-[1.2rem] xl:h-[4rem] xl:px-[1.6rem] xl:text-[1.4rem]',
				lg: 'h-8 px-4 text-xs md:h-10 md:px-6 md:text-sm lg:h-12 lg:px-8 lg:text-base xl:h-14 xl:px-10 xl:text-lg',
				md: 'py-1 px-[2rem] text-[1.2rem] rounded-[0.8rem] md:py-2 md:px-[3rem] md:text-[1.4rem] lg:py-3 lg:px-[4rem] lg:text-[1.6rem] xl:py-4 xl:px-[5rem] xl:text-[1.8rem]',
				favorite:
					'h-[25px] w-[25px] md:h-[30px] md:w-[30px] lg:h-[35px] lg:w-[35px] xl:h-[40px] xl:w-[40px]',
				icon: 'h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12',
				coupon:
					'h-4 px-[4rem] text-[1.4rem] rounded-r-[16px] rounded-s-[0] md:h-6 md:px-[1rem] md:text-[1.2rem] lg:h-[6.4rem] lg:px-[1.2rem] lg:text-[1.2rem] xl:h-[4rem] xl:px-[1.6rem] xl:text-[1.4rem]',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({className, variant, size, asChild = false, ...props}, ref) => {
		const Comp = asChild ? Slot : 'button'
		return (
			<Comp
				className={cn(buttonVariants({variant, size, className}))}
				ref={ref}
				{...props}
			/>
		)
	},
)
Button.displayName = 'Button'

export {Button, buttonVariants}
