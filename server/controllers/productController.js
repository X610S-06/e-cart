import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

// Fetch all products - GET /api/products - public
const getProducts = asyncHandler(async(req, res) => {
    const products = await Product.find({})

    res.json(products)
})

// Fetch a product - GET /api/products/id - public
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

		if (product) {
			res.json(product)
		} else {
			res.status(404)
			throw new Error('Product not found')
		}
})

export { getProducts, getProductById }