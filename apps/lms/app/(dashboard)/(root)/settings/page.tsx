import { checkSubscription } from '@/app/lib/actions/check-subscription';
import { getCurrentUser } from '@/app/lib/session';
import { UserNameForm } from '@/app/ui/user-name-form';
import { UserSubscriptionForm } from '@/app/ui/user-subscription-form';

const SettingsPage = async () => {
  const isPaidMember = await checkSubscription();
  const user = await getCurrentUser();

  return (
    <div className="flex flex-col gap-6 justify-center  md:mt-8 px-8 lg:px-12">
      <div className="grid gap-10 max-w-md mx-auto">
        <UserNameForm user={{ id: user.id, name: user.name || '' }} />
      </div>
      <UserSubscriptionForm isPaidMember={isPaidMember} />
    </div>
  );
};

export default SettingsPage;
