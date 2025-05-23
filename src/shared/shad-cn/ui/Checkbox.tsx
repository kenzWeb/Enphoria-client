import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import {Check} from 'lucide-react'
import * as React from 'react'

import {cn} from '@/shared/lib/utils'

const Checkbox = React.forwardRef<
	React.ElementRef<typeof CheckboxPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({className, ...props}, ref) => (
	<CheckboxPrimitive.Root
		ref={ref}
		className={cn(
			'peer h-6 w-6 shrink-0 rounded-sm border-2 border-solid border-[#8A33FD] ring-1 ring-[#8A33FD] ring-opacity-30 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#8A33FD] data-[state=checked]:text-white',
			className,
		)}
		{...props}
	>
		<CheckboxPrimitive.Indicator
			className={cn('flex items-center justify-center text-current')}
		>
			<Check className='h-4 w-4 text-white' />
		</CheckboxPrimitive.Indicator>
	</CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export {Checkbox}
