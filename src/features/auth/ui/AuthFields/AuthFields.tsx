import {validEmail} from '@/shared/lib/regex'
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/shared/shad-cn/ui/Form'
import {Input} from '@/shared/shad-cn/ui/Input'
import {IAuthForm} from '@/shared/types/auth.interface'
import * as m from 'motion/react-m'
import {useState} from 'react'
import {UseFormReturn} from 'react-hook-form'

import {PUBLIC_URL} from '@/shared/config/url.config'
import {AnimatedEyeIcon} from '@/shared/ui/Animation/AnimatedEyeIconProps'
import {Link} from 'react-router-dom'
import styles from './styles.module.scss'

interface AuthFieldsProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	form: UseFormReturn<IAuthForm, any, undefined>
	isPending: boolean
	isReg?: boolean
}

export function AuthFields({form, isPending, isReg = false}: AuthFieldsProps) {
	const [hide, setHide] = useState<boolean>(true)

	return (
		<>
			{isReg && (
				<FormField
					control={form.control}
					name='name'
					rules={{
						required: 'Name Required',
					}}
					render={({field}) => (
						<FormItem>
							<FormLabel className={styles.label}>User Name</FormLabel>
							<FormControl>
								<Input
									className={styles.input}
									placeholder='Andrey'
									disabled={isPending}
									{...field}
								/>
							</FormControl>
							<FormMessage className={styles.message} />
						</FormItem>
					)}
				/>
			)}
			<FormField
				control={form.control}
				name='email'
				rules={{
					required: 'Mail Required',
					pattern: {
						value: validEmail,
						message: 'Invalid email',
					},
				}}
				render={({field}) => (
					<FormItem>
						<FormLabel className={styles.label}>Email Address</FormLabel>
						<FormControl>
							<Input
								className={styles.input}
								placeholder='ivan@example.com'
								type='email'
								disabled={isPending}
								{...field}
							/>
						</FormControl>
						<FormMessage className={styles.message} />
					</FormItem>
				)}
			/>
			<FormField
				control={form.control}
				name='password'
				rules={{
					required: 'Password Required',
					minLength: {
						value: 6,
						message: 'Minimum 6 characters',
					},
				}}
				render={({field}) => (
					<FormItem>
						<div className='flex items-center justify-between'>
							<FormLabel className={styles.label}>Password</FormLabel>
							<m.div
								onClick={() => setHide(!hide)}
								className='flex items-center gap-[10px] cursor-pointer'
								whileTap={{scale: 0.95}}
							>
								<AnimatedEyeIcon hide={hide} onClick={() => setHide(!hide)} />
								<m.h2
									className='text-[#807D7E] text-[18px] select-none'
									animate={{opacity: hide ? 0.7 : 1}}
									transition={{duration: 0.3}}
								>
									{hide ? 'Hide' : 'View'}
								</m.h2>
							</m.div>
						</div>
						<FormControl>
							<m.div
								initial={{opacity: 0}}
								animate={{opacity: 1}}
								transition={{duration: 0.3}}
							>
								<Input
									className={styles.input}
									placeholder='Password'
									type={hide ? 'password' : 'text'}
									disabled={isPending}
									{...field}
								/>
							</m.div>
						</FormControl>
						<div className='flex items-center justify-between'>
							<FormMessage className={styles.message} />
							{!isReg && (
								<Link to={PUBLIC_URL.auth('repair')} className='cursor-pointer'>
									<h2 className='text-[#3C4242] text-[16px] font-normal underline hover:text-[#656969] transition-color'>
										Forget your password
									</h2>
								</Link>
							)}
						</div>
					</FormItem>
				)}
			/>
		</>
	)
}
