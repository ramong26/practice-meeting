import { Header } from '@/widgets/header';

interface EntireLayoutProps {
  children: React.ReactNode;
}
export function EntireLayout({ children }: EntireLayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
