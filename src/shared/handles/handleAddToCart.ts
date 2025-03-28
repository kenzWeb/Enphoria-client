import toast from 'react-hot-toast'
import {IHandleAddToCart} from '../types/cart.interface'

export const handleAddToCart = ({
	selectedSize,
	selectedColor,
	product,
	user,
	addToCart,
}: IHandleAddToCart) => {
	if (!user) {
		toast.error('Please login to add product to cart')
		return
	}
	if (!selectedSize || !selectedColor) {
		toast.error('Please select size and color')
		return
	} else {
		toast.success('Product added to cart')
	}
	if (!product) return
	addToCart({
		id: product.id || '',
		name: product.name,
		size: selectedSize,
		color: selectedColor,
		price: product.price,
		img: product.images[0],
		quantity: 1,
	})
}
