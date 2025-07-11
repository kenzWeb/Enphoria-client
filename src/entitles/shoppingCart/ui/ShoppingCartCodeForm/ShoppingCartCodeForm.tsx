import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/shared/shad-cn/ui/Form'

import { Button } from '@/shared/shad-cn/ui/Button'
import { Input } from '@/shared/shad-cn/ui/Input'
import { IShoppingCartCodeForm } from '../../types'
import styles from './ShoppingCartCodeForm.module.scss'

export const ShoppingCartCodeForm = ({
	form,
	onSubmit,
	isPending,
}: IShoppingCartCodeForm) => {
	return (
		<form onSubmit={form.handleSubmit(onSubmit)} className={styles.form}>
			<Form {...form}>
				<FormField
					control={form.control}
					name='code'
					rules={{
						required: 'Code Required',
					}}
					render={({field}) => (
						<FormItem className={styles.formItem}>
							<div className={styles.inputButtonContainer}>
								<FormControl>
									<Input
										className={styles.input}
										{...field}
										disabled={isPending}
									/>
								</FormControl>
								<Button
									variant='primary'
									size='default'
									className={styles.button}
									type='submit'
									disabled={isPending}
								>
									Apply Coupon
								</Button>
							</div>
							<FormMessage className={styles.message} />
						</FormItem>
					)}
				/>
			</Form>
		</form>
	)
}
