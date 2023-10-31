import { Logo } from '@ui/index';

import UserAuthForm from '@/app/ui/user-auth-form';

const LoginPage = () => {
  return (
    <div className="max-w-sm">
      <div className="p-6 flex items-center justify-center">
        <Logo fillOnHover className="h-6 md:h-8" />
        <sup className="text-xs -ml-2 md:-ml-3 text-brand font-mono">beta</sup>
      </div>
      <UserAuthForm />
    </div>
  );
};

export default LoginPage;
