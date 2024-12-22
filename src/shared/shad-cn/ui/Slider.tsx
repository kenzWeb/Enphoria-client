import {cn} from '@/shared/lib/utils'
import * as SliderPrimitive from '@radix-ui/react-slider'
import * as React from 'react'

const Slider = React.forwardRef<
	React.ElementRef<typeof SliderPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({className, ...props}, ref) => (
	<SliderPrimitive.Root
		ref={ref}
		className={cn(
			'relative flex w-full touch-none select-none items-center',
			className,
		)}
		{...props}
	>
		<SliderPrimitive.Track className='relative h-[3px] w-full grow overflow-hidden rounded-full bg-[#807D7E]'>
			<SliderPrimitive.Range className='absolute h-full bg-[#8A33FD]' />
		</SliderPrimitive.Track>
		<SliderPrimitive.Thumb className='block h-[2rem] w-[2rem] rounded-full bg-[#8A33FD] transition-colors disabled:pointer-events-none disabled:opacity-50' />
		<SliderPrimitive.Thumb className='block h-[2rem] w-[2rem] rounded-full bg-[#8A33FD] transition-colors disabled:pointer-events-none disabled:opacity-50' />
	</SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export {Slider}
