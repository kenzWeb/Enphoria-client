import {SERVER_URL} from '@/shared/config/private.config'
import {useGetAllProducts} from '@/shared/hooks/queries/products/useGetAllProducts'
import {useDebounce} from '@/shared/hooks/useDebounce'
import {
	CommandDialog,
	CommandInput,
	CommandList,
} from '@/shared/shad-cn/ui/Command'
import {IProduct} from '@/shared/types/product.interface'
import {DialogTitle} from '@radix-ui/react-dialog'
import {AnimatePresence, motion} from 'framer-motion'
import {LoaderCircle} from 'lucide-react'
import {useEffect, useState} from 'react'
import {IoSearchOutline} from 'react-icons/io5'
import styles from './styles.module.scss'

export const HeaderForm = () => {
	const [open, setOpen] = useState(false)
	const [search, setSearch] = useState('')
	const [data, setData] = useState<IProduct[]>([])
	const debouncedValue = useDebounce(search, 500)
	const {products, isFetching, isLoading, isRefetching, isPending} =
		useGetAllProducts({
			searchTerm: debouncedValue,
		})

	useEffect(() => {
		if (products) setData(products)
	}, [products])

	const handleSearch = (value: string) => {
		setSearch(value)
		if (!open) setOpen(true)
	}

	return (
		<>
			<motion.div
				className={styles.form}
				onClick={() => setOpen(true)}
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				whileHover={{scale: 1.02}}
				transition={{duration: 0.2}}
			>
				<IoSearchOutline size={22} />
				<input
					type='text'
					placeholder='Search for products...'
					className={styles.input}
					value={search}
					onChange={(e) => handleSearch(e.target.value)}
				/>
			</motion.div>

			<CommandDialog open={open} onOpenChange={setOpen}>
				<DialogTitle className='sr-only'>Search products</DialogTitle>
				<CommandInput
					placeholder='Search for products...'
					value={search}
					onValueChange={handleSearch}
					className='p-[20px] text-[16px]'
				/>
				<CommandList className='p-2'>
					<AnimatePresence>
						{isLoading || isFetching || isRefetching || isPending ? (
							<LoaderCircle color='#d24ece' size={25}  className='animate-spin absolute top-1/2 right-1/2'/>
						) : (
							<motion.div
								initial={{opacity: 0}}
								animate={{opacity: 1}}
								exit={{opacity: 0}}
								transition={{duration: 0.2}}
							>
								{data.length ? (
									data.map((product: IProduct) => (
										<motion.div
											key={product?.id || Math.random()}
											className={styles.searchResult}
											whileHover={{scale: 1.01}}
											transition={{duration: 0.2}}
										>
											<img
												className={styles.productImage}
												src={`${SERVER_URL}${product.images[0]}`}
												alt={product.name}
												loading='lazy'
											/>
											<div className={styles.productInfo}>
												<span className={styles.productName}>
													{product.name}
												</span>
												<span className={styles.category}>
													{product.category?.name}
												</span>
												<span className={styles.productPrice}>
													${product.price}
												</span>
											</div>
										</motion.div>
									))
								) : (
									<motion.div
										initial={{opacity: 0}}
										animate={{opacity: 1}}
										exit={{opacity: 0}}
										className='p-6 text-center text-gray-500'
									>
										No results found
									</motion.div>
								)}
							</motion.div>
						)}
					</AnimatePresence>
				</CommandList>
			</CommandDialog>
		</>
	)
}
