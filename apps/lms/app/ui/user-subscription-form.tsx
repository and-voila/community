import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from 'ui';

import { SubscriptionButton } from '@/app/ui/subscription-button';

interface UserSubscriptionFormProps {
  isPaidMember: boolean;
}

export const UserSubscriptionForm: React.FC<UserSubscriptionFormProps> = ({
  isPaidMember,
}) => (
  <div className="grid gap-10 max-w-md mx-auto">
    <Card>
      <CardHeader>
        <CardTitle>
          {isPaidMember ? 'Manage Subscription' : 'Ready to go Premium?'}
        </CardTitle>
        <CardDescription>
          {isPaidMember
            ? 'Update your payment info, change billing cycle, or cancel. Payment processing handled securely by Stripe.'
            : 'Subscribe today. Backed by our 100% Delight Guarantee. Payments are handled by Stripe, ensuring a secure and smooth experience.'}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <SubscriptionButton isPaidMember={isPaidMember} size="sm" />
      </CardFooter>
    </Card>
  </div>
);
