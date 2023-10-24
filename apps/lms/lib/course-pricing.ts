import { formatPrice } from '@/lib/format';

export const getCoursePrice = (
  price: number,
  isPaidMember: boolean,
  purchased: boolean,
  isFree: boolean,
): string => {
  if (isFree || price === 0) {
    return 'Free';
  } else if (isPaidMember) {
    return 'Included';
  } else if (purchased) {
    return 'Purchased';
  } else {
    return formatPrice(price);
  }
};
