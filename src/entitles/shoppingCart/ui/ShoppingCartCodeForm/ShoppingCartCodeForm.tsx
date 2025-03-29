import {useCodeForm} from '@/shared/hooks/api/useCodeForm'
import {Form, FormField, FormItem, FormMessage} from '@/shared/shad-cn/ui/Form'
import {FormControl, FormLabel, Input} from '@mui/material'
import styles from './ShoppingCartCodeForm.module.scss'

export const ShoppingCartCodeForm = () => {
	const {form, onSubmit, isPending} = useCodeForm()

	return (
		<form onSubmit={form.handleSubmit(onSubmit)}>
			<Form {...form}>
				<FormField
					control={form.control}
					name='code'
					rules={{
						required: 'Code Required',
					}}
					render={({field}) => (
						<FormItem>
							<FormLabel className={styles.label}>User Name</FormLabel>
							<FormControl>
								<Input
									className={styles.input}
									placeholder='Andrey'
									{...field}
								/>
							</FormControl>
							<FormMessage className={styles.message} />
						</FormItem>
					)}
				/>
			</Form>

			<button disabled={isPending} className={styles.button} type='submit'>
				Apply
			</button>
		</form>
	)
}
