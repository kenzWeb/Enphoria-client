import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from '@/shared/shad-cn/ui/Tabs'
import {orderModels} from '../../models'
import styles from './OrderTabs.module.scss'

export const OrderTabs = () => {
	return (
		<Tabs defaultValue='active' className={styles.container}>
			<TabsList className={styles.tabsList}>
				{orderModels.map((model) => (
					<TabsTrigger
						key={model.name}
						value={model.status}
						className={styles.tabsTrigger}
					>
						{model.name}
					</TabsTrigger>
				))}
			</TabsList>
			<TabsContent value='active'>
				Make changes to your account here.
			</TabsContent>
			<TabsContent value='cancelled'>Change your password here.</TabsContent>
		</Tabs>
	)
}
