import {PasswordChangeForm} from './ui/PasswordChangeForm'
import {ProfileForm} from './ui/ProfileForm/ProfileForm'
import {ProfileHeading} from './ui/ProfileHeading/ProfileHeading'

export type {
	IPasswordChangeFormProps,
	IPasswordFormHandlers,
	IPasswordValidation,
	IUseChangePassword,
} from './types'

export {
	createPasswordFormHandlers,
	createPasswordValidation,
	showPasswordError,
} from './model'

export {PasswordChangeForm, ProfileForm, ProfileHeading}
