import {SERVER_URL} from '@/shared/config/private.config'
import {useGetAllProducts} from '@/shared/hooks/queries/products/useGetAllProducts'

import {
	CommandDialog,
	CommandInput,
	CommandList,
} from '@/shared/shad-cn/ui/Command'
import {IProduct} from '@/shared/types/product.interface'
import {DialogTitle} from '@radix-ui/react-dialog'
import {AnimatePresence, motion} from 'framer-motion'
import {useEffect, useState} from 'react'
import {IoSearchOutline} from 'react-icons/io5'
import styles from './styles.module.scss'

export const HeaderForm = () => {
	const [open, setOpen] = useState(false)
	const [search, setSearch] = useState('')
	const [data, setData] = useState<IProduct[]>([])
	const [debouncedValue, setDebouncedValue] = useState(search)
	const {products} = useGetAllProducts({searchTerm: debouncedValue})

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedValue(search)
		}, 500)

		return () => clearTimeout(timer)
	}, [search])

	useEffect(() => {
		if (products) setData(products)
	}, [products])

	const handleSearch = (value: string) => {
		setSearch(value)
		if (!open) setOpen(true)
	}

	const containerVariants = {
		hidden: {
			opacity: 0,
			y: 5,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.4,
				ease: [0.25, 0.1, 0.25, 1],
				staggerChildren: 0.1,
			},
		},
		exit: {
			opacity: 0,
			y: -5,
			transition: {
				duration: 0.3,
				ease: [0.25, 0.1, 0.25, 1],
			},
		},
	}

	const itemVariants = {
		hidden: {
			opacity: 0,
			y: 10,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.3,
				ease: [0.25, 0.1, 0.25, 1],
			},
		},
		hover: {
			scale: 1.01,
			transition: {
				duration: 0.2,
				ease: [0.25, 0.1, 0.25, 1],
			},
		},
	}

	return (
		<>
			<motion.div
				className={styles.form}
				onClick={() => setOpen(true)}
				initial={{opacity: 0, y: -5}}
				animate={{opacity: 1, y: 0}}
				whileHover={{
					scale: 1.01,
					y: -1,
				}}
				whileTap={{scale: 0.995}}
				transition={{
					duration: 0.2,
					ease: [0.25, 0.1, 0.25, 1],
				}}
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
					<AnimatePresence mode='sync' initial={false}>
						<motion.div
							key={search}
							variants={containerVariants}
							initial='hidden'
							animate='visible'
							exit='exit'
							layout
						>
							{data.length ? (
								data.map((product: IProduct) => (
									<motion.div
										key={product?.id || Math.random()}
										className={styles.searchResult}
										variants={itemVariants}
										whileHover='hover'
										transition={{
											layout: {
												duration: 0.2,
												ease: [0.25, 0.1, 0.25, 1],
											},
										}}
									>
										<motion.img
											className={styles.productImage}
											src={`${SERVER_URL}${product.images[0]}`}
											alt={product.name}
											loading='lazy'
											whileHover={{
												scale: 1.05,
												transition: {
													duration: 0.3,
													ease: [0.25, 0.1, 0.25, 1],
												},
											}}
										/>
										<div className={styles.productInfo}>
											<span className={styles.productName}>{product.name}</span>
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
									animate={{
										opacity: 1,
										transition: {
											duration: 0.3,
											ease: [0.25, 0.1, 0.25, 1],
										},
									}}
									exit={{opacity: 0}}
									className='p-6 text-center text-gray-500'
								>
									No results found
								</motion.div>
							)}
						</motion.div>
					</AnimatePresence>
				</CommandList>
			</CommandDialog>
		</>
	)
}
