import { auth } from '@clerk/nextjs/server'
import React from 'react'

const Test = async () => {
	const { getToken } = await auth()
	const token = await getToken()
	const resProduct = await fetch('http://localhost:8000/test', {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
	const product = await resProduct.json()

	console.log(product, 'Product test')

	const resPayment = await fetch('http://localhost:8001/test', {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
	const payment = await resPayment.json()

	console.log(payment, 'Payment test')

	const resOrder = await fetch('http://localhost:8002/test', {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
	const order = await resOrder.json()

	console.log(order, 'Order test')

	return <div>Test</div>
}

export default Test
