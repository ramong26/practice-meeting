interface AuthLayoutProps {
  children: React.ReactNode;
}
export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="bg-gray-scale-50 pt-18.25 md:pt-45.5 lg:pt-39 mx-auto h-screen w-full ">
      {children}
    </div>
  );
}
