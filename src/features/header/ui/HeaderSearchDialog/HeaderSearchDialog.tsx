import {CommandDialog, CommandList} from '@/shared/shad-cn/ui/Command'
import {IProduct} from '@/shared/types/product.interface'
import {DialogTitle} from '@radix-ui/react-dialog'
import {AnimatePresence} from 'framer-motion'
import {HeaderSearchInput} from '../HeaderSearchInput/HeaderSearchInput'
import {HeaderSearchLoading} from '../HeaderSearchLoading/HeaderSearchLoading'
import {HeaderSearchResults} from '../HeaderSearchResults/HeaderSearchResults'

interface HeaderSearchDialogProps {
	open: boolean
	onOpenChange: (open: boolean) => void
	search: string
	onSearchChange: (value: string) => void
	data: IProduct[]
	isLoading: boolean
}

export const HeaderSearchDialog = ({
	open,
	onOpenChange,
	search,
	onSearchChange,
	data,
	isLoading,
}: HeaderSearchDialogProps) => {
	return (
		<CommandDialog open={open} onOpenChange={onOpenChange}>
			<DialogTitle className='sr-only'>Search products</DialogTitle>
			<HeaderSearchInput search={search} onValueChange={onSearchChange} />
			<CommandList className='p-2'>
				<AnimatePresence>
					{isLoading ? (
						<HeaderSearchLoading isLoading={isLoading} />
					) : (
						<HeaderSearchResults
							data={data}
							onClose={() => onOpenChange(false)}
						/>
					)}
				</AnimatePresence>
			</CommandList>
		</CommandDialog>
	)
}
