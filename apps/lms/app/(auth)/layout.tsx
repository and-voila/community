const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full items-center justify-center bg-gradient-to-b from-[#242629] from-50% via-brand/10 to-brand/50">
      {children}
    </div>
  );
};

export default AuthLayout;
