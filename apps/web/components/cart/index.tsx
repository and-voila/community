import { cookies } from 'next/headers';

import CartModal from '@/components/cart/modal';
import { getCart } from '@/lib/shopify';

export default async function Cart() {
  const cartId = cookies().get('cartId')?.value;
  let cart;

  if (cartId) {
    cart = await getCart(cartId);
  }

  return <CartModal cart={cart} />;
}
