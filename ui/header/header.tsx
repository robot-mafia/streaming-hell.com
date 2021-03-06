import { FC } from 'react';
import Link from 'next/link';
import s from './header.module.css';

export const Header: FC = () => {
  return (
    <header className={s.box}>
      <Link href="/">
        <a className={s.logo}>
          <img
            className={s.logoImg}
            src="/images/logo.svg"
            width={35}
            height={35}
            alt="Streaming Hell logotype"
          />
          <div className={s.logoText}>Streaming Hell</div>
        </a>
      </Link>
    </header>
  );
};
