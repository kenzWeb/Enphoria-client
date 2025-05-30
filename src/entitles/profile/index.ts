import {PasswordChangeField} from './ui/PasswordChangeField'
import {ProfileInputField} from './ui/ProfileInputField'

// Экспорт типов и интерфейсов
export type {
	IPasswordChangeFieldProps,
	IPasswordFieldHandlers,
	IPasswordFieldState,
	IProfileFieldHandlers,
	IProfileFieldState,
	IProfileFormData,
	IProfileInputFieldProps,
	IUseUpdateProfile,
	ProfileFieldName,
} from './types'

// Экспорт функций модели
export {
	createPasswordFieldHandlers,
	createProfileFieldHandlers,
	createUpdateData,
	syncFieldValue,
} from './model'

// Экспорт компонентов
export {PasswordChangeField, ProfileInputField}
