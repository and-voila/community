import { UserProfile } from '@clerk/nextjs';
import { SubscriptionButton } from 'components/subscription-button';
import { checkSubscription } from 'lib/subscription';
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'ui';

const SettingsPage = async () => {
  const isPaidMember = await checkSubscription();

  return (
    <div className="md:mt-8">
      <div className="mt-16 w-full space-y-4 px-8 lg:w-3/4 lg:px-12 xl:w-2/3">
        <Tabs defaultValue="subscription" className="w-full lg:w-3/4 xl:w-2/3">
          <TabsList className="px-2 py-1">
            <TabsTrigger value="subscription">Subscription</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>
          <TabsContent
            value="subscription"
            className="mt-6 space-y-4 lg:space-y-6"
          >
            <h3 className="text-base font-semibold text-foreground lg:text-lg">
              {isPaidMember ? 'Manage Subscription.' : 'Ready to go Premium?'}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground lg:text-base">
              {isPaidMember
                ? 'Update your payment info, change billing cycle, or cancel. Payment processing handled securely by Stripe.'
                : 'Subscribe today. Backed by our 100% Delight Guarantee. Payments are handled by Stripe, ensuring a secure and smooth experience.'}
            </p>
            <div className="">
              <SubscriptionButton isPaidMember={isPaidMember} />
            </div>
          </TabsContent>
          <TabsContent value="profile" className="mt-6 space-y-4 lg:space-y-6">
            <h3 className="text-base font-semibold text-foreground lg:text-lg">
              Manage Your User Profile
            </h3>
            <p className="mt-2 text-sm text-muted-foreground lg:text-base">
              Update your avatar, connect your accounts, or secure your account
              with 2FA.
            </p>
            <UserProfile />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SettingsPage;
