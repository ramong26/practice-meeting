import { Link } from '@tanstack/react-router';

import { MenuIcon } from '@/shared/assets/icons';
import { useBreakPoint } from '@/shared/lib/useBreakPoint';
import { route } from '@/shared/constants/route';

import Logo from 'src/assets/logo.svg';

export function Header() {
  const breakPoint = useBreakPoint();

  return (
    <header className='mx-auto max-w-7xl px-4 py-2 transition-all duration-200 md:px-6 md:py-4'>
      <div className='flex flex-row items-center justify-between'>
        <div className='flex items-center gap-4'>
          <Link to={route.landing}>
            <img
              src={Logo}
              alt='같이달램 로고'
              className='m-2 h-4 w-auto cursor-pointer transition-all duration-200 md:h-[22.85px]'
            />
          </Link>
          <div className='hidden items-center gap-2 transition-all duration-200 md:flex'>
            <HeaderBaseText text='모임 찾기' />
            <HeaderBaseText text='찜한 모임' />
            <HeaderBaseText text='모든 리뷰' />
            <HeaderBaseText text='달램 토크' />
          </div>
        </div>
        {breakPoint === 'desktop' ? (
          <HeaderBaseText text='로그인' />
        ) : (
          <MenuIcon />
        )}
      </div>
    </header>
  );
}

// TODO: link 타입은 추후 필수값으로 수정
interface HeaderBaseTextProps {
  text: string;
  link?: string;
}
function HeaderBaseText({ text, link }: HeaderBaseTextProps) {
  return (
    <Link
      to={link}
      preload='intent'
      className={`p-4 text-base font-medium text-[#737373] transition-all duration-200 hover:font-semibold hover:text-[#009973]`}
    >
      {text}
    </Link>
  );
}
