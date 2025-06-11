import * as TabsPrimitive from '@radix-ui/react-tabs'
import * as React from 'react'

import {cn} from '@/shared//lib/utils'

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.List>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({className, ...props}, ref) => (
	<TabsPrimitive.List
		ref={ref}
		className={cn(
			'inline-flex w-full h-[55px] items-center justify-between rounded-md p-1 text-muted-foreground',
			className,
		)}
		{...props}
	/>
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({className, ...props}, ref) => (
	<TabsPrimitive.Trigger
		ref={ref}
		className={cn(
			'inline-flex items-center justify-between whitespace-nowrap rounded-t-[12px] px-[53px] py-[12px] text-[22px] font-medium transition-all focus-visible:outline-none text-[#3C4242] disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:bg-[#F6F6F6] data-[state=active]:shadow-[0_4px_0_0_#3C4242] data-[state=active]:rounded-b-none',
			className,
		)}
		{...props}
	/>
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
	React.ElementRef<typeof TabsPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({className, ...props}, ref) => (
	<TabsPrimitive.Content
		ref={ref}
		className={cn('mt-2 focus-visible:outline-none', className)}
		{...props}
	/>
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export {Tabs, TabsContent, TabsList, TabsTrigger}
