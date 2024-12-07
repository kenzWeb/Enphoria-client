import {Socials} from '@/entitles/auth'
import {AuthFields} from '@/features/auth'
import {useAuthForm} from '@/shared/hooks/api/useAuthForm'
import {Button} from '@/shared/shad-cn/ui/Button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/shared/shad-cn/ui/Card'
import {Form} from '@/shared/shad-cn/ui/Form'

import {useState} from 'react'
import styles from './styles.module.scss'

export function Auth() {
	const [isReg, setIsReg] = useState(false)

	const {onSubmit, form, isPending} = useAuthForm(isReg)

	return (
		<div className={styles.wrapper}>
			<div className={styles.left}>asdasd</div>
			<div className={styles.right}>
				<Card className={styles.card}>
					<CardHeader className={styles.header}>
						<CardTitle className={styles.title}>
							{isReg ? 'Sign Up' : 'Sign In'} Page
						</CardTitle>
						<CardDescription className={styles.description}>
							{isReg
								? 'Sign up for free to access to in any of our products '
								: 'Sign in to access to in any of our products '}
						</CardDescription>
					</CardHeader>
					<Socials />
					<CardContent className={styles.content}>
						<Form {...form}>
							<form onSubmit={form.handleSubmit(onSubmit)}>
								<AuthFields form={form} isPending={isPending} isReg={isReg} />

								{/* <CardDescription className='flex flex-col'>
									<div className='flex gap-3 items-center'>
										<Checkbox id='privacy' />
										<Label htmlFor='privacy' className={styles.checkbox}>
											Agree to our Terms of use and Privacy Policy
										</Label>
									</div>

									<div className='flex gap-3'>
										<Checkbox id='subscribe' />
										<Label htmlFor='subscribe' className={styles.checkbox}>
											Subscribe to our monthly newsletter
										</Label>
									</div>
								</CardDescription> */}

								<Button
									className={styles.button}
									variant='sign'
									size='sm'
									disabled={isPending}
								>
									{isReg ? 'Sign Up' : 'Sign In'}
								</Button>
							</form>
						</Form>
					</CardContent>
					<CardFooter className={styles.footer}>
						<h2>Already have an account?</h2>
						<button onClick={() => setIsReg(!isReg)}>
							{isReg ? 'Sign In' : 'Log in'}
						</button>
					</CardFooter>
				</Card>
			</div>
		</div>
	)
}
