'use client'

import * as TogglePrimitive from '@radix-ui/react-toggle'
import {cva, type VariantProps} from 'class-variance-authority'
import * as React from 'react'

import {cn} from '@/shared/lib/utils'

const toggleVariants = cva(
	'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 gap-2',
	{
		variants: {
			variant: {
				default: 'bg-transparent',
				outline:
					'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
				size: 'text-[1.4rem] hover:bg-[#808787] hover:text-white border-[1.5px] border-[#BEBCBD] border-solid data-[state=on]:bg-[#3C4242] data-[state=on]:text-white data-[state=on]:border-[#3C4242] rounded-[1.2rem]',
				color:
					'hover:text-white data-[state=on]:outline outline-[.1.5rem] rounded-full outline-offset-[4px] transition-all duration-500 ease-in-out hover:scale-110 data-[state=on]:scale-110',
			},
			size: {
				default: 'h-10 px-3 min-w-10',
				sm: 'h-9 px-2.5 min-w-9',
				lg: 'h-11 px-5 min-w-11',
				size: 'h-[3.3rem] w-[3.3rem] p-[1.6rem]',
				color: 'h-[2.3rem] w-[2.3rem]',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
)

const Toggle = React.forwardRef<
	React.ElementRef<typeof TogglePrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
		VariantProps<typeof toggleVariants>
>(({className, variant, size, ...props}, ref) => (
	<TogglePrimitive.Root
		ref={ref}
		className={cn(toggleVariants({variant, size, className}))}
		{...props}
	/>
))

Toggle.displayName = TogglePrimitive.Root.displayName

export {Toggle, toggleVariants}
