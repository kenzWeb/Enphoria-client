import {Slot} from '@radix-ui/react-slot'
import {cva, type VariantProps} from 'class-variance-authority'
import * as React from 'react'

import {cn} from '@/shared/lib/utils'

const buttonVariants = cva(
	'inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-lg font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0',
	{
		variants: {
			variant: {
				primary:
					'bg-[#8A33FD] text-white border-0 hover:bg-[#6620C1] hover:shadow-lg focus:bg-[#6620C1] focus:ring-2 focus:ring-[#8A33FD] focus:ring-offset-2 disabled:bg-[#EAEAEA] disabled:text-[#807D7E]',
				secondary:
					'bg-transparent text-[#8A33FD] border border-[#3C4242] hover:bg-[rgba(138,51,253,0.05)] hover:border-[#8A33FD] focus:bg-[rgba(138,51,253,0.03)] focus:border-[#8A33FD] disabled:bg-[#EAEAEA] disabled:text-[#807D7E] disabled:border-[#EAEAEA]',
				text: 'bg-transparent text-[#8A33FD] border-0 hover:bg-[rgba(102,32,193,0.03)] hover:shadow-md focus:bg-[rgba(102,32,193,0.03)] disabled:text-[#807D7E]',
				elevated:
					'bg-white text-[#8A33FD] border-0 shadow-md hover:bg-[rgba(102,32,193,0.03)] hover:shadow-lg focus:bg-[rgba(102,32,193,0.03)] focus:shadow-lg disabled:bg-[#EAEAEA] disabled:text-[#807D7E] disabled:shadow-none',

				default:
					'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm',
				destructive:
					'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm',
				outline:
					'border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm',
				ghost: 'hover:bg-accent hover:text-accent-foreground',
				link: 'text-primary underline-offset-4 hover:underline',

				violet: 'bg-[#8A33FD] text-white hover:bg-[#6620C1] shadow-lg',
				sign: 'bg-[#8A33FD] text-white hover:bg-[#6620C1] shadow-lg font-semibold',
				favorite:
					'border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-full shadow-sm',
				pagination: 'bg-[#807d7e] text-white hover:bg-[#3c4242] shadow-sm',
				paginationSelect: 'bg-[#8A33FD] text-white shadow-md',
				checkout:
					'bg-[#8A33FD] text-white hover:bg-[#6620C1] shadow-lg font-semibold w-full',
				nav: 'bg-white/90 backdrop-blur-sm text-[#3c4242] hover:bg-white shadow-md rounded-full border border-white/20',
				menu: 'bg-transparent text-[#3c4242] hover:bg-[#f8f9fa]',
				close:
					'bg-white/90 backdrop-blur-sm text-[#3c4242] hover:bg-white hover:text-[#8A33FD] shadow-sm rounded-full',
				quantity:
					'bg-[#f6f6f6] text-[#3c4242] hover:bg-[#e9ecef] border border-[#e5e5e5]',
				filter:
					'bg-white border border-[#8A33FD] text-[#8A33FD] hover:bg-[#8A33FD] hover:text-white shadow-sm',
				card: 'bg-[#f6f6f6] text-[#3c4242] hover:bg-[#e9ecef] shadow-sm',
			},
			size: {
				default: 'px-5 py-4 text-lg font-medium',
				sm: 'px-3 py-3 text-base font-medium',
				lg: 'px-6 py-4 text-xl font-medium',

				icon: 'h-11 w-11 p-3',
				iconSm: 'h-9 w-9 p-2',
				iconLg: 'h-12 w-12 p-3',

				xs: 'px-2 py-2 text-sm',
				md: 'px-4 py-3 text-base',
				xl: 'px-8 py-5 text-xl',

				favorite: 'h-8 w-8 md:h-9 md:w-9 lg:h-10 lg:w-10',
				nav: 'h-10 w-10 md:h-11 md:w-11',
				quantity: 'h-8 w-8 p-0',
				checkout: 'px-8 py-4 text-lg font-semibold',
				mobile: 'px-4 py-3 text-sm',
				tablet: 'px-6 py-3 text-base',
				desktop: 'px-8 py-4 text-lg',
			},
		},
		defaultVariants: {
			variant: 'primary',
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
export default Button
