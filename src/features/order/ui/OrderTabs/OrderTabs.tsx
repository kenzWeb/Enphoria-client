import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from '@/shared/shad-cn/ui/Tabs'

export const OrderTabs = () => {
	return (
		<Tabs defaultValue='active' className='w-full'>
			<TabsList>
				<TabsTrigger value='active'>Active</TabsTrigger>
				<TabsTrigger value='cancelled'>Cancelled</TabsTrigger>
				<TabsTrigger value='completed'>Completed</TabsTrigger>
			</TabsList>
			<TabsContent value='active'>
				Make changes to your account here.
			</TabsContent>
			<TabsContent value='cancelled'>Change your password here.</TabsContent>
		</Tabs>
	)
}
