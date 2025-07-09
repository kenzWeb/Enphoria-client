import {CommandInput} from '@/shared/shad-cn/ui/Command'

interface HeaderSearchInputProps {
	search: string
	onValueChange: (value: string) => void
}

export const HeaderSearchInput = ({
	search,
	onValueChange,
}: HeaderSearchInputProps) => {
	return (
		<CommandInput
			placeholder='Search for products...'
			value={search}
			onValueChange={onValueChange}
			className='p-[20px] text-[16px]'
		/>
	)
}
