import { formatPrice } from '@/lib/format';

export const getCoursePrice = (
  price: number,
  isPro: boolean,
  purchased: boolean,
  isFree: boolean,
): string => {
  if (isFree || price === 0) {
    return 'Free';
  } else if (isPro) {
    return 'Included';
  } else if (purchased) {
    return 'Purchased';
  } else {
    return formatPrice(price);
  }
};
