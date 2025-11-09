import { auth } from '@clerk/nextjs/server';
import React from 'react';

const Test = async () => {
  const { getToken } = await auth();
  const token = await getToken();
  const baseURL = process.env.NEXT_PUBLIC_PRODUCT_SERVICE_URL;

  const resProduct = await fetch(`${baseURL}/test`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const product = await resProduct.json();
  console.log(product);
  // const resPayment = await fetch('http://localhost:8001/test', {
  // 	headers: {
  // 		Authorization: `Bearer ${token}`
  // 	}
  // })
  // const payment = await resPayment.json()

  // const resOrder = await fetch('http://localhost:8002/test', {
  // 	headers: {
  // 		Authorization: `Bearer ${token}`
  // 	}
  // })
  // const order = await resOrder.json()

  return <div>Test</div>;
};

export default Test;
